import React, { useState, useEffect, useContext } from "react";
import { Card, CardText } from "reactstrap";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

import JobsCardList from "./JobsCardList";
function JobsList() {
  const { user } = useContext(UserContext);
  const [jobs, setJobs] = useState([]);
  useEffect(
    function getJobsOnLoad() {
      async function jobs() {
        const jobs = await JoblyApi.getJobs();
        setJobs(jobs);
      }
      jobs();
    },

    []
  );

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <JobsCardList jobs={jobs}></JobsCardList>
    </div>
  );
}

export default JobsList;
