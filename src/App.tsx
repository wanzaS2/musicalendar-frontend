import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import {Calender} from "./components/Calender";
import {Main} from "./components/Main";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/calender"} element={<Calender/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
