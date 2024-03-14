import React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./Hero.module.css"
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>HI I am Sasiri</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam, architecto asperiores aut commodi culpa dolores earum eveniet excepturi facilis iusto minima molestias placeat quae quis, reiciendis repellat vel velit.
                </p>
                <a href="mailto:jambugaswattasasiri@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};

export default Hero;