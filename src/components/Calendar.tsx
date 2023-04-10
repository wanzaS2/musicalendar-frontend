import React from 'react'
import {useNavigate} from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "../layout/Calendar.css"
import Navbar from "../layout/Layout";

function Calendar() {

    return(
        <><Navbar/><FullCalendar
            initialView={'dayGridMonth'}
            plugins={[dayGridPlugin]}
            titleFormat={{ year: 'numeric', month: 'short' }}
            headerToolbar={{
                start: '',
                center: 'title',
                end: 'prev next today',
            }}/></>
        )
}

export default Calendar;