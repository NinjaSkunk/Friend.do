import React, {useState} from 'react';
const DaySchedule = () => {
	const [eventName, setEventName] = useState("");
	const [eventNames, setEventNames] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState("");
	const [showAllHours, setShowAllHours] = useState(false);
	const [scheduled, setScheduled] = useState({'12:00 am':'Tennis'});
	function submitEvent(){
		setEventNames(eventNames =>eventNames.concat(eventName));
		setEventName('');
	}
	 function clickedTime(id){
		
		//alert(id + "HELLO" + selectedEvent);
		 setScheduled(scheduled => ({...scheduled,
                [id]:selectedEvent}));	
		 alert(Object.keys(scheduled).length);
	 }
	
	 function selectedRadio(){
		 var ele = document.getElementsByName('events');           
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked){					
					setSelectedEvent(ele[i].value);
				}
            }
	 }
		 
	 
	const times = ['12:00 am', '12:30 am', '1:00 am', '1:30 am', '2:00 am', '2:30 am', '3:00 am', '3:30 am', '4:00 am', '4:30 am', '5:00 am', '5:30 am', '6:00 am', '6:30 am', '7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm', '10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm'];
	return(
		<div className='day_div'>
			<div className='event_div'>
				<h3 className='add_event'>Add An Event</h3>	
				<input className='input_box' type='text' value={eventName} onChange={(e)=>setEventName(e.target.value)} placeholder=' Skydiving'></input>
				<button className='black_btn_margin' onClick={()=>submitEvent()}>Add</button>
			</div>		
			
				<h4>Events:</h4>
				{eventNames.length ? "" : <h5>None</h5>}
			<div>
				{eventNames.map((event)=>(
					<div className='event_div'>
						<h4>{event}</h4>
						<input className='checkbox' name='events' type='radio' value={event} onChange= {(e)=>selectedRadio()}></input>
					</div>
				))}
				
			</div>
			{showAllHours ? <button className='black_btn' onClick={()=>setShowAllHours(false)}>Close</button> : <button className='black_btn' onClick={()=>setShowAllHours(true)}>Show All Hours</button>}
			<table className='table'>
				{times.map((time)=>(
					showAllHours ?
						<tr id={time}>
							<td className='time'>{time}</td>
							{time in scheduled ? <td className='booked'>{scheduled[time]}</td> : <td id={time} className='day_btn' onClick={(e)=>clickedTime(e.target.parentNode.id)}></td>}
						</tr>
					 : "" 
					
				))}
			</table>
		</div>
	)
}

export default DaySchedule;
