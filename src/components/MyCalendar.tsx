import React, {useState,useEffect} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calendar.css"
import styled from "styled-components";
import { Fab } from '@mui/material'; // Floating Action Button
import AddIcon from '@mui/icons-material/Add';

function MyCalendar(){

    const [btn, setBtn] = useState(true);
    const btnEvent = () => {
        setBtn(!btn);
    };
	 const [message, setMessage] = useState([]);
	 useEffect(() => {
		fetch("/hello")
			 .then((response) => {
				  return response.json();
			 })
			 .then(function (data) {
				  console.log(message)
				  setMessage(data);
			 });
  }, []);

    return(
        <>
            <FullCalendar
            initialView={'dayGridMonth'}
            plugins={[dayGridPlugin]}
            headerToolbar={{
                start: 'prev next today',
                center: 'title',
                end: '',
            }}/>
            <PositionBtn>
                <Fab
                    color='primary'
                    aria-label='add'
                    onClick={btnEvent}>
                    <AddIcon />
                </Fab>
            </PositionBtn>
        </>
    )
}

const PositionBtn = styled.div`
  position: fixed;
  top: 80%;
  right: 10px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    top: 70%;
    left: 10px;
    & p {
      display: none;
    }
  }
`;

export default MyCalendar;