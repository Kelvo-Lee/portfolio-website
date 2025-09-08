// src/components/Contact.jsx

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaBehance, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={formVariants}
    >
      <Container className="my-5 py-5 text-dark text-center">
        <h2 className="display-5 fw-bold mb-5">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {/* The form with Formspree attributes */}
            <Form action="https://formspree.io/f/mjkkebgj" method="POST" className="text-start">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" required className="bg-dark text-light border-0" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" required className="bg-dark text-light border-0" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" name="phone" className="bg-dark text-light border-0" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} required className="bg-dark text-light border-0" />
              </Form.Group>

              <div className="d-grid gap-2 mt-4">
                <Button variant="primary" type="submit" className="px-4 py-2 fs-5">
                  Send Message
                </Button>
              </div>
            </Form>
            
            <div className="mt-4">
              <h5 className="mb-3">Connect with me</h5>
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
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;