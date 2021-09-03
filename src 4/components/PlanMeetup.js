import { Link } from 'react-router-dom';
import React, { useState, useEffect, setState } from 'react';

const PlanMeetup = () => {
	
	var date = new Date();
	var today = new Date();
	var arrow_direction = "";
	const current_day = today.getDate();
	date.setDate(1);
	var firstDayOfMonth=date.getDay();
	const lastDayOfPrev = new Date(date.getFullYear(), date.getMonth(),0).getDate();
	var monthOF = date.getMonth();
	const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
	const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
	const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  	];
	
	var prev_days_temp = [];
	for (let i=0;i<firstDayOfMonth;i++){
		prev_days_temp.unshift(lastDayOfPrev-i);	
	}
	
	let days_temp = [];
	let days2_temp = [];
	for(let i=1;i<current_day;i++){
		days_temp.push(i);
	}
	
	for(let i=current_day+1;i<=lastDay;i++){
		days2_temp.push(i);
	}
	

	let after_days_temp = [];
	for (let i=1;i<7-lastDayIndex;i++){
		after_days_temp.push(i);
	}
	
	const [monthState, setMonthState] = useState(monthOF);
	const [prev_days, setPrevDays] = useState(prev_days_temp);
	const [days, setDays] = useState(days_temp);
	const [days2, setDays2] = useState(days2_temp);
	const [after_days, setAfterDays] = useState(after_days_temp);
	
	const renderCalendar = () => {
		date = new Date();
		date.setDate(1);	
		date.setMonth(monthState);
		
		// if (arrow_direction=='back'){
		// 	setMonthState(monthState - 1);
		// 	setMonthState((state) => {
		// 	  date.setMonth(state);
		// 	  alert(state);
		// 	  return state;
		// 	});
		// }
		
		// if (arrow_direction=='forward'){
		// 	setMonthState(monthState + 1);
		// 	setMonthState((state) => {
		// 	  date.setMonth(state);
		// 		alert(state);
		// 	  return state;
		// 	});
		// }
		
		const firstDayOfMonth=date.getDay();
		const lastDayOfPrev = new Date(date.getFullYear(), date.getMonth(),0).getDate();
		const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
		const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
		const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
		];

		prev_days_temp = [];
		for (let i=0;i<firstDayOfMonth;i++){
			prev_days_temp.unshift(lastDayOfPrev-i);	
		}
		

		days_temp = [];
		days2_temp = [];
		for(let i=1;i<current_day;i++){
			days_temp.push(i);
		}
		
		for(let i=current_day+1;i<=lastDay;i++){
			days2_temp.push(i);
		}


		after_days_temp = [];
		for (let i=1;i<7-lastDayIndex;i++){
			after_days_temp.push(i);
		}
		setPrevDays(prev_days_temp);
		setDays(days_temp);
		setDays2(days2_temp);
		setAfterDays(after_days_temp);
	}
	
	function decrementMonth(){	
		setMonthState(monthState - 1);
  		renderCalendar();
	}
	function incrementMonth(){
		setMonthState(monthState + 1);
		renderCalendar();
	}
	
	return(
		<div>
			<div className='container'>
				<div class='calendar'>
					<div class='head'>
						<button onClick={() => decrementMonth()} class="fas fa-angle-left prev"></button> 
						<div class='date'>
							<h4>{months[monthState]}</h4>
							<p>{today.toDateString()}</p>
						</div>
						<button onClick={() => incrementMonth()} class="fas fa-angle-right next"></button>
					</div>
					<div class='dayheader'>
						<h5>Sun</h5>
						<h5>Mon</h5>
						<h5>Tue</h5>
						<h5>Wed</h5>
						<h5>Thu</h5>
						<h5>Fri</h5>
						<h5>Sat</h5>
					</div>
					<div class='days'>
						
						
						{prev_days.map((prev_day) => {							
							return <h4 className='prev-after'> {prev_day} </h4>;
						})}		
						
						{days.map((day) => {	
							return <h4> {day} </h4>;
						})}
						<h4 className='today'>{current_day}</h4>
						{days2.map((day) => {
							return <h4> {day} </h4>;
						})}

						{after_days.map((after_day) => {
							return <h4 className='prev-after'> {after_day} </h4>;
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export default PlanMeetup;