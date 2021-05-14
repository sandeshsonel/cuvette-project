import React, { useState } from "react";
import { connect } from "react-redux";
import FormOne from "../../sections/FormOne";
import FormTwo from "../../sections/FormTwo";

const defaultJobState = {
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
};

const InternInfo = () => {
  const [value, setValue] = useState(1);
  const [internJobInfo, setInternJobInfo] = useState(defaultJobState);

  React.useEffect(() => {
    if (value === 1) {
      setInternJobInfo(defaultJobState);
    }
  }, [value]);

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

const mapStateToProps = (state) => ({
  apiResponse: state.myJobs.apiResponse,
});

export default connect(mapStateToProps)(InternInfo);
