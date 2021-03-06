import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { setAddNewJobDetails, addNewJobSuccess, updateApiResponse } from "../app/actions/job.action";
import CircularLoader from "../components/CircularProgressBar/CircularLoader";

const StipendSlider = withStyles({
  root: {
    color: "rgb(59, 130, 246)",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid rgb(59, 130, 246)",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 6,
    borderRadius: 4,
  },
})(Slider);

const FormOne = (props) => {
  const { setValue, internJobInfo, setInternJobInfo, setAddNewJobDetails, isLoading, apiResponse, updateApiResponse } = props;
  const [check, setCheck] = useState("");

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    warning: "success",
  });

  const handleJobMode = (jobMode) => {
    setInternJobInfo({ ...internJobInfo, jobMode: jobMode });
    setCheck(jobMode);
  };

  const generateMonthOptions = () => {
    let array = [];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < monthNames.length; i++) {
      array.push(<option value={i}>{monthNames[i]}</option>);
    }
    return array;
  };

  const generateDateOptions = () => {
    let array = [];

    for (let i = 1; i <= 31; i++) {
      array.push(<option value={i}>{i}</option>);
    }
    return array;
  };
  const generateYearOptions = () => {
    const arr = [];

    const startYear = 1900;
    const endYear = 2005;

    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let jobStartDate = new Date(internJobInfo.jobstartDate.year, internJobInfo.jobstartDate.month, internJobInfo.jobstartDate.date, 0, 0, 0, 0);

    if (!internJobInfo.jobTitle) {
      setSnackbar({ ...snackbar, open: true, message: "Please select your skills", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "info" });
      }, 2000);
    } else if (!internJobInfo.jobMode) {
      setSnackbar({ ...snackbar, open: true, message: "Please select your job mode", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "info" });
      }, 2000);
    } else if (!internJobInfo.stipendRange) {
      setSnackbar({ ...snackbar, open: true, message: "Please select your stipend range", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "info" });
      }, 2000);
    } else if (!internJobInfo.jobDuration) {
      setSnackbar({ ...snackbar, open: true, message: "Please select your job duration", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "info" });
      }, 2000);
    } else {
      setAddNewJobDetails({ jobDetails: { ...internJobInfo, jobstartDate: jobStartDate } });
    }
  };

  useEffect(() => {
    if (apiResponse === 1) {
      props.initInternJobInfo();
      setValue(1);
      updateApiResponse(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiResponse]);

  console.log("xolo");

  return (
    <div className="py-2 px-4 xl:py-8 xl:px-6 pt-2 pb-6">
      {isLoading && <CircularLoader />}
      <div className="max-w-2xl m-auto xl:border xl:rounded-md xl:shadow-sm xl:py-8 xl:px-6 pt-2 pb-6">
        <form onSubmit={handleSubmit} action="">
          <div className="py-2 xl:py-4">
            <div className="text-center">
              {/* <Link to="/"> */}
              <button onClick={() => setValue(1)} className="float-left outline-none focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="48"
                    d="M244 400L100 256l144-144M120 256h292"
                  />
                </svg>
              </button>
              {/* </Link> */}
              <p className="font-semiBold"># Intern Details</p>
            </div>
          </div>
          <div className="space-y-4 mt-2">
            <div>
              <label className="font-semiBold text-sm xl:text-base lg:text-base md:text-base" htmlFor="">
                Your Skills
              </label>
              <input
                value={internJobInfo.jobSkills}
                onChange={(e) => setInternJobInfo({ ...internJobInfo, jobSkills: e.target.value })}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                type="text"
                placeholder="Start typing and select the tab"
              />
            </div>
            <div className="pb-1">
              <label className="font-semiBold text-sm xl:text-base lg:text-base md:text-base" htmlFor="">
                Mode
              </label>
              <div className="mt-1 xl:mt-2 xl:flex xl:items-center xl:space-x-3 grid grid-cols-2 gap-3">
                <span
                  onClick={() => handleJobMode("part-time")}
                  className={`flex items-start hover:border-blue-400 space-x-3 cursor-pointer  border-2 border-transparent px-2 py-2 xl:px-3 xl:py-3 rounded-md bg-gray-100 ${
                    check === "part-time" ? "border-2 bg-blue-50 border-blue-400" : ""
                  }`}
                >
                  <input
                    value="part-time"
                    checked={internJobInfo.jobMode === "part-time"}
                    onChange={(e) => handleJobMode(e.target.value)}
                    className="mt-1 w-4 h-4 rounded-full cursor-pointer"
                    type="checkbox"
                  />
                  <div className="text-sm xl:text-base lg:text-base md:text-base">
                    <h1>Part-time</h1>
                    <p className="text-sm">20 hrs/week</p>
                  </div>
                </span>
                <span
                  onClick={() => handleJobMode("semi-full-time")}
                  className={`flex items-start hover:border-blue-400  space-x-3 cursor-pointer  border-2 border-transparent px-3 py-3 rounded-md bg-gray-100 ${
                    check === "semi-full-time" ? "border-2 bg-blue-50 border-blue-400" : ""
                  }`}
                >
                  <input
                    value="semi-full-time"
                    checked={internJobInfo.jobMode === "semi-full-time"}
                    onChange={(e) => handleJobMode(e.target.value)}
                    className="mt-1 w-4 h-4  cursor-pointer"
                    type="checkbox"
                  />
                  <div className="text-sm xl:text-base lg:text-base md:text-base">
                    <h1>Semi Full-time</h1>
                    <p className="text-sm">30 hrs/week</p>
                  </div>
                </span>
                <span
                  onClick={() => handleJobMode("full-time")}
                  className={`flex items-start hover:border-blue-400  space-x-3 cursor-pointer  border-2 border-transparent px-3 py-3 rounded-md bg-gray-100 ${
                    check === "full-time" ? "border-2 bg-blue-50 border-blue-400" : ""
                  }`}
                >
                  <input
                    value="full-time"
                    checked={internJobInfo.jobMode === "full-time"}
                    onChange={(e) => handleJobMode(e.target.value)}
                    className="mt-1 w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <div className="text-sm xl:text-base lg:text-base md:text-base">
                    <h1>Full-time</h1>
                    <p className="text-sm">40 hrs/week</p>
                  </div>
                </span>
              </div>
            </div>

            <div>
              <label className="font-semiBold text-sm xl:text-base lg:text-base md:text-base" htmlFor="">
                Stipend Range
              </label>
              <div className="mt-6">
                <StipendSlider
                  aria-label="pretto slider"
                  getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")}
                  defaultValue={[20000, 40000]}
                  value={internJobInfo.stipendRange !== null ? [internJobInfo.stipendRange[0], internJobInfo.stipendRange[1]] : [20000, 40000]}
                  onChange={(e, val) => setInternJobInfo({ ...internJobInfo, stipendRange: val })}
                  min={5000}
                  max={100000}
                  step={2000}
                  valueLabelDisplay="on"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 uppercase">
                <div className="">Inr 5,000 </div>
                <div className="">Inr 1,00,000</div>
              </div>
            </div>

            <div className="space-y-3 xl:flex xl:space-x-6 xl:space-y-0">
              <div>
                <label className="font-semiBold text-sm xl:text-base lg:text-base md:text-base" htmlFor="">
                  Start Date
                </label>
                <div className="flex gap-3 mt-2">
                  <select
                    required={true}
                    value={internJobInfo.jobstartDate.month}
                    onChange={(e) => setInternJobInfo({ ...internJobInfo, jobstartDate: { ...internJobInfo.jobstartDate, month: e.target.value } })}
                    className="w-36 text-sm xl:text-base lg:text-base md:text-base bg-white cursor-pointer py-2 border rounded-md outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                    name=""
                    id=""
                  >
                    <option selected disabled>
                      Month
                    </option>
                    {generateMonthOptions()}
                  </select>
                  <select
                    required={true}
                    value={internJobInfo.jobstartDate.date}
                    onChange={(e) => setInternJobInfo({ ...internJobInfo, jobstartDate: { ...internJobInfo.jobstartDate, date: e.target.value } })}
                    className="w-20 text-sm xl:text-base lg:text-base md:text-base bg-white placeholder-gray-400 placeholder-opacity-70 inline-block cursor-pointer py-2 border rounded-md outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                    name=""
                    id=""
                  >
                    <option selected disabled>
                      Day
                    </option>
                    {generateDateOptions()}
                  </select>
                  <select
                    required
                    value={internJobInfo.jobstartDate.year}
                    onChange={(e) => setInternJobInfo({ ...internJobInfo, jobstartDate: { ...internJobInfo.jobstartDate, year: e.target.value } })}
                    className="w-20 text-sm xl:text-base lg:text-base md:text-base bg-white placeholder-gray-400 inline-block cursor-pointer py-2 border rounded-md outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                    name=""
                    id=""
                  >
                    <option selected disabled>
                      Year
                    </option>
                    {generateYearOptions()}
                  </select>
                </div>
              </div>
              <div className="">
                <label className="font-semiBold text-sm  xl:text-base lg:text-base md:text-base" htmlFor="">
                  Duration
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    value={internJobInfo.jobDuration}
                    onChange={(e) => setInternJobInfo({ ...internJobInfo, jobDuration: e.target.value })}
                    className="w-20 px-3 mt-2 text-sm xl:text-base lg:text-base md:text-base bg-white placeholder-gray-400 inline-block cursor-pointer py-2 border rounded-md outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                    type="number"
                    placeholder=""
                  />
                  <p className="text-gray-400 text-sm xl:text-base">Months</p>
                </div>
              </div>
            </div>

            <div>
              <label className="font-semiBold text-sm xl:text-base lg:text-base md:text-base" htmlFor="">
                Job Description
              </label>
              <textarea
                value={internJobInfo.jobDescription}
                onChange={(e) => setInternJobInfo({ ...internJobInfo, jobDescription: e.target.value })}
                className="mt-2 xl:mt-3 text-sm xl:text-base lg:text-base md:text-base py-3 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder={"Enter the job description\nTry to be as precise as possible (250-300 words)\n\n1.\n2.\n3."}
                name=""
                id=""
                cols="30"
                rows="10"
                max
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="mt-5 bg-blue-500 rounded-md font-semiBold w-full text-white py-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
      {snackbar.open && (
        <Snackbar
          autoHideDuration={2000}
          anchorOrigin={{ vertical: snackbar.vertical, horizontal: snackbar.horizontal }}
          open={snackbar.open}
          key={snackbar.vertical + snackbar.horizontal}
        >
          <Alert severity={snackbar.warning}>{snackbar.message}</Alert>
        </Snackbar>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.myJobs.isLoading,
  jobDetails: state.userProfile.jobDetails,
  apiResponse: state.myJobs.apiResponse,
});

const mapDispatchToProps = (dispatch) => ({
  setAddNewJobDetails: (jobDetails) => dispatch(setAddNewJobDetails(jobDetails)),
  addNewJobSuccess: () => dispatch(addNewJobSuccess()),
  updateApiResponse: (res) => dispatch(updateApiResponse(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormOne);
