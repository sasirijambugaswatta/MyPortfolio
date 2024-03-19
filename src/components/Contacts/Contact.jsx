import React from 'react';
import {getImageUrl} from "../../utils.js";

import styles from "./Conatact.module.css"

const Contact = () => {
    return (
        <footer id={"contact"} className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email Icon"/>
                    <a href="mailto:jambugaswattasasiri@gmail.com">jambugaswattasasiri@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                    <a href="https://www.linkedin.com/in/sasiri-jambugaswaththa/">Sasiri Jambugaswaththa</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github Icon"/>
                    <a href="https://github.com/sasirijambugaswatta">Github</a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact;