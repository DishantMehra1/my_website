import React, { useEffect } from 'react';
import aos from 'aos';
import './Contact.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';

function Contact() {
    useEffect(() => {
        aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div id="contact" className="contact" >
                <h2>Contact Me</h2>
                <p>Send your Message by clicking on below button. I will try to reply as soon as possible</p>
                <a className="btn_2" href="mailto:dishantmehra20041@gmail.com" >
                    Say Hello
                    </a>
                <div data-aos="fade-up" className="connect" >
                    <ul>
                        <a href="https://github.com/DishantMehra1" target="_blank" rel="noreferrer" >
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>
                        </a>
                        <a href="https://www.linkedin.com/in/dishant-mehra-8882a4167/" target="_blank" rel="noreferrer" >
                            <IconButton>
                                <LinkedInIcon area-label="linkedin" />
                            </IconButton>
                        </a>
                        <a href="https://www.instagram.com/dishant_mehra1/" target="_blank" rel="noreferrer"  >
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </a>
                    </ul>
                </div>
                <footer>Design And Built By Dishant Mehra</footer>

            </div>
        </>
    );
};
export default Contact;