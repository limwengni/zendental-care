import profile from './myImg.jpeg';
import './App.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect, useRef } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import './output.css'; // Adjust the path based on your project structure
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope, faFile, faMailForward, faMailReply } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

const skillContext = require.context('./img/', false, /\.(png|jpe?g|svg)$/);
const skillImages = skillContext.keys().map(skillContext);

const skills = [
  { name: 'HTML', text: 'HyperText Markup Language' },
  { name: 'CSS', text: 'Cascading Style Sheets' },
  { name: 'JavaScript', text: 'JavaScript' },
  { name: 'Java', text: 'Java Programming Language' },
  { name: 'C#', text: 'C# Programming Language' },
  { name: 'C', text: 'C Programming Language' },
  { name: 'Java Web Server', text: 'Java-based Web Server' },
  { name: 'PHP', text: 'PHP: Hypertext Preprocessor' },
  { name: 'ASP.NET', text: 'ASP.NET Framework' },
  { name: 'jQuery', text: 'jQuery JavaScript Library' },
  { name: 'Bootstrap', text: 'Bootstrap Framework' },
  { name: 'Tailwind CSS', text: 'Tailwind CSS Framework' },
  { name: 'MySQL', text: 'MySQL Database' },
  { name: 'phpMyAdmin', text: 'phpMyAdmin Database Management Tool' },
  { name: 'ReactJS', text: 'phpMyAdmin Database Management Tool' },
  // Add more skills as needed
];

const Skill = ({ skill, image }) => (
  <div className="skill">
    <img src={image} alt={skill.name} className="skillImage" />
    <span className="skillText">{skill.text}</span>
  </div>
);

const sections = ['about']; // Add the IDs of your sections here

function scrollToNextSection(index) {
  const nextSection = sections[index + 1];
  if (nextSection) {
    scroll.scrollTo(`#${nextSection}`, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  }
}

const BlinkingCursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500); // Adjust the interval time (milliseconds) for blinking speed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return <span className="blinkingCursor">{isVisible ? '|' : ' '}</span>;
};

function App() {
  const aboutMeRef = useRef(null);

  const handleScroll = () => {
    const aboutMePosition = aboutMeRef.current.getBoundingClientRect().top;

    if (aboutMePosition < window.innerHeight - 100) {
      aboutMeRef.current.classList.add('fadeInLeft');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="background">
        <div className="outerCont">
          <div className="container" style={{ marginBottom: '-70px' }}>
            <div className="leftPanel">
              <div className="intro font-light">
                Hello World,
                <div className="introCont">
                  I'm <span className="name font-medium">Lim Weng Ni</span>
                </div>
                <p className="shortBio">
                  A coder by day, an artist by night. <br></br>Ready for a coding adventure?<BlinkingCursor />
                </p>
              </div>
              <div className="buttonCont">
                <a href="https://www.linkedin.com/in/lim-weng-ni/" class="circle-button">
                  <span class="icon">
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"></FontAwesomeIcon>
                  </span>
                </a>
                <a href="https://github.com/limwengni" class="circle-button">
                  <span class="icon">
                    <FontAwesomeIcon icon={faGithub} className="github-icon"></FontAwesomeIcon>
                  </span>
                </a>
                <a href="https://discordapp.com/users/710838990638678057" class="circle-button">
                  <span class="icon">
                    <FontAwesomeIcon icon={faDiscord} className="discord-icon"></FontAwesomeIcon>
                  </span>
                </a>
                <a href="mailto:limwn-wm21@student.tarc.edu.my" class="circle-button">
                  <span class="icon">
                    <FontAwesomeIcon icon={faEnvelope} className="mail-icon"></FontAwesomeIcon>
                  </span>
                </a>
              </div>
            </div>
            <img class="profile" src={profile} alt="Profile" width="256" height="256"></img>
          </div>
          <div className="button">
            <Link to={sections[0]} smooth duration={800}>
              <FontAwesomeIcon icon={faArrowDown} className="py-2 px-4" onClick={() => scrollToNextSection(0)} />
            </Link>
          </div>
        </div>
      </div>

      <div className="background2" id={sections[0]}>
        <div className="container2" ref={aboutMeRef}>
          <div className="title">
            About Me
          </div>
          <div className="details">
            I am a <span class="font-medium" style={{ color: '#f54966' }}>second-year</span> degree student studying <span class="font-medium">Software System Development </span>
            at Tunku Abdul Rahman University of Management and Technology (TARUMT).
            With a passion for Full-Stack Development, I have actively pursued opportunities
            to enhance my skills. After completing my degree, I aspire to become a Full-Stack developer.
          </div>
          <div className="resume">
            <a href="https://drive.google.com/file/d/1y5n79EjTYH_1g-ZwDbXRnrmav0z1ghw-/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="roundedRect-button"><FontAwesomeIcon icon={faFile} /> View My Resume</a>
          </div>
        </div>
      </div>

      <div className="background" style={{ height: '100%', background: 'linear-gradient(to right, #2a79d1, #845bbd)' }}>
        <div className="container2" style={{ marginTop: '35px' }}>
          <div className="title text-whitesmoke">
            Skills & Abilities
          </div>
          <div className="skillTable">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skillImages[index]} alt={skill.name} className="skillImage" />
                <div className="skillText">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="title-sm">
          This website is developed using HTML, CSS, ReactJs, and Tailwind CSS.
        </div>
        <div className="footerInfo title-sm">
          &copy; {new Date().getFullYear()} Weng Ni. All rights reserved.
        </div>
      </div>


    </div>
  );
}

export default App;
