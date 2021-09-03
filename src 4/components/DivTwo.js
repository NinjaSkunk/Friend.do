import { Link } from "react-router-dom";
const DivTwo = () => {
	const linkStyle = {color: 'black', textDecoration: 'none', fontFamily: 'Raleway', fontSize: 30};
	return(
		<div className='div_two'>
			<button className="div_button"><Link to="/test" style={linkStyle}> Be Spontaneous</Link></button>
			<h1 className="div_two_text">Free for the Day?</h1>
			<img className="picture2" src="friends2.png" alt="Friends"/>	
		</div>
	)
}
export default DivTwo;