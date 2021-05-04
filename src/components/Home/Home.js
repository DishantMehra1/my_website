import React, { useEffect } from 'react';
import aos from 'aos';
import './Home.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from "@material-ui/core"

function Home() {
	useEffect(() => {
		aos.init({ duration: 2000 });
	}, []);
	return (
		<React.Fragment>
			<div className="container" >
				<div data-aos="fade-out" className="txt" >
					<h1>Hello,  I Am Dishant Mehra <br></br> I am a Web-Developer </h1>
					<p>Wanna know me? <br></br> Get In Touch</p>
					<a href="https://www.instagram.com/dishant_mehra1/" target="_blank" rel="noopener noreferrer"  >
						<IconButton>
							<InstagramIcon />
						</IconButton>
					</a>
					<a href="https://www.linkedin.com/in/dishant-mehra-8882a4167/" target="_blank" rel="noopener noreferrer" >
						<IconButton>
							<LinkedInIcon />
						</IconButton>
					</a>
					<a href="https://github.com/DishantMehra1" target="_blank" rel="noopener noreferrer"  >
						<IconButton>
							<GitHubIcon />
						</IconButton>
					</a>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Home;


