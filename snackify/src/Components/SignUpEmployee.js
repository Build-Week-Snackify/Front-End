import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import { axiosWithLoginAuth } from "../Utils/axiosWithLoginAuth";


const RegisterForm = ({values, errors, status }) => {
  const[user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status]);
  },[]);//ends useEffect


  return (
    <div className="register-form">
    <Form>
      <div>
        <label>User Name
        <Field type="text" name="userName" placeholder="User Name" />
        <div>{errors.userName}</div>
        </label>
      </div>
      <div>
        <label>Password
        <Field type="password" name="password" placeholder="minimum 6 characters" />
        <div>{errors.password}</div>
        </label>
      </div>
      <div>
        <label>Contact/Employee Name
        <Field type="text" name="contact" placeholder="Contact Name" />
        <div>{errors.contact}</div>
        </label>
      </div>
      <div>
        <label>Organization Name
        <Field type="text" name="org" placeholder="Organization Name" />
        <div>{errors.org}</div>
        </label>
      </div>
      <div>
        <label>Email
        <Field type="email" name="email" placeholder="email@domain.net" />
        <div>{errors.email}</div>
        </label>
      </div>
      <div>
        <label>Phone Number
        <Field type="text" name="phone" placeholder="(000) 000-0000" />
        <div>{errors.phone}</div>
        </label>
      </div>
      <div>
        <label>Shipping Address
        <Field type="text" name="address" placeholder="1234 Main St" />
        <div>{errors.address}</div>
        </label>
        <label>City
        <Field type="text" name="city" placeholder="Your City" />
        <div>{errors.city}</div>
        </label>
        <label>State
        <Field type="text" name="state" placeholder="AA" />
        <div>{errors.state}</div>
        </label>
        <label>Zip Code
        <Field type="text" name="zip" placeholder= "12345" />
        <div>{errors.zip}</div>
        </label>
      </div>     
            
      <button type="submit">Register Now</button>
    </Form>
    {}
  </div>  
  );
};
const FormikRegisterForm = withFormik({
  mapPropsToValues({userName, password, contact, org, email, phone, address, address2, city, state, zip, terms}){
    return{
      userName: userName || "token",
      password: password || "token",
      contact: contact || "",
      org: org || "",
      email: email || "",
      phone: phone || "",
      address: address || "",
      address2: address2 || "",
      city: city || "",
      state: state || "",
      zip: zip || "",
    };//ends return
  },//ends mapProps
  validationSchema: Yup.object().shape({
    userName: Yup.string().required("Please select user name"),
    password: Yup.string().required("Password requires 6 characters"),
    contact: Yup.string().required("Please enter name"),
    org: Yup.string().required("Please enter name"),
    email: Yup.string().required("Valid email required"),
    phone: Yup.string().required("Valid phone number required"),
    address: Yup.string().required("Please enter valid address"),
    city: Yup.string().required("City Required"),
    state: Yup.string().required("Two letter state"),
    zip: Yup.string().required("Valid zip code required"),
  }),//ends validation
  // handleSubmit(values, {setStatus}) {
  //   axios
  //   .post("insert axios link here", values)
  //   .then(response => {
  //     setStatus(response.data);
  //     console.log(response);
  //   })
  //   .catch(err => console.log(err.response));
  // }
})(RegisterForm);

export default FormikRegisterForm;

