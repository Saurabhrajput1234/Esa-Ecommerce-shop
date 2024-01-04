function Validation(values){
    let error = {}
    const email_pattern = /^[a-zA-Z0-9_!#$%&'*+/=?``{|}~^.-]+@[a-zA-Z0-9.-]+$/
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

   if(values.email === ""){
        error.email = "Name should not be empty"

    }
     else if(!email_pattern.test(values.email)){
        error.email = "Email Didn't match"
    }
    
    else if(values.password === ""){
        error.password = "Password should not be empty"
    }
     else if(!password_pattern.test(values.password)){
        error.password = "Password did't match"
    }
     else if(values.confirm_password === "" || String(values.confirm_password) !==String(values.password)){
    error.confirm_password = "password not match"
    }
    else {
        console.log("data added succesfuly")
    }
    return error;}
   

export default Validation;