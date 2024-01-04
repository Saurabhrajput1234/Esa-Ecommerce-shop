import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";
import Validation from './validation '; 
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from '../../../Google';




const Signup = (props) => {
  // const [gmail,setGmail]=useState("");
  
  // const getData = (userData)=>{
  //   setGmail(userData.email);
    
  // }
  // useEffect(() => {
   
  // }, []);
 
  // 
  const navigate = useNavigate();
  const [values,setValues] = useState({
    name:'',
    phone:'',
    email:"",
    
    password: "",
    confirm_password:''
  })
  
   const [error,setErrors] = useState({})

  //  const [data,setData] = useState([])

   const handleInput = (e)=> {
    setValues({...values,[e.target.name]:e.target.value})
   }

   const handleValidation =async(e) => {
    e.preventDefault();
    setErrors(Validation(values))
    console.log(JSON.stringify(values));
   
  //  localStorage.setItem("usersaurabh",JSON.stringify([...data,values]))
  let res = await fetch('/register',{
    method:'post',
    body:JSON.stringify({name:values.name,phone:values.phone,email:values.email,password:values.password}),

    headers:{
      'Content-Type':'application/json'
    }
  });
  
  const result = await res.json()
if(res.status === 200 ||res){
  console.log("signup successfully")
  navigate('/Signin')
  
}
else
  window.alert("invailed information try again") 
   }
   
  return (<>
    {/* <GoogleOAuthProvider clientId="643600620897-2srj320tq0ctu4r9ca7shqedds02a5q1.apps.googleusercontent.com">
          <Google onGoogle={getData} />
        </GoogleOAuthProvider> */}
    <div>
        <div className="signup">
          
          <div className="signup-form">
          <h3>Signup </h3>
        <form onSubmit={handleValidation}>
        <div className="input_section" >
    <label forhtml="exampleInputEmail1" className="form-lab"><i className='fa fa-user'/></label>
    <input type="name" name='name' onChange={handleInput} className="form-control-input" placeholder='User name'  />
  </div>
        <div className="input_section">
    <label forhtml="exampleInputEmail1" className="form-lab"><i className="fa fa-phone"/></label>
    <input type="number" name='phone' onChange={handleInput} className="form-control-input" placeholder='Phone number'  />
    
  </div>
  <div className="input_section">
    <label forhtml="exampleInputEmail1" className="form-lab"><i className='fa fa-envelope'/></label>
    <input type="email" name='email' className="form-control-input" onChange={handleInput}   placeholder="Enter Email" />
    {error.email && <p style={{color:"red"}}>{error.email}</p>}
  </div>
  <div className="input_section">
    <label forhtml="exampleInputPassword1" className="form-lab"><i className="fa fa-eye-slash"/></label>
    <input type="password" name='password' onChange={handleInput} className="form-control-input" placeholder='Password' />
    {error.password && <p style={{color:"red"}}>{error.password}</p>}
  </div>
  <div className="input_section">
    <label forhtml="confirm_Password2" className="form-lab"><i className="fa fa-eye-slash"/></label>
    <input type="password" name='confirm_password' onChange={handleInput} className="form-control-input" placeholder='Confirm password' />
    {error.confirm_password && <p style={{color:"red"}}>{error.confirm_password}</p>}
  </div>
  
  <button type="submit" className="button">cancel</button><button type="submit" onClick={handleValidation} className="button">Submit</button>
 <p>Already have an account <Link to="/Signin">Signin</Link></p> 
</form>
</div>     
        </div> 
    </div>
    </>
  )
}

export default Signup
