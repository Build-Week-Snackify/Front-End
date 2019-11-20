import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterFormEmp = ({ values, errors, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, []); //ends useEffect

  const style = {
    margin: "0 auto",
    padding: "30px 40px",
    borderRadius: "5px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left"
  };

  const fieldStyle = {
    width: "300px",
    borderRadius: "5px",
    border: "2px solid rgba(0,0,0,.2)",
    padding: "2px 0px 0px 10px"
  };

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  };

  return (
    <div className="register-form">
      <Form style={style}>
        <div>
          <label>
            User Name <br />
            <Field
              type="text"
              name="username"
              placeholder="User Name"
              style={fieldStyle}
            />
            <div>{errors.username}</div>
          </label>
        </div>
        <div>
          <label>
            Password
            <br />
            <Field
              type="password"
              name="password"
              placeholder="minimum 6 characters"
              style={fieldStyle}
            />
            <div>{errors.password}</div>
          </label>
        </div>
        <div>
          <label>
            Employee Name
            <br />
            <Field
              type="text"
              name="fullName"
              placeholder="Full Name"
              style={fieldStyle}
            />
            <div>{errors.fullName}</div>
          </label>
        </div>
        <div>
          <label>
            Personal email
            <br />
            <Field
              type="text"
              name="contactPerson"
              placeholder="mypersonal@email.com"
              style={fieldStyle}
            />
            <div>{errors.contactPerson}</div>
          </label>
        </div>
        <div>
          <label>
            Organization Name
            <br />
            <Field
              type="text"
              name="role"
              placeholder="Organization Name"
              style={fieldStyle}
            />
            <div>{errors.role}</div>
          </label>
        </div>
        <div>
          <label>
            Organization ID # (sign-up code)
            <br />
            <Field
              type="text"
              name="orgId"
              placeholder="Organization ID"
              style={fieldStyle}
            />
            <div>{errors.orgId}</div>
          </label>
        </div>
        <div>
          <label>
            Work Email
            <br />
            <Field
              type="email"
              name="email"
              placeholder="email@work.net"
              style={fieldStyle}
            />
            <div>{errors.email}</div>
          </label>
        </div>
        <div>
          <label>
            Phone Number
            <br />
            <Field
              type="text"
              name="phoneNumber"
              placeholder="(000) 000-0000"
              style={fieldStyle}
            />
            <div>{errors.phoneNumber}</div>
          </label>
        </div>
        <div style={divStyle}>
          <label>
            Shipping Address
            <br />
            <Field
              type="text"
              name="streetAddress"
              placeholder="1234 Main St, City"
              style={fieldStyle}
            />
            <div>{errors.streetAddress}</div>
          </label>
          <label>
            State
            <br />
            <Field
              type="text"
              name="state"
              placeholder="AA"
              style={fieldStyle}
            />
            <div>{errors.state}</div>
          </label>
          <label>
            Zip Code
            <br />
            <Field
              type="text"
              name="zipcode"
              placeholder="12345"
              style={fieldStyle}
            />
            <div>{errors.zipcode}</div>
          </label>
        </div>

        <button type="submit">Register Now</button>
      </Form>
      {}
    </div>
  );
};
const FormikRegisterFormEmp = withFormik({
  mapPropsToValues({
    username,
    password,
    fullName,
    contactPerson,
    role,
    orgId,
    email,
    phoneNumber,
    streetAddress,
    state,
    zipcode
  }) {
    return {
      username: username || "",
      password: password || "",
      fullName: fullName || "",
      contactPerson: contactPerson || "",
      role: role || "",
      orgId: orgId || "",
      email: email || "",
      phoneNumber: phoneNumber || "",
      streetAddress: streetAddress || "",
      state: state || "",
      zipcode: zipcode || ""
    }; //ends return
  }, //ends mapProps
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please select user name"),
    password: Yup.string().required("Password requires 6 characters"),
    fullName: Yup.string().required("Please enter name"),
    contactPerson: Yup.string().required("Please enter email"),
    role: Yup.string().required("Please enter name"),
    orgId: Yup.string().required("Please enter Organization #"),
    email: Yup.string().required("Valid email required"),
    phoneNumber: Yup.string().required("Valid phone number required"),
    streetAddress: Yup.string().required("Please enter valid address"),
    city: Yup.string().required("City Required"),
    state: Yup.string().required("Two letter state"),
    zipcode: Yup.string().required("Valid zip code required")
  }), //ends validation
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://snackify7.herokuapp.com/auth/register/employee", values)
      .then(response => {
        setStatus(response.data);
        console.log(response);
      })
      .catch(err => console.log(err.response));
  }
})(RegisterFormEmp);

export default FormikRegisterFormEmp;
