import React, { useContext, useEffect } from "react";
import UserContext from "./UserContext";

function Home() {
  const { user } = useContext(UserContext);

  return <div>{user ? <div>Welcome back, {user.firstName}</div> : ""}</div>;
}

export default Home;
