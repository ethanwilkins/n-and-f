import React, { useRef } from 'react';
import { isAndroid } from 'react-device-detect';
import Scroll from 'react-scroll';

import Navbar from '../components/Navbar';

import styles from './Main.module.scss';

const scroller = Scroll.animateScroll;
const scrollerOptions = {
        duration: 300,
        delay: 50,
        smooth: true
      };

const ProjectSectionText = ({project, both, snippet}) => {
  return (
    <div className={both ? styles.projectSectionText : styles.projectSectionTextDesktop}>
      {project === 'ratio' &&
        <span>
          {(both || snippet === 1) &&
            <span>
              We created ratio to make type systems easy and fun to make. Our main priority was making the experience on mobile a blast!
            </span>
          }
          {(both || snippet === 2) &&
            <span className={styles.clickHereText}>
              Click <a href="https://bit.ly/niin-portfolio" target="_blank" rel="noopener noreferrer" className={styles.projectSectionTextLink}>here</a> for the case study. Try it out at typeratio.com!
            </span>
          }
        </span>
      }
      {project === 'waldos' &&
        <span>
          {(both || snippet === 1) &&
            <span>
              We crafted a clean and elegant site for Waldos Stylist Studio as well as a new brand identity. The site is straight-forward and to the point. Like the client.
            </span>
          }
          {(both || snippet === 2) &&
            <span className={styles.clickHereText}>
              Click <a href="https://bit.ly/niin-portfolio" target="_blank" rel="noopener noreferrer" className={styles.projectSectionTextLink}>here</a> for the case study. Check it out at waldostyliststudio.com!
            </span>
          }   
        </span>
      }
    </div>
  );
};

export default function Main() {
  const projectSection = useRef(null);
  const footer = useRef(null);
  
  const handleWorkButtonClick = () => {
    const elementDistanceFromTop = (window.pageYOffset + projectSection.current.getBoundingClientRect().top);
    const distanceScrolled = window.pageYOffset;
    // subtracts distance scrolled from 
    scroller.scrollMore(elementDistanceFromTop - distanceScrolled, scrollerOptions);
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  const handleContactButtonClick = () => {
    const elementDistanceFromTop = (window.pageYOffset + footer.current.getBoundingClientRect().top);
    const distanceScrolled = window.pageYOffset;
    // subtracts distance scrolled from 
    scroller.scrollMore(elementDistanceFromTop - distanceScrolled, scrollerOptions);
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };

  return (
    <div>
      <Navbar
        handleWorkButtonClick={handleWorkButtonClick}
        handleContactButtonClick={handleContactButtonClick}
      />
      
      <main>
        <div className={styles.headline}>
          We Design And Build User Friendly Digital Experiences For Your Product And Services.
        </div>
        <div className={styles.headlineDesktop}>
          We Design And Build User Friendly Digital Experiences For Your Product Or Services.
        </div>
        <div className={styles.subheading}>
          <div className={styles.subheadingInner}>
            We do UX/UI design, product design, visual design, and website and web app development.
          </div>
        </div>
        <div className={styles.getInTouchContainer}>
          <img
            onClick={handleContactButtonClick}
            src="/static/images/contactButton.svg"
            alt="Get in touch!"
          />
        </div>
        
        <div
          ref={projectSection}
          className={styles.projectSection}
        >
          <div className={styles.projectSectionInnerDesktop}>
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
            <ProjectSectionText
              project="ratio"
              both={true}
            />
            <ProjectSectionText
              project="ratio"
              snippet={1}
            />
            <div className={styles.projectSectionTextSpacer}></div>
            <ProjectSectionText
              project="ratio"
              snippet={2}
            />
          </div>
        </div>
        
        <div className={styles.projectSection}>
          <div className={styles.projectSectionInnerDesktop}>
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
            <ProjectSectionText
              project="waldos"
              both={true}
            />
            <ProjectSectionText
              project="waldos"
              snippet={1}
            />
            <div className={styles.projectSectionTextSpacer}></div>
            <ProjectSectionText
              project="waldos"
              snippet={2}
            />
          </div>
        </div>
      </main>
      
      <footer
        ref={footer}
        className={styles.footer}
      >
        <div className={styles.footerInner}>
          <img
            src="/static/images/neil.jpg"
            className={styles.profilePicture}
            alt="Profile 1"
          />
          <img
            src="/static/images/forrest.jpg"
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
