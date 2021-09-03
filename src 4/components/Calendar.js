import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class DemoApp extends React.Component {

  events: [
    { // this object will be "parsed" into an Event Object
      title: 'The Title', // a property!
      start: '2018-09-01', // a property!
      end: '2018-09-02' // a property! ** see important note below about 'end' **
    }
  ]  
  render() {
    return (
      <FullCalendar
		plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
		headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
        select={this.handleDateSelect}
		eventClick={this.handleEventClick}
		eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
        dateClick={this.handleDateClick}
		
      />
    )
  }

  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

}