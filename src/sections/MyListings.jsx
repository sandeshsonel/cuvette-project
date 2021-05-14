import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";

// images
// import eyeIcon from "../assets/images/eyeIcon.svg";
// import deleteIcon from "../assets/images/deleteIcon.svg";
// import updateIcon from "../assets/images/editIcon.svg";

// actions
import { getJobList } from "../app/actions";
import CircularLoader from "../components/CircularProgressBar/CircularLoader";

const MyListings = (props) => {
  const { myJobs, getJobList, isLoading } = props;
  const [open, setOpen] = useState(false);
  const [deleteJobDialog, setDeleteDialog] = useState(false);
  const [selectJobList, setSelectJobList] = useState(null);
  const [isUpdateJobDetail, setIsUpdateJobDetail] = useState(false);

  useEffect(() => {
    if (myJobs.length === 0) {
      getJobList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenJobDetailDialog = (jobList) => {
    setOpen(true);
    setSelectJobList(jobList);
  };
  const handleCloseJobDetailDialog = () => {
    setOpen(false);
  };

  // const handleOpenDeleteJobDialog = (jobId) => {
  //   setDeleteDialog(true);
  //   // setSelectJobList(jobId);
  // };
  const handleCloseDeleteJobDialog = () => {
    setDeleteDialog(false);
  };

  console.log(myJobs);

  if (isLoading) {
    return <CircularLoader />;
  }

  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -60%)", width: myJobs.length ? "678px" : "auto" }} className="">
      <div className={myJobs.length ? "float-right pb-6" : "m-auto"}>
        <Link to="/">
          <button className="bg-blue-500 text-white px-3 py-2 text-sm rounded focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200">
            + Add another job
          </button>
        </Link>
      </div>
      {myJobs.length > 0 && (
        <div className="w-full overflow-y-auto px-6 py-4 border pb-4 pt-4 rounded-md">
          <ul className="space-y-4 max-h-52">
            {myJobs.map((myListItem, idx) => (
              <li className="flex items-center justify-between pb-2">
                <div className=" w-64 overflow-ellipsis break-words">
                  <h1 className="font-medium">
                    {idx + 1}. {myListItem.jobTitle}
                  </h1>
                </div>
                <div>
                  <p className="text-gray-500">{moment(myListItem.createdAt).subtract(10, "days").calendar()}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleOpenJobDetailDialog(myListItem)}
                    className="text-sm px-1 py-1 bg-gray-100 font-medium rounded uppercase outline-none focus:outline-none"
                  >
                    Details
                  </button>

                  {/* <button
                    onClick={() => handleOpenDeleteJobDialog(myListItem._id)}
                    className="outline-none focus:outline-none px-1 py-1 rounded hover:bg-gray-200 bg-gray-100"
                  >
                    <img className="w-5" src={deleteIcon} alt="" />
                  </button> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectJobList && (
        <Dialog onClose={handleCloseJobDetailDialog} aria-labelledby="simple-dialog-title" open={open}>
          <div className="space-y-3 py-4 px-4">
            <div className="flex items-center space-x-3">
              <div className="w-full">
                <label className="font-medium" htmlFor="">
                  Job title
                </label>
                <input
                  disabled={isUpdateJobDetail ? false : true}
                  defaultValue={isUpdateJobDetail ? selectJobList.jobTitle : null}
                  value={!isUpdateJobDetail ? selectJobList.jobTitle : null}
                  className="mt-1 text-sm xl:text-base lg:text-base md:text-base py-2 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  type="text"
                  placeholder="Job title"
                />
              </div>
              <div className="w-full">
                <label className="font-medium" htmlFor="">
                  Job Location
                </label>
                <input
                  disabled
                  value={selectJobList.jobLocation}
                  className="mt-1 text-sm xl:text-base lg:text-base md:text-base py-2 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  type="text"
                  placeholder="Job title"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-full">
                <label className="font-medium" htmlFor="">
                  Job Type
                </label>
                <input
                  disabled
                  value={selectJobList.jobType}
                  className="mt-1 text-sm xl:text-base lg:text-base md:text-base py-2 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  type="text"
                  placeholder="Job title"
                />
              </div>
              <div className="w-full">
                <label className="font-medium" htmlFor="">
                  Job Mode
                </label>
                <input
                  disabled
                  value={selectJobList.jobMode}
                  className="mt-1 text-sm xl:text-base lg:text-base md:text-base py-2 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  type="text"
                  placeholder="Job title"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div>
                <label className="font-medium" htmlFor="">
                  Job Start Date
                </label>
                <input
                  disabled
                  value={moment(selectJobList.createdAt).subtract(10, "days").calendar()}
                  className="mt-1 text-sm xl:text-base lg:text-base md:text-base py-2 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  type="text"
                  placeholder="Job title"
                />
              </div>
              <div>
                <label className="font-medium" htmlFor="">
                  Job Duration
                </label>
                <input
                  disabled
                  value={selectJobList.jobDuration}
                  className="mt-1 text-sm xl:text-base lg:text-base md:text-base py-2 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  type="text"
                  placeholder="Job title"
                />
              </div>
            </div>
            <div>
              <label className="font-medium" htmlFor="">
                Job Skills
              </label>
              <input
                disabled
                value={selectJobList.jobSkills}
                className="mt-1 text-sm xl:text-base lg:text-base md:text-base py-2 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                type="text"
                placeholder="Job title"
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="">
                Job Description
              </label>
              <textarea
                disabled
                value={selectJobList.jobDescription}
                // value={internJobInfo.jobDescription}
                // onChange={(e) => setInternJobInfo({ ...internJobInfo, jobDescription: e.target.value })}
                className="mt-2 xl:mt-3 text-sm xl:text-base lg:text-base md:text-base py-3 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder={"Enter the job description\nTry to be as precise as possible (250-300 words)\n\n1.\n2.\n3."}
                name=""
                id=""
                cols="30"
                rows="10"
                max
              ></textarea>
            </div>
            <div className="flex items-center space-x-3">
              {/* {
                isUpdateJobDetail ? (
                  <button disabled onClick={() => setIsUpdateJobDetail(!isUpdateJobDetail)} className="w-full bg-blue-600 text-white py-2 uppercase font-medium">
                Update
              </button>
                ): (
                  <button onClick={() => setIsUpdateJobDetail(!isUpdateJobDetail)} className="w-full bg-blue-600 text-white py-2 uppercase font-medium">
                  Edit
                </button>
                )
              } */}
              <button disabled onClick={() => setIsUpdateJobDetail(!isUpdateJobDetail)} className="w-full bg-blue-400 text-white py-2 uppercase font-medium">
                {isUpdateJobDetail ? "Update" : "Edit"}
              </button>
              <button onClick={handleCloseJobDetailDialog} className="w-full bg-blue-600 text-white py-2 uppercase font-medium">
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}
      <Dialog onClose={handleCloseDeleteJobDialog} aria-labelledby="simple-dialog-title" open={deleteJobDialog}>
        <div className="py-4 px-4 space-x-3">
          <button onClick={handleCloseDeleteJobDialog} className="px-4 py-2 uppercase font-medium">
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 uppercase font-medium text-white">Confirm</button>
        </div>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.myJobs.isLoading,
  myJobs: state.myJobs.myJobs,
});

const mapDispatchToProps = (dispatch) => ({
  getJobList: () => dispatch(getJobList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListings);
