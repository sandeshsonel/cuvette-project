import React from "react";
import { connect } from "react-redux";
import InternInfo from "../InternInfo/InternInfo";

const HomePage = ({ userDetails }) => {
  return (
    <div>
      <div>
        {userDetails && userDetails.jobDetails.length === 0 ? (
          <InternInfo />
        ) : (
          <div className="text-2xl font-medium" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            Welcome to Cuvette
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userProfile,
});

export default connect(mapStateToProps)(HomePage);
