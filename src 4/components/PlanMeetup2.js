import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
const PlanMeetup2 = () => {
	const [calendar, setCalendar] = useState([]);
	const [value, setValue] = useState(moment());
	
	const startDay = value.clone().startOf("month").startOf("week");
	const endDay = value.clone().endOf("month").endOf("week");
	
	
	useEffect(() => {
		const day = startDay.clone().subtract(1, 'day');
		const a = [];
		while(day.isBefore(endDay, 'day')){
			a.push(
				Array(7)
					.fill(0)
					.map(() => day.add(1,'day').clone())
			);
		}
		setCalendar(a);
	}, [value]);
	
	
	function dayStyles(day) {
		if (day.isBefore(new Date(), 'day')){
			return 'before';
		}
		if (value.isSame(day, 'day')){
			return 'selected';
		}
		if (day.isSame(new Date(), 'day')){
			return 'today';
		}
		return '';
	}
	
	function beforeToday(day){
		return day.isBefore(new Date(), 'day');
	}
	
	function curMonthName(){
		return value.format("MMMM");
	}
	function curYear(){
		return value.format("YYYY");
	}
	function prevMonth(){
		return value.clone().subtract(1, 'month');
	}
	function nextMonth(){
		return value.clone().add(1, 'month');
	}
	function thisMonth(){
		return value.isSame(new Date(),'month');
	}
	
	return(
		<div className='calendar'>
			<div className='header'>
				<div class='previous'
					onClick={()=>!thisMonth() && setValue(prevMonth())}>
					{!thisMonth() ? String.fromCharCode(171) : null}
				</div>
				<div>
					{curMonthName()} {curYear()}
				</div>
				<div class='next'
					onClick={()=>setValue(nextMonth())}>
					{String.fromCharCode(187)}</div>
			</div>
			<div className='body'>
				<div className='day-names'>
					{['s', 'm', 't', 'w', 't', 'f','s'].map((d)=>(
						<div className='week'>{d}</div>
					))}
				</div>
				
				{calendar.map((week) => (
				<div>
					{week.map((day) => (
						<div className='day' onClick={()=>!beforeToday(day)  							 && setValue(day)}>	 	
							<div className={dayStyles(day)}>
								{day.format("D")}
							</div>
						</div>
					))}
				</div>
			))}
			</div>
		</div>
	)
}

export default PlanMeetup2;