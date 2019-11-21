import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterFormOrg = ({...props}, {values, errors, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, []); //ends useEffect

  const style = {
    margin: "0px auto 0px",
    padding: "30px 40px",
    borderRadius: "5px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    border: "solid 1px rgba(0, 0, 0, 0.2)"
  };

  const fieldStyle = {
    width: "300px",
    borderRadius: "5px",
    border: "solid 1px rgba(0, 0, 0, 0.2)",
    padding: "2px 0px 0px 10px"
  };

  return (
    <div className="register-form-org">
      <h1 style={{ textAlign: "center", marginTop: "-15px" }}>
        Corporate Registration
      </h1>
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
            Contact Person
            <br />
            <Field
              type="text"
              name="contactPerson"
              placeholder="Contact Name"
              style={fieldStyle}
            />
            <div>{errors.contactPerson}</div>
          </label>
        </div>
        {/* <div>
          <label>
            Role
            <br />
            <Field as="select" name="role" style={fieldStyle}>
              <option value="none">Please choose one</option>
              <option value="employee">Employee</option>
              <option value="organization">Organization</option>
              <option value="orgAdmins">Organization Admin</option>
            </Field>
            <div>{errors.role}</div>
          </label>
        </div> */}
        <div>
          <label>
            Organization Name
            <br />
            <Field
              type="text"
              name="organizationName"
              placeholder="Organization Name"
              style={fieldStyle}
            />
            <div>{errors.organizationName}</div>
          </label>
        </div>
        <div>
          <label>
            Email
            <br />
            <Field
              type="email"
              name="email"
              placeholder="email@domain.net"
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
        <div>
          <label>
            Shipping Address, City
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

        <button
          type="submit"
          style={{
            borderRadius: "5px",
            width: "50%",
            alignSelf: "flex-start",
            backgroundColor: "rgba(0,0,0,.25)"
          }}
        >
          Register Now
        </button>
      </Form>
      {}
    </div>
  );
};
const FormikRegisterFormOrg = withFormik({
  mapPropsToValues({
    username,
    password,
    contactPerson,
    organizationName,
    role,
    email,
    phoneNumber,
    streetAddress,
    state,
    zipcode
  }) {
    return {
      username: username || "",
      password: password || "",
      contactPerson: contactPerson || "",
      organizationName: organizationName || "",
      role: role || "organization",
      email: email || "",
      phoneNumber: phoneNumber || "",
      streetAddress: streetAddress || "",
      state: state || "",
      zipcode: zipcode || ""
    }; //ends return
  }, //ends mapProps
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username requires 5 or more characters"),
    password: Yup.string().required("Password requires 6 characters"),
    contactPerson: Yup.string().required("Please enter name"),
    organizationName: Yup.string().required("Please enter name"),
    role: Yup.string().required("Please choose one"),
    email: Yup.string().required("Valid email required"),
    phoneNumber: Yup.string().required("Valid phone number required"),
    streetAddress: Yup.string().required("Please enter valid address"),
    state: Yup.string().required("Two letter state"),
    zipcode: Yup.string().required("Valid zip code required")
  }), //ends validation
  handleSubmit(values, { setStatus }) {
    axios
      .post(
        "https://snackify7.herokuapp.com/auth/register/organization",
        values
      )
      .then(response => {
        setStatus(response.data);
        console.log(response);
        if(response.data.status === 200){
          // props.history.push("/")
        } else{
          alert(response.data.error.message)
        }
      })
      .catch(err => console.log(err.response));
  }
})(RegisterFormOrg);

export default FormikRegisterFormOrg;
