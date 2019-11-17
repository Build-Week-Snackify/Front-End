import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithLoginAuth } from '../Utils/axiosWithLoginAuth'

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
            return(null)
        }
        else {
            console.log(company)
            e.preventDefault();
            props.history.push("/Company-Data");
            axiosWithLoginAuth()
                .post(`/companies`, company)
                .then(result => {
                    console.log(result)
                    localStorage.setItem("SnackToken", result.data.payload);
                    props.history.push("/Company-Data");
                })
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up!</h2>
            <label>Full Name</label>
            <input type="text" name="name" onChange={onChange} />
            <label>Email: </label>
            <input type="email" name="email" onChange={onChange} />
            <label> Password: </label>
            <input name="password" type="password" onChange={onChange} />
            <label>confirm Password</label>
            <input name="confirm" type="password" onChange={onChange} />
            <label>Sign up code for employees</label>
            <input name="signUpCode" type="text" onChange={onChange} />
            <label>Company Name</label>
            <input name="companyName" type="text" onChange={onChange} />
            <button onClick={() => handleSubmit}>Login</button>
        </form>
    )
}
const mapStateToProps = state => {
    return {

    };
}

export default connect(mapStateToProps, {})(Register);