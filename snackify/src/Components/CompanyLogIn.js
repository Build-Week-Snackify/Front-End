import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithLoginAuth } from '../Utils/axiosWithLoginAuth';
import { connect } from 'react-redux';


const Page = styled.div`
    height:100vh;
`
const Form = styled.form`
    background: white;
    width:30vw;
    margin: 5% 35vw
    border-radius: 10px;
    border: 1px solid black;
    height: 30vh;
    text-align:center;
`
const Input = styled.input`
    margin: 20px 10px;
`
const H2 = styled.h2`
    text-align:center;
    margin: 30px 0 40px
`

function CompanyLogin(props) {
    console.log(props)
    const [user, setUser] = useState({
        username: '',
        password: '',
        company: false
    })

    const onChange = e =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        localStorage.setItem("token", user);
        console.log(user)
        e.preventDefault();
        props.history.push("/CompanyData");
        axiosWithLoginAuth()
            .post(`/login`, user)
            .then(result => {
                console.log(result)
                localStorage.setItem("SnackToken", result.data.payload);
                props.history.push("/CompanyData");
            })
    }

    return (
        <Page>
            <Form onSubmit={handleSubmit}>
                <H2>Admin Login</H2>
                <label>Username: </label>
                <Input type="text" name="username" onChange={onChange} />
                <br />
                <label> Password: </label>
                <Input name="password" type="password" onChange={onChange} />
                <br />
                <button>Login</button>
            </Form>
        </Page>
    )
}


const mapStateToProps = state => {
    return {

    };
}

export default connect(mapStateToProps, {})(CompanyLogin);

