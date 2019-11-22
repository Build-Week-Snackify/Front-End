import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { axiosWithLoginAuth } from "../Utils/axiosWithLoginAuth";
import { connect } from "react-redux";
import { loginUser } from "../Store/NonSnackActions";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Form = styled.form`
  width: 350px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 15px 30px 40px;
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const Input = styled.input`
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.2);
`;

function LogIn(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithLoginAuth()
      .post(
        `auth/login/employee
            `,
        user
      )
      .then(result => {
        console.log(result);
        localStorage.setItem("token", result.data.token);
        props.setLoggedIn(!props.loggedIn);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <Page>
      <h2 style={{ marginBottom: "30px" }}>Employee Login</h2>
      <Form onSubmit={handleSubmit}>
        <label>Username: </label>
        <Input type="text" name="username" onChange={onChange} />
        <br />
        <label> Password: </label>
        <Input name="password" type="password" onChange={onChange} />
        <br />
        <button
          style={{
            borderRadius: "5px",
            width: "50%",
            alignSelf: "flex-start",
            backgroundColor: "rgba(0,0,0,.25)"
          }}
        >
          Login
        </button>
      </Form>
    </Page>
  );
}

export default LogIn;
