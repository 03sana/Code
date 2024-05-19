/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sana.nasani3@gmail.com">sana.nasani3@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />
          <a href="www.linkedin.com/in/sana-nassani-a54731265">
            linkedin.com/sana-nasani
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/03sana">github.com/03sana</a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/instagramIcon.png")}
            alt="Instagram icon"
          />
          <a href="https://www.instagram.com/03coder?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            03coder - Sana•software
          </a>
        </li>
      </ul>
    </footer>
  );
};
