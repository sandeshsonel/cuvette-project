import React from "react";
import { connect } from "react-redux";
import InternInfo from "../InternInfo/InternInfo";

const HomePage = ({ userDetails }) => {
  return (
    <div>
      <InternInfo />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userProfile,
});

export default connect(mapStateToProps)(HomePage);
