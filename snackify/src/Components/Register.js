import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithLoginAuth } from '../Utils/axiosWithLoginAuth';
import styled from 'styled-components';

const Form = styled.form`
    background: white;
    margin: auto;
    border-radius: 10px;
    border: 1px solid black;
    display:flex;
    align-items: center;
    flex-direction: column;
    width:50%;
`
const Input = styled.input`
    margin: 20px 10px;
`
const Register = (props) => {
    const [company, setCompany] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        signUpCode: '',
        companyName: '',
        goodSignUp: false
    });


    const onChange = e =>
        setCompany({ ...company, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault()
        if (company.password !== company.confirm) {
            alert("Passwords don't match please try again")
            return (null)
        }
        if (company.password.length < 6) {
            alert("Password needs to be at least 6 characters long")
            return (null)
        }
        else {
            console.log(company)
            e.preventDefault();
            props.history.push("/CompanyData");
            axiosWithLoginAuth()
                .post(`/companies`, company)
                .then(result => {
                    console.log(result)
                    localStorage.setItem("SnackToken", result.data.payload);
                    props.history.push("/CompanyData");
                })
        }
    }


    return (
        <>
            <h2>Sign Up!</h2>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <Input type="text" name="name" onChange={onChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <Input type="email" name="email" onChange={onChange} />
                </div>
                <div>
                    <label> Password: </label>
                    <Input name="password" type="password" onChange={onChange} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <Input name="confirm" type="password" onChange={onChange} />
                </div>
                <div>
                    <label>Sign up code for employees:</label>
                    <Input name="signUpCode" type="text" onChange={onChange} />
                </div>
                <div>
                    <label>Company Name:</label>
                    <Input name="companyName" type="text" onChange={onChange} />
                </div>
                <button onClick={() => handleSubmit}>Login</button>
            </Form>
        </>
    )
}
const mapStateToProps = state => {
    return {

    };
}

export default connect(mapStateToProps, {})(Register);