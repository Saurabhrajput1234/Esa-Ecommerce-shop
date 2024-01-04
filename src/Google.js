import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';

const Google = (props) => {
  const [user,setuser]= useState({});
  props.onGoogle(user)

    return (<>
        <GoogleLogin
            onSuccess={(credentialResponse) => {
              // console.log("encode token:"+ credentialResponse);
              var userObject = jwt_decode(credentialResponse.credential);
              console.log(userObject);
              alert("login success")
              // console.log(userObject.email[0])
              setuser(userObject);

              
            
              
            }}
            onError={() => {
              alert('Login Failed');
            }}
          />
          {user && 

          <img src={user.picture}></img>}
         </>
    )
}

export default Google;