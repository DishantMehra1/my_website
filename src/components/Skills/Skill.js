import React, { useEffect } from 'react';
import aos from 'aos';
import './Skill.css';

function Skill() {
	useEffect(() => {
		aos.init({ duration: 2000 });
	}, []);
	return (
		<>
			<div id="skills" className="skills">
				<h2>My Skills</h2>
				<h5>What I Know</h5>
				<div data-aos="fade-up" className="skill_list">
					<ul>
						<h6>C++</h6>
						<h6>Web-developement</h6>
						<h6>React.js</h6>
						<h6>Data Structures</h6>
						<h6>ALgorithms</h6>
						<h6>Problem SOlving</h6>
						<h6>HTML</h6>
						<h6>CSS</h6>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Skill;
