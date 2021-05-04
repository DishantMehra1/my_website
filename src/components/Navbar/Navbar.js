import React, { useEffect, useState } from 'react';
import { a } from 'react-router-dom'
import "./Navbar.css";
// import menu from '../../images/menu.png'


function Navbar() {
	const [show, handleShow] = useState(true);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 130) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className={`Nav ${show && "nav-change"}`}>
			<h1>Dishant Mehra</h1>
			<ul id={showMenu ? "hidden" : ""} onClick={() => setShowMenu(!showMenu)} >
				<button /*style={{ backgroundImage: menu }}*/ onClick={() => setShowMenu(!showMenu)} >Menu</button>
				<li >
					<a exact activeClassName="active_class" href="#">Home</a>
				</li>
				<li >
					<a exact activeClassName="active_class" href="#about">About</a>
				</li>
				<li >
					<a exact activeClassName="active_class" href="#project">Projects</a>
				</li>
				<li >
					<a exact activeClassName="active_class" href="#skills">Skills</a>
				</li>
				<li >
					<a exact activeClassName="active_class" href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;