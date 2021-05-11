import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormTwo = (props) => {
  const [check, setCheck] = React.useState(false);
  const [formDetail, setFormDetail] = useState({
    jobTitle: "",
    jobLocation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="xl:border py-5 px-5 rounded">
        <form onSubmit={handleSubmit} action="">
          <div className="space-y-5">
            <div>
              <label className="font-semiBold text-sm xl:text-base" htmlFor="">
                Job Title
              </label>
              <input
                value={formDetail.jobTitle}
                onChange={(e) => setFormDetail({ ...formDetail, jobTitle: e.target.value })}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                type="text"
                placeholder="e.g. Full stack developer"
              />
            </div>
            <div>
              <label className="font-semiBold text-sm xl:text-base" htmlFor="">
                Job Location
              </label>
              <input
                value={formDetail.jobLocation}
                onChange={(e) => setFormDetail({ ...formDetail, jobLocation: e.target.value })}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                type="text"
                placeholder="Enter the location"
              />
            </div>
            <div onClick={(e) => setCheck(!check)} className="mt-2 flex items-center space-x-2">
              <input className="cursor-pointer" value={check} checked={check} onChange={(e) => setCheck(!check)} type="checkbox" />
              <p className="cursor-pointer text-gray-500">This job is remote</p>
            </div>
            <Link to="/intern-details">
              <button
                type="submit"
                className="uppercase font-semiBold bg-blue-400 hover:bg-blue-500 text-white rounded float-right px-6 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
              >
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
