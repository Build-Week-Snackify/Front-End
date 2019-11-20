import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";


const RegisterFormEmp = ({values, errors, status }) => {
  const[user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status]);
  },[]);//ends useEffect


  return (
    <div className="register-form">
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
        <label>Employee Name
        <Field type="text" name="fullName" placeholder="Full Name" />
        <div>{errors.fullName}</div>
        </label>
      </div>
      <div>
        <label>Personal email
        <Field type="text" name="contactPerson" placeholder="mypersonal@email.com" />
        <div>{errors.contactPerson}</div>
        </label>
      </div>
      <div>
      <label>Role
        <Field as="select" name="role" />
          <option value="none">Please choose one</option>
          <option value="Employee">Employee</option>
          <option value="Organization">Organization</option>
          <option value="Organization Admin">Organization Admin</option>
        <div>{errors.role}</div>
        </label>
      </div>
      
      <div>
        <label>Organization ID # (sign-up code)
        <Field type="text" name="orgId" placeholder="Organization ID" />
        <div>{errors.orgId}</div>
        </label>
      </div>
      <div>
        <label>Work Email
        <Field type="email" name="email" placeholder="email@work.net" />
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
const FormikRegisterFormEmp = withFormik({
  mapPropsToValues({username, password, fullName, contactPerson, role, orgId, email, phoneNumber, streetAddress, state, zipcode }){
    return{
      username: username || "",
      password: password || "",
      fullName: fullName || "",
      contactPerson: contactPerson || "",
      role: role || "none",
      orgId: orgId || "",
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
    fullName: Yup.string().required("Please enter name"),
    contactPerson: Yup.string().required("Please enter email"),
    role: Yup.string().required("Please choose one"),
    orgId: Yup.string().required("Please enter Organization #"),
    email: Yup.string().required("Valid email required"),
    phoneNumber: Yup.string().required("Valid phone number required"),
    streetAddress: Yup.string().required("Please enter valid address"),
    city: Yup.string().required("City Required"),
    state: Yup.string().required("Two letter state"),
    zipcode: Yup.string().required("Valid zip code required"),
  }),//ends validation
  handleSubmit(values, {setStatus}) {
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

