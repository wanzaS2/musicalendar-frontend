import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Calendar extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return(
            <FullCalendar
                initialView={'dayGridMonth'}
                plugins={[dayGridPlugin]}/>
        )
    }
}

export default Calendar;