import React from 'react';
import Navbar from '../layout/Navbar';
import Button from './Button';
import kakao from "../images/kakao.png";
import google from "../images/google.png";
import mucal from "../images/mucal.png";
import Container from 'react-bootstrap/Container';
import "../layout/SignIn.css";
function SignIn(){
	return (
		<>
		<header ><Navbar /></header>
		<body>
	
			<div className="login_loc">
			{/* <a href='/'><img src={kakao} style={{ width: "190px", height:"45px" }}/></a> */}
			<h1>로그인</h1>
			<img
            src={"logo192.png"}
            className="mx-auto mb-8"
            style={{ width: "100px" }}
            alt="logo"
          />
			 <br></br>
			<a href='/'><img src={kakao} style={{ width: "190px", height:"45px" }}/></a>
			<br></br>
			<a href='/'><img src={google} style={{ width: "190px", height:"45px" }}/></a>
			
      	</div>
		
		</body>
		</>
	)

}

export default SignIn;