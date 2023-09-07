import React, { useEffect, useState, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import JobCard from "../JobCard";
import UserContext from "../UserContext";
import JoblyApi from "../api";
import JobsList from "../JobsList";
import JobsCardList from "../JobsCardList";

function Company() {
  const { handle } = useParams();
  const { user } = useContext(UserContext);
  const [company, setCompany] = useState(null);

  useEffect(
    function getCompanyOnLoad() {
      async function getCompany() {
        const c = await JoblyApi.getCompany(handle);

        setCompany(c);
      }
      getCompany();
    },
    [handle]
  );

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {company && (
        <>
          <h1>{company.handle}</h1>
          <p>{company.description}</p>
          <JobsCardList jobs={company.jobs}></JobsCardList>
        </>
      )}
    </div>
  );
}

export default Company;
