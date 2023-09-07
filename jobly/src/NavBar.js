import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

function NavBar({ logout, token }) {
  return (
    <div>
      <Navbar>
        {token ? (
          <>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/companies">Companies</Link>
            </NavItem>
            <NavItem>
              <Link to="/jobs">Jobs</Link>
            </NavItem>
            <NavItem>
              <Link onClick={logout}>Logout</Link>
            </NavItem>
            <NavItem>
              <Link to="/Profile">Profile</Link>
            </NavItem>
          </>
        ) : (
          <>
            {" "}
            <NavItem>
              <Link to="/Login">Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/Signup">Signup</Link>
            </NavItem>
          </>
        )}
      </Navbar>
    </div>
  );
}
// end

export default NavBar;
