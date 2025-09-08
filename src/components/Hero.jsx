import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaBehance, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

import profilePic from '../assets/profile.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, 
        duration: 1.5,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container className="my-5 py-5 text-center text-lg-start">
        <Row className="align-items-center justify-content-center">
          {/* Profile Picture Column */}
          <Col xs={12} lg={4} className="d-flex justify-content-center mb-4 mb-lg-0">
            <div className="rounded-circle overflow-hidden" style={{ width: '250px', height: '250px' }}>
              <img src={profilePic} alt="Kelvin Akharamen" className="img-fluid" />
            </div>
          </Col>

          {/* Text Content Column */}
          <Col xs={12} lg={8}>
            <h1 className="display-4 fw-bold mb-3">Hi, I'm Kelvin</h1>
            <p className="lead fs-5 mb-4">
              I'm a Software Engineer and Product Designer with a B.S. in Computer Science. I create clean, beautiful websites and web applications by blending my technical expertise with a strong passion for user-centered design. I'm driven by a positive outlook and a commitment to solving complex challenges.
            </p>

            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start align-items-center mb-4">
              {/* Social Media Links */}
              <div className="d-flex mb-3 mb-md-0 me-md-4">
                <a href="https://www.linkedin.com/in/akharamen-kelvin-ab2851350/" target="_blank" rel="noopener noreferrer" className="text-dark me-3 fs-3">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Kelvo-Lee" target="_blank" rel="noopener noreferrer" className="text-dark me-3 fs-3">
                  <FaGithub />
                </a>
                <a href="https://behance.net/kelvin-akharamen" target="_blank" rel="noopener noreferrer" className="text-dark me-3 fs-3">
                  <FaBehance />
                </a>
                <a href="https://www.instagram.com/Kelvo_lee" target="_blank" rel="noopener noreferrer" className="text-dark me-3 fs-3">
                  <FaInstagram />
                </a>
              </div>
              
              {/* Resume/CV Button */}
              <Button 
                variant="primary" 
                href="./Kelvin Akharamen.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 fs-5"
                download="Kelvin Akharamen.pdf"
              >
                Download Resume/CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Hero;