import { Link } from 'react-router-dom'
const DivThree = () => {
	const linkStyle = {color: 'black', textDecoration: 'none', fontFamily:'Raleway', fontSize: 30};
	return(
		<div className='div_three'>
			<img className="picture" src="soccer.png" alt="Friends"/>
			<h1 className="div_three_text">Looking for an Activity?</h1>
			<button className="div_button"><Link to="/test" style={linkStyle}> Explore</Link></button>
		</div>
	)
}

export default DivThree;