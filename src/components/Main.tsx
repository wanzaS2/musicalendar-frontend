import React, {Component, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import Button from "./Button";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImagePicker from "./Slick";
import Navbar from "../layout/Layout";

export const Main = () => {
	const [message, setMessage] = useState([]);

	useEffect(() => {
		fetch("api/hello")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setMessage(data);
			})
	}, []);

	const navigate = useNavigate();
	const goCalendar = () => {
		navigate('/calendar');
	}
  const goMyCalendar = () => {
     navigate('/mycalendar')
  }

	return (
		<><Navbar />
		<header>
			<ImagePicker/>
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<div className="btn">
			<p>
				Musicalendar Project Start!
				{message}
			</p>
			<Button onClick={goCalendar}>Go!</Button>
      <Button onClick={goMyCalendar}>MyCalenderGo!</Button>

			</div>
		</header>
		</>
	)
}

