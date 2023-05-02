import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "../layout/Calendar.css"
import Navbar from "../layout/Navbar";
import axios from "axios";
import {red} from "@mui/material/colors";
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";

function Calendar() {
    const navigate = useNavigate();
    const [btn, setBtn] = useState(true);
    const btnEvent = () => {
        setBtn(!btn);
        navigate('/mycalendar/addForm')
    };

    const [ScheduleList, setScheduleList] = useState();
    const [MusicalList, setMusicalList] = useState();
    const [MyShowList, setMyShowList] = useState();

    const getSchedules = () => {
        axios.get('/calendar')
            .then(r => {
                // setScheduleList(r.data);
                // console.log(ScheduleList);

                let musicalList = [];
                let playList = [];
                for (let i = 0; i < r.data.length; i++){
                    let color = 'blue';
                    if (r.data[i].show.category == 'M'){
                        musicalList.push({
                            // id: r.data[i].id,
                            title: r.data[i].show.title,
                            start: r.data[i].date,
                            // category: r.data[i].show.category,
                            color: color
                        })
                    }
                }
                // @ts-ignore
                setMusicalList(musicalList);
            })
    }

    const getMySchedules = () => {
        axios.get("/mycalendar")
            .then(r => {
                setMyShowList(r.data)

                let musicalList = [];
                for (let i = 0; i < r.data.length; i++) {
                    let color = 'red';
                    musicalList.push({
                        title: r.data[i].title,
                        start: r.data[i].date,
                        color: color
                    })
                }
                // @ts-ignore
                setMyShowList(musicalList);
            })
    }

    useEffect(() => {
        getSchedules();
        getMySchedules();
        // @ts-ignore
        let AllList = [];
        AllList.push(MusicalList);
        AllList.push(MyShowList);
        // @ts-ignore
        setScheduleList(AllList);
    }, [])


    return(
        <><Navbar/><FullCalendar
            initialView={'dayGridMonth'}
            plugins={[dayGridPlugin]}
            titleFormat={{ year: 'numeric', month: 'short' }}
            expandRows={true}
            headerToolbar={{
                start: '',
                center: 'title',
                end: 'prev next today',
            }}
            navLinks={true}
            editable={true}
            dayMaxEvents={true}
            selectable={true}
            locale={'ko'}
            events={MusicalList}
        />
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

export default Calendar;