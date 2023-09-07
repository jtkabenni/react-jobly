import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./companies/CompanyList";
import Company from "./companies/CompanyDetail";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
function AllRoutes({ login, signup, update }) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/companies" element={<Companies />}></Route>
      <Route path="/companies/:handle" element={<Company />}></Route>
      <Route exact path="/jobs" element={<JobsList />}></Route>
      <Route exact path="/login" element={<LoginForm login={login} />}></Route>
      <Route
        exact
        path="/signup"
        element={<SignupForm signup={signup} />}
      ></Route>
      <Route
        exact
        path="/profile"
        element={<ProfileForm update={update} />}
      ></Route>
    </Routes>
  );
}

export default AllRoutes;
