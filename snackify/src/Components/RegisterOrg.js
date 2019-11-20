import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";


const RegisterFormOrg = ({values, errors, status }) => {
  const[user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status]);
  },[]);//ends useEffect


  return (
    <div className="register-form-org">
    <Form>
      <div>
        <label>User Name
        <Field type="text" name="username" placeholder="User Name" />
        <div>{errors.username}</div>
        </label>
      </div>
      <div>
        <label>Password
        <Field type="password" name="password" placeholder="minimum 6 characters" />
        <div>{errors.password}</div>
        </label>
      </div>
      <div>
        <label>Contact Person
        <Field type="text" name="contactPerson" placeholder="Contact Name" />
        <div>{errors.contactPerson}</div>
        </label>
      </div>
      <div>
        <label>Role
        <Field type="text" name="role" placeholder="Contact Name" />
        <div>{errors.role}</div>
        </label>
      </div>
      <div>
        <label>Organization Name
        <Field type="text" name="organizationName" placeholder="Organization Name" />
        <div>{errors.organizationName}</div>
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
        <Field type="text" name="phoneNumber" placeholder="(000) 000-0000" />
        <div>{errors.phoneNumber}</div>
        </label>
      </div>
      <div>
        <label>Shipping Address, City
        <Field type="text" name="streetAddress" placeholder="1234 Main St, City" />
        <div>{errors.streetAddress}</div>
        </label>
        <label>State
        <Field type="text" name="state" placeholder="AA" />
        <div>{errors.state}</div>
        </label>
        <label>Zip Code
        <Field type="text" name="zipcode" placeholder= "12345" />
        <div>{errors.zipcode}</div>
        </label>
      </div>     
            
      <button type="submit">Register Now</button>
    </Form>
    {}
  </div>  
  );
};
const FormikRegisterFormOrg = withFormik({
  mapPropsToValues({username, password, contactPerson, organizationName, role, email, phoneNumber, streetAddress, state, zipcode }){
    return{
      username: username || "",
      password: password || "",
      contactPerson: contactPerson || "",
      organizationName: organizationName || "",
      role: role || "",
      email: email || "",
      phoneNumber: phoneNumber || "",
      streetAddress: streetAddress || "",
      state: state || "",
      zipcode: zipcode || "",
    };//ends return
  },//ends mapProps
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please select user name"),
    password: Yup.string().required("Password requires 6 characters"),
    contactPerson: Yup.string().required("Please enter name"),
    organizationName: Yup.string().required("Please enter name"),
    role: Yup.string().required("Please enter role"),
    email: Yup.string().required("Valid email required"),
    phoneNumber: Yup.string().required("Valid phone number required"),
    streetAddress: Yup.string().required("Please enter valid address"),
    state: Yup.string().required("Two letter state"),
    zipcode: Yup.string().required("Valid zip code required"),
  }),//ends validation
  handleSubmit(values, {setStatus}) {
    axios
    .post("https://snackify7.herokuapp.com/auth/register/organization", values)
    .then(response => {
      setStatus(response.data);
      console.log(response);
    })
    .catch(err => console.log(err.response));
  }
})(RegisterFormOrg);

export default FormikRegisterFormOrg;

