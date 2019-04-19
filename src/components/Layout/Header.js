import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
	return (
		<header style={headerStyle} >
		<h1>Tummeti Labs - React TODO</h1>
		<Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
		</header>
	)
}

const linkStyle = {
		color: '#FFF',
		textDecoration: 'none'
}

const headerStyle = {
	padding: '20px',
	background: '#000',
	color: '#FFF',
	textAlign: 'center',
}

export default Header;