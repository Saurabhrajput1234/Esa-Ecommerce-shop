import React,{useState} from 'react';
import "./Signup.css";
import Validation from './validation '; 
import { useNavigate } from 'react-router-dom';


 

const Signin = () => {

  const history = useNavigate();
  const [values,setValues] = useState({
    email: '',
    password: "",
  })
   const [error,setErrors] = useState({})
   

   const handleInput =(e)=> {
    setValues({...values,[e.target.name]:e.target.value})
   }

   
  //  const handleValidation =(e) => {
  //   e.preventDefault();
  //   setErrors(Validation(values));
    
  //   // const getuserArr = localStorage.getItem('usersaurabh');
    
  //   if (getuserArr && getuserArr.length){
  //     const userdata = JSON.parse(getuserArr);
  //     // console.log(userdata)
  //     const userlogin = userdata.filter((el)=>{
  //       let v1 = el.email[0];
  //       let v2 = values.email[0];
  //       let p1 = el.password[0];
  //       let p2 = values.password[0];
       
        
  //       if(v1 === v2 && p1 === p2)
  //       {  
  //       return 1 ;
  //       }else
  //       return 0 ;
        
  //     });
  //     // console.log(userlogin);
  //     if(userlogin.length === 0){
  //       console.log("invalid details")}
  //       else { 
  //       console.logalert("user login successfuly")
  //        history("/Products")}
  //   }
      
  //   }
    
  const handleValidation = async(e) => {
    e.preventDefault();
    setErrors(Validation(values))
    console.log(JSON.stringify(values));
   
  //  localStorage.setItem("usersaurabh",JSON.stringify([...data,values]))
  const res = await fetch('/login',{
    method:'POST',
     body:JSON.stringify({email:values.email,password:values.password}),

    headers:{
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
  });
  console.log(res)
 const result =  res.json()
  console.log(result)
  if(res.status === 400|| !res){
    console.log("invalid credentials")
  }else if(res.status ===200)

  {console.log("login successfull")
  
  
    history('/Products')}
   
   }
   
     
   
  
   

  return (
    <div>
        <div className="signup">
          
          <div className="signup-form">
          <h3>Signin </h3>
        <form onSubmit={handleValidation}>
    
  <div className="input_section">
    <label forhtml="exampleInputEmail1" className="form-lab"><i className='fa fa-envelope'/></label>
    <input type="email" name='email' onChange={handleInput} className="form-control-input" placeholder='Email address'  />
    {error.email && <p style={{color:"red"}}>{error.email}</p>}
  </div>
  <div className="input_section">
    <label forhtml="exampleInputPassword1" className="form-lab"><i className="fa fa-eye-slash"/></label>
    <input type="password" name='password'onChange={handleInput} className="form-control-input" placeholder='Password' />
    {error.password && <p style={{color:"red"}}>{error.password}</p>}
  </div>
  
  <button type="submit" className="button">cancel</button><button type="submit" onClick={handleValidation} className="button">Submit</button>
</form>
</div>
            
        </div>
        

      
    </div>
  )
}
export default Signin;
