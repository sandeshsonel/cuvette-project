import React from "react";

const MyListings = () => {
  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -60%)", width: "678px" }} className="">
      <div className="float-right pb-6">
        <button className="bg-blue-500 text-white px-3 py-2 text-sm rounded focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200">
          + Add another job
        </button>
      </div>
      <div className="w-full overflow-y-auto px-6 py-4 border pb-4 pt-4 rounded-md">
        <ul className="space-y-4 max-h-52">
          <li className="flex items-center justify-between">
            <h1>1. Frontend Developer </h1>
            <p>22/03/2021</p>
            <button className="text-sm outline-none focus:outline-none">Details</button>
          </li>
          <li className="flex items-center justify-between">
            <h1>2. Frontend Developer </h1>
            <p>22/03/2021</p>
            <button className="text-sm outline-none focus:outline-none">Details</button>
          </li>
          <li className="flex items-center justify-between">
            <h1>3. Frontend Developer </h1>
            <p>22/03/2021</p>
            <button className="text-sm outline-none focus:outline-none">Details</button>
          </li>
          <li className="flex items-center justify-between">
            <h1>4. Frontend Developer </h1>
            <p>22/03/2021</p>
            <button className="text-sm outline-none focus:outline-none">Details</button>
          </li>
          <li className="flex items-center justify-between">
            <h1>5. Frontend Developer </h1>
            <p>22/03/2021</p>
            <button className="text-sm outline-none focus:outline-none">Details</button>
          </li>
          <li className="flex items-center justify-between">
            <h1>6. Frontend Developer </h1>
            <p>22/03/2021</p>
            <button className="text-sm outline-none focus:outline-none">Details</button>
          </li>
          <li className="flex items-center justify-between">
            <h1>7. Frontend Developer </h1>
            <p>22/03/2021</p>
            <button className="text-sm outline-none focus:outline-none">Details</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyListings;
