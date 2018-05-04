import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/routes'>routes</Link></li>
				<li><Link to='/profile'>profile</Link></li>
			</ul>
		</nav>
	</header>
)

export default Header