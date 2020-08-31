import React from 'react';

import styles from './Main.module.scss';

export default function Main() {
  return (
    <div>
      <main>
        <div className={styles.headline}>
          We design and build user friendly digital experiences for your product and services.
        </div>
        <div className={styles.subheading}>
          We do UX/UI design, product design, visual design, and website and web app development.
        </div>
        <div className={styles.getInTouchContainer}>
          <img
            src="/static/images/contactButton.svg"
            alt="Get in touch!"
          />
        </div>
        
        <div className={styles.projectSection}>
          <a
            href="https://typeratio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/static/images/ratio1.png"
              className={styles.projectImg1}
              alt="Ratio 1"
            />
            <img
              src="/static/images/ratio2.png"
              className={styles.projectImg2}
              alt="Ratio 2"
            />
          </a>
          <div className={styles.projectSectionText}>
            We created ratio to make type systems easy and fun to make. Our main priority was making the experience on mobile a blast! Click <a href="https://typeratio.com" target="_blank" rel="noopener noreferrer" className={styles.projectSectionTextLink}>here</a> for the case study. Try it out at typeratio.com!
          </div>
        </div>
        
        <div className={styles.projectSection}>
          <a
            href="https://waldostyliststudio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/static/images/waldos1.png"
              className={styles.projectImg1}
              alt="Waldos 1"
            />
            <img
              src="/static/images/waldos2.png"
              className={styles.projectImg2}
              alt="Waldos 2"
            />
          </a>
          <div className={styles.projectSectionText}>
            We crafted a clean and elegant site for Waldos Stylist Studio as well as a new brand identity. The site is straight-forward and to the point. Like the client. Click <a href="https://waldostyliststudio.com" target="_blank" rel="noopener noreferrer" className={styles.projectSectionTextLink}>here</a> for the case study. Check it out at waldostyliststudio.com!
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <img
            src="/static/images/profilePicture.svg"
            className={styles.profilePicture}
            alt="Profile 1"
          />
          <img
            src="/static/images/profilePicture.svg"
            className={styles.profilePicture}
            alt="Profile 2"
          />
          <div className={styles.footerText}>
            We enjoy the intersection of technology and creativity and the opportunities that it brings.
            <div className={styles.footerTextBreak}></div>
            If you would like to get in touch, email us at <a href="mailto:n&f@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.footerEmailLink}>n&f@gmail.com</a> 2020 ©
          </div>
        </div>
      </footer>
    </div>
  )
};
