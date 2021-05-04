import React, { useEffect } from 'react';
import aos from 'aos';
import './About.css'
import aboutImage from '../../images/about2.jpg'
function About() {
	useEffect(() => {
		aos.init({ duration: 2000 });
	}, []);
	return (
		<>
			<div id="about" className="abt-container" >
				<h1 className="abt-heading" > About Me </h1>
				<div className="body" >
					<div className="abt-img" >
						<img data-aos="fade-up" alt="img" src={aboutImage} /></div>
					<p data-aos="fade-up" className="abt-txt" > Hi, I am Dishant Mehra. I am B.Tech Graduate in Electrical Engineering from Govt. Hydro Engg. College, Bilaspur(HP). I also have passion in learning computer science. I am Web - developer and computer - science enthusiast. I have also have good knowledge of data structures and algorithms. I am also a competitve programmer. I have 4 * rating on hackerrank and 2 * on codechef.
                    <button className="btn" >Download Resume</button>
					</p>
				</div>
			</div>
		</>
	)
}

export default About;