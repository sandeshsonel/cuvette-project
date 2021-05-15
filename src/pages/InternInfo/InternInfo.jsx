import React, { useState } from "react";
import FormOne from "../../sections/FormOne";
import FormTwo from "../../sections/FormTwo";

const defaultJobState = {
  jobTitle: "",
  jobLocation: "",
  jobSkills: "",
  jobMode: "",
  jobType: false,
  stipendRange: null,
  jobstartDate: {
    date: "",
    month: "",
    year: "",
  },
  jobDuration: "",
  jobDescription: "",
};

const InternInfo = (props) => {
  const [value, setValue] = useState(1);
  const [internJobInfo, setInternJobInfo] = useState(defaultJobState);

  const initInternJobInfo = () => {
    setInternJobInfo(defaultJobState);
  };

  return (
    <div>
      {value === 1 ? (
        <FormTwo setValue={setValue} internJobInfo={internJobInfo} setInternJobInfo={setInternJobInfo} />
      ) : (
        <FormOne initInternJobInfo={initInternJobInfo} setValue={setValue} internJobInfo={internJobInfo} setInternJobInfo={setInternJobInfo} />
      )}
    </div>
  );
};

export default InternInfo;
