import React, { useState } from "react";
import FormOne from "../../sections/FormOne";
import FormTwo from "../../sections/FormTwo";

const InternInfo = () => {
  const [value, setValue] = useState(1);
  const [internJobInfo, setInternJobInfo] = useState({
    jobTitle: "",
    jobLocation: "",
    JobSkills: "",
    jobMode: "",
    stipendRange: null,
    jobstartDate: {
      date: "",
      month: "",
      year: "",
    },
    jobDuration: "",
    jobDescription: "",
  });

  console.log("momo", internJobInfo);
  return (
    <div>
      {value === 1 ? (
        <FormTwo setValue={setValue} internJobInfo={internJobInfo} setInternJobInfo={setInternJobInfo} />
      ) : (
        <FormOne setValue={setValue} internJobInfo={internJobInfo} setInternJobInfo={setInternJobInfo} />
      )}
    </div>
  );
};

export default InternInfo;
