import React, { useState, useContext, useEffect } from "react";
import { Card, CardText } from "reactstrap";
import UserContext from "./UserContext";

function JobCard({ job }) {
  const [applied, setApplied] = useState(null);
  const { user, apply, appliedJobs } = useContext(UserContext);

  useEffect(() => {
    if (appliedJobs.has(job.id)) {
      setApplied(true);
    }
  }, []);

  function handleApply() {
    console.log(job.id, apply);
    apply(job.id);
    setApplied(true);
  }
  return (
    <Card>
      <h4>{job.title}</h4>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      {applied ? (
        <button disabled>Applied</button>
      ) : (
        <button onClick={handleApply}>Apply</button>
      )}
    </Card>
  );
}

export default JobCard;
