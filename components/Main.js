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
          <div className={styles.projectSectionText}>
            We created ratio to make type systems easy and fun to make. Our main priority was making the experience on mobile a blast! Click here for the case study. Try it out at typeratio.com!
          </div>
        </div>
        
        <div className={styles.projectSection}>
          <img
            src="/static/images/ratio1.png"
            className={styles.projectImg1}
            alt="Waldos 1"
          />
          <img
            src="/static/images/ratio2.png"
            className={styles.projectImg2}
            alt="Waldos 2"
          />
          <div className={styles.projectSectionText}>
            We crafted a clean and elegant site for Waldos Stylist Studio as well as a new brand identity. The site is straight-forward and to the point. Like the client. Click here for the case study. Check it out at waldostyliststudio.com!
          </div>
        </div>
      </main>
      
      <footer>
      </footer>
    </div>
  )
};
