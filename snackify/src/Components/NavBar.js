import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const Navigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  height: 100px;
  align-items: center;
  margin-bottom: 20px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const linkStyle = {
  color: "#fff",
  fontSize: "15px",
  borderRadius: "50px",
  padding: "5px 20px",
  backgroundColor: "#ff631b"
};

export default function NavBar(props) {
  const logout = () => {
    localStorage.removeItem("token");
    props.setLoggedIn(!props.loggedIn);
  };

  if (localStorage.getItem("token")) {
    return (
      <Navigation className="NavLink div">
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        {/* <NavLink to="/CompanyOrEmployee">NOT Login</NavLink> */}
        <NavLink onClick={logout} to="/" style={linkStyle}>
          Sign Out
        </NavLink>
      </Navigation>
    );
  }

  if (!localStorage.getItem("token")) {
    return (
      <Navigation className="NavLink div">
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/CompanyOrEmployee" style={linkStyle}>
          Login
        </NavLink>
        <NavLink to="/Register" style={linkStyle}>
          Sign Up
        </NavLink>
      </Navigation>
    );
  }
}
