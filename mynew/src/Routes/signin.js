import React,{useState} from 'react';
import {useFormik} from 'formik';
import {Alert,Button} from 'react-bootstrap';
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'

 
const validate = values =>{
    const errors = {};
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
    return errors;
}
const Login = () => {

  const [success,setSuccess]=useState(false)
  const [failed ,setFailed]=useState(false)
const formik = useFormik({
      initialValues: {
        
        username:'',
        password:'',
    },
    validate,
    onSubmit:values=>{
        alert(JSON.stringify(values, null, 2));
    const data = {
      username: values.username,
      password: values.password
}
const response = axios.post('http://localhost:9595/login',data).then(data=>{
  
if(data.data.Message === "User logged in successfully"){
  setSuccess(true)
}else{
  setFailed(true)
}}).catch(err=>{console.log(err)})
    },
});

//const 


 return(
   <div className="container">
        <h2> Login form</h2><hr/>
        <form onSubmit = {formik.handleSubmit}>
            <div className="label">
                <label htmlFor = "username">Username</label>
            </div>
             <input type="text"
             id="username"
             name="username"
             onChange={formik.handleChange}
             value = {formik.values.username}/>
               <div className = "Error">
                   {formik.errors.username ? <div>{formik.errors.username}</div> :null}
               </div><br/>

               <div className="label">
                   <label htmlFor="password">Passowrd</label>
               </div>
               <input type="password"
               id="password"
               name="password"
               onChange={formik.handleChange}
               value = {formik.values.password}/>
               <div className ="Error">
                   {formik.errors.password?<div>{formik.errors.password}</div>:null}
               </div><br/>
               <div>
              <Button type="submit" id="submit" value="submit">Submit</Button>
              </div>
        </form>
        {success ?<Alert variant ="success"> loggedIn</Alert>: ''}
        {failed ? <Alert variant="danger">user not logged in</Alert> : ''}
        </div>
        
 )
}

export default Login;