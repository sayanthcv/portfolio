import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../App.css';
import Profile from '../assets/profile.jpg';
import Resume from '../assets/resume.pdf'
const About = () => {
  return (
    <>
      <div className="about-section" id='home'>
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col md={6} className="about-content">
              <p className='fs-5 font-weight-bold title-para'>HELLO!</p>
              <h1 className='name-title'>I'm <strong> <br/> Sayanth C V</strong></h1>
              <p className="name-title-desc">A Computer Engineer</p>
            </Col>
            <Col md={6} className="text-center">
              <Image src={Profile} className="profile-image" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-section" id="about">
        <Container className="h-100">
          <Row>
            <Col>
              <h1 className='text-center about-title'>About Me</h1>
              <p className='about-text'>
                Hello! I'm Sayanth C V, a passionate software developer. I specialize in creating dynamic and beautiful web pages. A motivated and dedicated final-year Computer Science and Engineering student seeking an opportunity to apply technical skills and contribute to a dynamic team. Passionate about software development and problem-solving.
              </p>
              <div className="text-center">
              <a className="download-cv-button" style={{textDecoration:"none"}} href={Resume} download>DOWNLOAD CV
              </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
