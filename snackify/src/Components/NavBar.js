import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from "react-redux";


const Navigation = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #D7EE9D;
color: #FF9663
height:40px;
align-items: center;
`



export default function NavBar() {
    if (localStorage.getItem('token')) {
        return(
            <Navigation className='NavLink div'>
                <NavLink to="/">NOT Home</NavLink>
                <NavLink to="/CompanyOrEmployee">NOT Login</NavLink>
                <NavLink onClick={() => localStorage.removeItem('token')}  to="/">Sign Out</NavLink>
            </Navigation>
        )
    }

    if (!localStorage.getItem('token')) {
        return (
            <Navigation className='NavLink div'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/CompanyOrEmployee">Login</NavLink>
            </Navigation>
        )
    }
}