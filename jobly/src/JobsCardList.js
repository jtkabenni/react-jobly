import React, { useContext } from "react";
import JobCard from "./JobCard";

function JobsCardList({ jobs }) {
  return (
    <>
      {jobs.map((job) => (
        <JobCard job={job}></JobCard>
      ))}
    </>
  );
}

export default JobsCardList;
