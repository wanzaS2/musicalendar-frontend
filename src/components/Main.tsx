import React, {Component} from "react";
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
	return (
		<><Navbar />
		<header>
			<ImagePicker/>
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<div className="btn">
			<p>
				Musicalendar Project Start!
			</p>
			
			<Button onClick={goCalendar}>Go!</Button>
      <Button onClick={goMyCalendar}>MyCalenderGo!</Button>
			</div>
		</header>
		</>
	)
}

