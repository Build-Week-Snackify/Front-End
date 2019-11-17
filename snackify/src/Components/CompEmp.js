import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Pic = styled.img`
width: 80%;
height: 300px;
`

const Card = styled.div`
border: solid black 1px;
width: 40%;
margin: auto;
margin-top: 3%;
margin-bottom: 1%;
backgroundImage: './download.jpg';
`

export default function CompEmp() {
    return (
        <div className="Page">
            <Card className="Employee">
                <Pic src={require('./download.jpg')} />
                <h1>Employee</h1>
                <NavLink to="/EmployeeLogIn">
                    <button>Log In</button>
                </NavLink>

            </Card>
            <Card className="Company">
                <Pic src={require('./s-corporation.jpg')} />
                <h1>Company</h1>
                <NavLink to="/CompanyLogIn" >
                    <button>Log In</button>
                </NavLink>
            </Card>
        </div>
    )
}