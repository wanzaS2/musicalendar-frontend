import React from 'react';
import './App.css';
import Button from "./components/Button";
import Calendar from "./components/Calendar";
import {Main} from "./components/Main";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyCalendar from "./components/MyCalendar";
import SignIn from "./components/SignIn";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/signIn"} element={<SignIn/>}/>
                <Route path={"/calendar"} element={<Calendar/>}/>
                <Route path={"/mycalendar"} element={<MyCalendar/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
