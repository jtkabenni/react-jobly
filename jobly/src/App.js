import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import AllRoutes from "./AllRoutes";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import UserContext from "./UserContext";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState(new Set([]));

  function login(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  function signup(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
    setUser(null);
  }
  function update(user) {
    console.log(user);
    setUser(user);
  }

  async function apply(id) {
    if (appliedJobs.has(id)) return;
    setAppliedJobs(new Set([...appliedJobs, id]));
    const applied = JoblyApi.applyJob(user.username, id);
    console.log(applied);
  }

  useEffect(
    function getUser() {
      async function user() {
        if (token) {
          JoblyApi.token = token;
          const decoded = jwt_decode(token);
          const user = await JoblyApi.getUser(decoded.username);
          setAppliedJobs(new Set(user.applications));
          setUser(user);
        }
      }
      user();
    },

    [token]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, apply, appliedJobs }}>
          <NavBar logout={logout} token={token}></NavBar>
          <AllRoutes login={login} signup={signup} update={update}></AllRoutes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
