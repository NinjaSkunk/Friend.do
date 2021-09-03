import { Link } from 'react-router-dom'
const Header = () => {
	const linkStyle = {textDecoration: 'none', color: 'black'};
	return (
		<div className='options'> 
			<h1 className='title'><Link to="/test" style={linkStyle}> Friend.do</Link></h1>
			<button className='text_btn'><h1><Link to="/test" style={linkStyle}> Join*</Link></h1></button>
			<div class="vl"></div>
			<button className='text_btn'><h1><Link to="/test" style={linkStyle}> Sign Up</Link></h1></button>
		</div>
	)
}
export default Header;