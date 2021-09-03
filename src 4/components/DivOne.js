import { Link } from 'react-router-dom'
const DivOne = () => {
	const linkStyle = {color: 'black', textDecoration: 'none', fontFamily: 'Raleway', fontSize: 30};
	return(
		<div className='div_one'>
			<img className="picture" src="friends.png" alt="Friends"/>
			<h1 className="div_one_text">Plan meetups with friends.</h1>
			<button className="div_button"><Link to="/plan" style={linkStyle}> Get Started</Link></button>
		</div>
	)
}

export default DivOne;