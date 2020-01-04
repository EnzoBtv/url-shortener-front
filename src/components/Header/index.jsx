import React, { useState } from "react";
import "./main.scss";
export default function Header() {
	const [menuCollapsed, setMenuCollapsed] = useState(true);
	return (
		<>
			<header className='header'>
				<img src='/images/bitly.png' alt='é' className='logo'></img>
				<nav className='listContainer'>
					<ul className='list'>
						<li className='list__item'>What is GetItShort</li>
						<li className='list__item'>Features</li>
						<li className='list__item'>Pricing</li>
					</ul>

					<ul className='list'>
						<li className='list__item'>Login</li>
						<li className='list__item'>Register</li>
						<li className='list__item'>
							<a className='list__button'>Test it Free</a>
						</li>
					</ul>
				</nav>
				<svg onClick={() => setMenuCollapsed(curMenuCollapsed => !curMenuCollapsed)} className='collapsed-menu-icon'>
					<use href='/images/symbol-defs.svg#icon-menu'></use>
				</svg>
			</header>
			{!menuCollapsed ? (
				<ul>
					<li>What is GetItShort</li>
					<li>Features</li>
					<li>Pricing</li>
					<li>Login</li>
					<li>Register</li>
					<li>Test it</li>
				</ul>
			) : null}
		</>
	);
}
