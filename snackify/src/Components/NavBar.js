import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #D7EE9D;
color: #FF9663
height:40px;
align-items: center;
`


export default function NavBar(){
    return( 
        <Navigation className = 'NavLink div'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/CompanyOrEmployee">Login</NavLink>
        </Navigation>
    )
}