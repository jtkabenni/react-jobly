import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import JoblyApi from "./api";
/** Form for creating a new snack or drink item.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const LoginForm = ({ login }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  async function handleSubmit(evt) {
    evt.preventDefault();
    const token = await JoblyApi.login(formData);
    console.log(token);
    login(token);
    setFormData(INITIAL_STATE);
    navigate("/");
  }

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <Card>
      <CardBody>
        <CardTitle>Add an Item</CardTitle>
        <form onSubmit={handleSubmit}>
          <ListGroup>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <button>Login</button>
          </ListGroup>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
