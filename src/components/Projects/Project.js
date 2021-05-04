import React, { useEffect } from 'react';
import "./Project.css";
import aos from 'aos'
import 'aos/dist/aos.css';
import img1 from "../../images/project1.png";
import img2 from '../../images/project2.png';
import img3 from "../../images/project3.png";
// import img4 from "../../images/project4.png";

function Project() {
	useEffect(() => {
		aos.init({ duration: 1000 });
	}, []);
	return (
		<>
			<div id="project" className="project-container" >
				<h1>Projects</h1>
				<div className="list">
					<div className="card ">
						<h3 className="card-title">1. Lyrics Searcher</h3>
						<div className="card-body">
							<div data-aos="fade-in" data-aos-easing="ease-in-out" className="card-text">
								<ul>
									<li>BUILT A REACT-APP THAT SEARCHES LYRICS OF THE SONGS</li>
									<li>TECH USED: REACT.JS | MUSIXMATCH API</li>
									<li>
										<a href="https://github.com/DishantMehra1/lyrics_seacrh_app">See Project</a>
									</li>
								</ul>
							</div>
							<div data-aos="fade-up" data-aos-easing="ease-in-out" className="image" >
								<img src={img1} alt="project2" />
							</div>
						</div>
					</div>
					<div className="card ">
						<h3 className="card-title">2. GITHUB JOBS APP </h3>
						<div className="card-body">
							<div data-aos="fade-in" data-aos-easing="ease-in-out" className="card-text">
								<ul>
									<li>BUILT A REACT-APP THAT SEARCHES AVAILABLE JOBS</li>
									<li>TECH USED: REACT.JS | GITHUB-JOBS API</li>
									<li>
										<a href="https://github.com/DishantMehra1/GitHub_jobs_react-app">See Project</a>
									</li>
								</ul>
							</div>
							<div data-aos="fade-up" data-aos-easing="ease-in-out" className="image" >
								<img src={img2} alt="project2" />
							</div>
						</div>
					</div>
					<div className="card ">
						<h3 className="card-title">3. CHAT APPLICATION</h3>
						<div className="card-body">
							<div data-aos="fade-in" data-aos-easing="ease-in-out" className="card-text">
								<ul>
									<li>BUILT A REAL-TIME CHAT APPLICATION USING REACT</li>
									<li>TECH USED: REACT.JS | SOCKETS | REST-API | REACT-HOOKS</li>
									<li>
										<a href="https://github.com/DishantMehra1/chat_application">See Project</a>
									</li>
								</ul>
							</div>
							<div data-aos="fade-up" data-aos-easing="ease-in-out" className="image" >
								<img src={img3} alt="project2" />
							</div>
						</div>
					</div>
					<div className="card ">
						<h3 className="card-title">4. EXPENSE TRACKER</h3>
						<div className="card-body">
							<div data-aos="fade-in" data-aos-easing="ease-in-out" className="card-text">
								<ul>
									<li>REACT-APP WHICH TRACKS YOUR INCOME, EXPENSES AND BALANCE</li>
									<li>TECH USED: REACT.JS | CONTEXT-API | MATERIAL UI | SPEECHLY FOR (VOICE RECOGNITION)</li>
									<li>
										<a href="https://github.com/DishantMehra1/lyrics_seacrh_app">See Project</a>
									</li>
								</ul>
							</div>
							<div data-aos="fade-up" data-aos-easing="ease-in-out" className="image" >
								<img src={img1} alt="project2" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;