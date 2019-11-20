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
`;

const linkStyle = {
  color: "#fff",
  fontSize: "15px",
  borderRadius: "50px",
  padding: "5px 20px",
  backgroundColor: "#ff631b"
};

export default function NavBar() {
  if (localStorage.getItem("token")) {
    return (
      <Navigation className="NavLink div">
        <NavLink to="/" style={linkStyle}>
          NOT Home
        </NavLink>
        <NavLink to="/CompanyOrEmployee" style={linkStyle}>
          NOT Login
        </NavLink>
        <NavLink
          onClick={() => localStorage.removeItem("token")}
          to="/"
          style={linkStyle}
        >
          Sign Out
        </NavLink>
      </Navigation>
    );
  }

  if (!localStorage.getItem("token")) {
    return (
      <Navigation className="NavLink div">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/CompanyOrEmployee">Login</NavLink>
        <NavLink to="/Register">Sign Up</NavLink>
      </Navigation>
    );
  }
}
