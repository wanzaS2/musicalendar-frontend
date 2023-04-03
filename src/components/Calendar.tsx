import React from 'react'
import {useNavigate} from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./Calendar.css"

function Calendar() {

    const navigate = useNavigate();

    return(
            <FullCalendar
                initialView={'dayGridMonth'}
                plugins={[dayGridPlugin]}
                customButtons={{
                    myCustomButton: {
                        text: '로그인',
                        click: function (){
                            navigate('/signIn');
                        }
                    },
                }}
                headerToolbar={{
                    start: 'prev next today',
                    center: 'title',
                    end: 'myCustomButton',
                }}
            />
        )
}

export default Calendar;