import React from 'react'
import photo from '../images/photo.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faGithub, faVk} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Intro (props){

    let animePos = 0; // define animation position of the menu elements

    const nav = props.menu.map(menu => {
        animePos++;
        return(
            <a href={"#"+menu.link} key={menu.label} data-anime="move-bottom" data-intro={animePos}>{menu.label}</a>
        )
    })

    animePos = 6; // define animation position of the resume elements

    const resumeTags = props.data.map((line,i) => { // create resume elements
            animePos++;
            return(<li key={i} data-anime="move-left" data-intro={animePos}>{line}</li>)
        }
    )

    return(
        <section id="intro-section" data-ref="intro-section" >
            <nav>
                {nav}
            </nav>
            <header data-anime="fadein" data-intro="5">
                <div id="title">
                    <h1>Козорезов Вячеслав</h1>
                    <div id="sub-title">
                        <h2>Frontend Developer</h2>
                        <div id="social-icons">
                           <a href={"https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%BA%D0%BE%D0%B7%D0%BE%D1%80%D0%B5%D0%B7%D0%BE%D0%B2-86241a1a9/"}><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icons"  /></a>
                           <a href={"https://github.com/Jerd0/"}> <FontAwesomeIcon icon={faGithub} size="2x" className="icons" /></a>
                            <a href="mailto:jerdo39@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" className="icons" /></a>
                            <a href={"https://vk.com/jerdo"}> <FontAwesomeIcon icon={faVk} size="2x" className="icons" /></a>
                         </div>
                    </div>
                </div>
            </header>
            <div id="profile-info">
                <img src={photo} width={300} alt="Вячеслав Козорезов" data-anime="move-right" data-intro="6"/>
                <div id="resume">
                    {resumeTags}
                </div>
            </div>
        </section>

    ) 
    
}

export default Intro;

