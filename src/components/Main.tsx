import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "../logo.svg";
import Button from "./Button";

export const Main = () => {
    const navigate = useNavigate();
    const goCalendar = () => {
        navigate('/calendar');
    }
    const goMyCalendar = () => {
        navigate('/mycalendar')
    }
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Musicalendar Project Start!
            </p>
            <Button onClick={goCalendar}>Go!</Button>
            <Button onClick={goMyCalendar}>MyCalenderGo!</Button>
        </header>
    )
}

