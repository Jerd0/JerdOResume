import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub, faVk} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact (props){
    return(
        <section id="contact-section">
        <div id="contact">
        <div className="left"></div>
        <div className="right"></div>
        </div>
        <div className="contact-msg-1">{props.data[0]}</div>
        <div className="contact-msg-2">{props.data[1]}</div>
        <div className="contact-msg-3">{props.data[2]}</div>
        <div className="contact-msg-4">{props.data[3]}</div>
        <div id="contact-icons">
        <a href={"https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%BA%D0%BE%D0%B7%D0%BE%D1%80%D0%B5%D0%B7%D0%BE%D0%B2-86241a1a9/"}>
        <FontAwesomeIcon icon={faLinkedin} size="4x" className="icons" />
        </a>
        <a href={"https://github.com/Jerd0/"}>
        <FontAwesomeIcon icon={faGithub} size="4x" className="icons" />
        </a>
        <a href="mailto:jerdo39@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="4x" className="icons" />
        </a>
        <a href={"https://vk.com/jerdo"}>
        <FontAwesomeIcon icon={faVk} size="4x" className="icons" />
        </a>
        </div>
        </section>
    )
}

export default Contact;

