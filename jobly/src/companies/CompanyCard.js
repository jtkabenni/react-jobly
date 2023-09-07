import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText } from "reactstrap";
import UserContext from "../UserContext";
function CompanyCard({ company }) {
  return (
    <Card>
      <Link to={`/companies/${company.handle}`}>
        <h2>{company.name}</h2>
        <p> {company.description}</p>
      </Link>
    </Card>
  );
}

export default CompanyCard;
