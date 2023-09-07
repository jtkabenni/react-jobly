import React, { useState, useContext } from "react";
import { useNavigate, Navigate, useRouteError } from "react-router-dom";
import UserContext from "./UserContext";
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

const ProfileForm = ({ update }) => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    username: user.username,
    password: "",
  });

  /** Send {name, quantity} to parent
   *    & clear form. */

  async function handleSubmit(evt) {
    evt.preventDefault();
    const updateData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    const updatedUser = await JoblyApi.updateUser(user.username, updateData);
    console.log(updatedUser);
    update(updatedUser);
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
  if (!user) {
    return <Navigate to="/" />;
  }
  /** render form */

  return (
    <Card>
      <CardBody>
        <CardTitle>Update profile</CardTitle>
        <form onSubmit={handleSubmit}>
          <ListGroup>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={formData.username}
              readonly
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />

            <button>Update profile</button>
          </ListGroup>
        </form>
      </CardBody>
    </Card>
  );
};

export default ProfileForm;
