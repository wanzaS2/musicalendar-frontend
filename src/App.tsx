import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Calendar from "./components/Calendar";
import {Main} from "./components/Main";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/calendar"} element={<Calendar/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
