import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "../logo.svg";
import Button from "./Button";

export const Main = () => {
    const navigate = useNavigate();
    const goCalender = () => {
        navigate('/calender');
    }
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Musicalender Project Start!
            </p>
            <Button onClick={goCalender}>Go!</Button>
        </header>
    )
}

