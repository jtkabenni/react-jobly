import React from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import { useEffect, useState, useContext } from "react";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";
function Companies() {
  const { user } = useContext(UserContext);
  const [companies, setCompanies] = useState([]);
  useEffect(
    function getCompaniesOnLoad() {
      async function companies() {
        const companies = await JoblyApi.getCompanies();
        setCompanies(companies);
      }
      companies();
    },

    []
  );
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Companies</h1>
      {companies.map((c) => (
        <CompanyCard company={c}></CompanyCard>
      ))}
    </div>
  );
}

export default Companies;
