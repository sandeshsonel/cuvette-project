import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

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

const FormOne = ({ min = 5000, max = 1000000 }) => {
  const [check, setCheck] = useState("part-time");

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

  return (
    <div className="py-2 px-4 xl:py-8 xl:px-6 pt-2 pb-6">
      <div className="max-w-2xl m-auto xl:border xl:rounded-md xl:shadow-sm xl:py-8 xl:px-6 pt-2 pb-6">
        <form action="">
          <div className="py-2 xl:py-4">
            <div className="text-center">
              <Link to="/">
                <button className="float-left outline-none focus:outline-none">
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
              </Link>
              <p className="font-semiBold"># Intern Details</p>
            </div>
          </div>
          <div className="space-y-4 mt-2">
            <div>
              <label className="font-semiBold text-sm xl:text-base lg:text-base md:text-base" htmlFor="">
                Your Skills
              </label>
              <input
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
                  onClick={() => setCheck("part-time")}
                  className={`flex items-start hover:border-blue-400 space-x-3 cursor-pointer  border-2 border-transparent px-2 py-2 xl:px-3 xl:py-3 rounded-md bg-gray-100 ${
                    check === "part-time" ? "border-2 bg-blue-50 border-blue-400" : ""
                  }`}
                >
                  <input
                    value="part-time"
                    checked={check === "part-time"}
                    onChange={(e) => setCheck(e.target.value)}
                    required
                    className="mt-1 w-4 h-4 rounded-full cursor-pointer"
                    type="checkbox"
                  />
                  <div className="text-sm xl:text-base lg:text-base md:text-base">
                    <h1>Part-time</h1>
                    <p className="text-sm">20 hrs/week</p>
                  </div>
                </span>
                <span
                  onClick={() => setCheck("semi-full-time")}
                  className={`flex items-start hover:border-blue-400  space-x-3 cursor-pointer  border-2 border-transparent px-3 py-3 rounded-md bg-gray-100 ${
                    check === "semi-full-time" ? "border-2 bg-blue-50 border-blue-400" : ""
                  }`}
                >
                  <input
                    value="semi-full-time"
                    checked={check === "semi-full-time"}
                    onChange={(e) => setCheck(e.target.value)}
                    className="mt-1 w-4 h-4  cursor-pointer"
                    type="checkbox"
                  />
                  <div className="text-sm xl:text-base lg:text-base md:text-base">
                    <h1>Semi Full-time</h1>
                    <p className="text-sm">30 hrs/week</p>
                  </div>
                </span>
                <span
                  onClick={() => setCheck("full-time")}
                  className={`flex items-start hover:border-blue-400  space-x-3 cursor-pointer  border-2 border-transparent px-3 py-3 rounded-md bg-gray-100 ${
                    check === "full-time" ? "border-2 bg-blue-50 border-blue-400" : ""
                  }`}
                >
                  <input
                    value="full-time"
                    checked={check === "full-time"}
                    onChange={(e) => setCheck(e.target.value)}
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
                  onChange={(e, val) => console.log("xoxo", val)}
                  min={5000}
                  max={100000}
                  step={100}
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
                    required
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
                className="mt-2 xl:mt-3 text-sm xl:text-base lg:text-base md:text-base py-3 px-3 cursor-pointer w-full border rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder={"Enter the job description\nTry to be as precise as possible (250-300 words)\n\n1.\n2.\n3."}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <button className="mt-5 bg-blue-500 rounded-md font-semiBold w-full text-white py-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOne;
