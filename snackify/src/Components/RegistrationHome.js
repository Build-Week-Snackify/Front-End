import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Pic = styled.img`
width: 80%;
height: 500px;
`

const Card = styled.div`
border: solid black 1px;
width: 40%;
margin: auto;
margin-top: 3%;
margin-bottom: 1%;
backgroundImage: './download.jpg';
`

export default function RegistrationHome() {
    return (
        <div className="Page">
            <Card className="Employee">
                <Pic src={require('../assets/images/male_avatar.png')} />
                <h1>Employee</h1>
                <NavLink to="/EmployeeRegistration">
                    <button>Sign Up</button>
                </NavLink>

            </Card>
            <Card className="Company">
                <Pic src={require('../assets/images/workers.png')} />
                <h1>Company</h1>
                <NavLink to="/OrgRegistration" >
                    <button>Sign Up</button>
                </NavLink>
            </Card>
        </div>
    )
}