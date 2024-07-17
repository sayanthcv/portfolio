import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import Resumes from '../assets/resume.pdf'

const Resume = () => {
  const educationDetails = [
    {
      school: 'Rajiv Gandhi Institute of Technology, Kottayam',
      degree: 'B.Tech in Computer Science & Engineering',
      duration: '2021 - 2025',
    },

    {
      school: 'Kendriya Vidyalaya Port Trust',
      degree: 'Higher Secondary Education-CBSE',
      duration: '2019 - 2021',
    },
    {
      school: 'Kendriya Vidyalaya Port Trust',
      degree: 'Secondary Education-CBSE',
      duration: '2018 - 2019',
    },
  
  ];

  return (
    <div className="resume-section">
      <Container className="h-100"  id="resume">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={10}>
            <h1 className="text-center resume-title">Resume</h1>
            <Row>
              {educationDetails.map((edu, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="education-card bg-dark">
                    <Card.Body>
                      <Card.Title className="text-white">{edu.school}</Card.Title>
                      <Card.Subtitle className="mb-2" style={{color:'#999999'}}>{edu.degree}</Card.Subtitle>
                      <Card.Text className="text-warning">
                        <strong>{edu.duration}</strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              <div className="text-center w-100 mt-4">
              <a className="download-cv-button" style={{textDecoration:"none"}} href={Resumes} download>DOWNLOAD CV
              </a>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
