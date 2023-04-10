import React, {Component, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import Button from "./Button";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImagePicker from "./Slick";
import Navbar from "../layout/Layout";
import { NavBar } from "../layout/Navbar";

export const Main = () => {
	const navigate = useNavigate();
	const goCalendar = () => {
		navigate('/calendar');
	}
  	const goMyCalendar = () => {
        navigate('/mycalendar')
    }

	const [message, setMessage] = useState([]);

	useEffect(() => {
		fetch("/hello")
			.then((response) => {
				return response.json();
			})
			.then(function (data){
				setMessage(data);
			})
	}, []);

	return (
		<><Navbar />
		<header>
			<ImagePicker/>
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<div className="btn">
			<p>
				Musicalendar Project Start!
			</p>
			<ul>
				{message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
			</ul>
			<Button onClick={goCalendar}>Go!</Button>
      		<Button onClick={goMyCalendar}>MyCalenderGo!</Button>
			</div>
		</header>
		</>
	)
}

