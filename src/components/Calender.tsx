import React, { useState } from "react";
import {Icon} from "@iconify/react";
import {format, addMonths, subMonths} from "date-fns";

// @ts-ignore
const RenderHeader = ({currentMonth, prevMonth, nextMonth}) => {
    return (
        <div className={"header row"}>
            <div className={"col col-first"}>
                <span className={"text"}>
                    <span className={"text month"}>
                        {format(currentMonth, 'M')}월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
            </div>
            <div className={"col col-end"}>
                <Icon icon={"bi:arrow-left-circle-fill"} onClick={prevMonth}/>
                <Icon icon={"bi:arrow-right-circle-fill"} onClick={nextMonth}/>
            </div>
        </div>
    );
}

const RenderDays = () => {
    const days = [];
    const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 0; i < 7; i++){
        days.push(
            <div className={"col"} key={i}>
                {date[i]}
            </div>,
        )
    }

    return <div className={"days row"}>{days}</div>
}

export const Calender = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    }

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    }

    // @ts-ignore
    return (
        <div className={"calender"}>
            <RenderHeader
                currentMonth={currentMonth}
                prevMonth = {prevMonth}
                nextMonth = {nextMonth}
            />
            <RenderDays/>
            <div className={"body"}>Cells</div>
        </div>
    );
}