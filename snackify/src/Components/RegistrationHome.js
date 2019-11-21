import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Pic = styled.img`
  height: 100px;
`;

const Card = styled.div`
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 300px;
  margin: 30px 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function RegistrationHome() {
  return (
    <Page>
      <h2 style={{ textAlign: "center" }}>Registration</h2>
      <PageWrap>
        <Card className="Employee">
          <div>
            <Pic src={require("../assets/images/male_avatar.png")} />
          </div>
          <h1>Employee</h1>
          <NavLink to="/EmployeeRegistration">
            <button style={{ borderRadius: "5px", marginTop: "10px" }}>
              Sign Up
            </button>
          </NavLink>
        </Card>
        <Card className="Company">
          <Pic src={require("../assets/images/workers.png")} />
          <h1>Company</h1>
          <NavLink to="/OrgRegistration">
            <button style={{ borderRadius: "5px", marginTop: "10px" }}>
              Sign Up
            </button>
          </NavLink>
        </Card>
      </PageWrap>
    </Page>
  );
}
