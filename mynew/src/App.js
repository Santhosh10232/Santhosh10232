import React from 'react';
import { Field, useFormik } from 'formik';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
//import * as yup from 'yup';

let validate = values =>{
  let errors = {};
  if(!values.username){
    errors.username = 'Required!'
  }
  else if (values.username.length>=20){
    errors.username = 'Must be 20 characters or less'
  }
   if(!values.password){
     errors.password = 'Required!'
   }
   else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)){
     errors.password = 'Invalid password!'
   }
   if(!values.email){
     errors.email='Required!'
   }
   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
     errors.email = 'Invalid email!'
   }
   if(!values.mobile){
     errors.mobile ='Required!'
   }
   else if(!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.mobile)){
     errors.mobile = "Invalid mobile number"
   }
   return errors;
  }
 const Signup = () =>{

    const formik = useFormik({
      initialValues: {
        
        username:'',
        password:'',
        email: '',
        mobile:''
      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        const data = {
          username: values.username,
          password: values.password,
          email: values.email,
          mobile:values.mobile
        }
        const response = axios.post('http://localhost:9595/addForm',data)
        console.log(response)
      },
    });
    return (
       <div className="container">
         <h2>Signup Form</h2><hr/>
        <form onSubmit={formik.handleSubmit}>
          <div className="username">
          <div className="label">
             <label htmlFor="username">Username</label></div>
             <input type = "text" 
             id = "username"
             name ="username"
             onChange = {formik.handleChange} 
             value = {formik.values.username}/></div>
             <div className="Error">
             {formik.errors.username?<div>{formik.errors.username}</div>:null}<br/>
             </div>
             
             
             <div className="password">
               <div className="label">
             <label htmlFor="password">Password</label></div>
             <input type = "text" 
             id = "password"
             name ="password"
             onChange = {formik.handleChange} 
             type="password"
             value = {formik.values.password}/></div>
             <div className="Error">
             {formik.errors.password?<div>{formik.errors.password}</div>:null}<br/>
             </div>
             
             <div className="email">
             <div className="label">
             <label htmlFor="email">Email</label></div>
              <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}/></div>
              <div className="Error">
             {formik.errors.email?<div>{formik.errors.email}</div>:null}<br/>
             </div>
            
            <div className="mobile">
            <div className="label">
             <label htmlFor="mobile">MobileNo</label></div>
             <input type = "text" 
             id = "mobile"
             name ="mobile"
             onChange = {formik.handleChange} 
             value = {formik.values.mobile}/></div>
             <div className="Error">
             {formik.errors.mobile?<div>{formik.errors.mobile}</div>:null}<br/><br/>
             </div>
             <Button type="submit" id="submit" value="submit">Submit form </Button>
       </form>
      </div>
    );
  };

  export default Signup;