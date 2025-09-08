// src/components/Projects.jsx

import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import all your project images
import projectImage1 from '../assets/project1.PNG';
import projectImage2 from '../assets/project2.jpeg';
import projectImage3 from '../assets/project3.JPG';
import projectImage4 from '../assets/project4.png';
import projectImage5 from '../assets/project5.png';
import projectImage6 from '../assets/project6.png';
import projectImage7 from '../assets/project7.png';
import projectImage8 from '../assets/project8.png';
import projectImage9 from '../assets/project9.png';

// The projects array with corrected string IDs
const projects = [
  {
    id: '1',
    title: "Charity Website",
    description: "A frontend website built to manage a charity organization",
    image: projectImage1,
    tags: ['HTML', 'CSS']
  },
  {
    id: '2',
    title: "Logistic landing page",
    description: "Landing page to showcase a logistic website",
    image: projectImage2,
    tags: ['HTML', 'CSS']
  },
  {
    id: '3',
    title: "Fintech App Design",
    description: "A design to manage utility bills",
    image: projectImage3,
    tags: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research']
  },
  {
    id: '4',
    title: "Landing page website",
    description: "A site to run background checks, verification and On-ground investigations",
    image: projectImage4,
    tags: ['React', 'Bootstrap', 'HTML', 'CSS']
  },
  {
    id: '5',
    title: "A Real estate application",
    description: "A full-stack Real estate platform built to purchase and manage properties.",
    image: projectImage5,
    tags: ['React', 'Bootstrap', 'Node.JS', 'CSS', 'API', 'MYSQL']
  },
  {
    id: '6',
    title: "A crypto website",
    description: "A Functional crypto website that showcase Real-time data market, wallet connection, Analytics dashboard and portfolio simulation",
    image: projectImage6,
    tags: ['React', 'Bootstrap', 'Node.JS', 'CSS', 'API']
  },
  {
    id: '7',
    title: "Woman empowering website",
    description: "A website to empower women accross diverse industries with opportunities for growth and success.",
    image: projectImage7,
    tags: ['React', 'Bootstrap', 'CSS']
  },
  {
    id: '8',
    title: "A ministore",
    description: "A website to purchase phones and accessories.",
    image: projectImage8,
    tags: ['Javascript', 'Bootstrap', 'CSS', 'API']
  },
  {
    id: '9',
    title: "Yummy",
    description: "A website to order for all types of food from local cuisines to international dishes.",
    image: projectImage9,
    tags: ['Javascript', 'Django', 'CSS', 'API', 'Bootstrap']
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <Container className="my-5 py-5 text-center">
      <h2 className="display-5 fw-bold mb-5">Featured Projects</h2>
      <Row className="justify-content-center g-4">
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={project.id}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-100 shadow-sm border-0 bg-dark text-light">
                <Card.Img variant="top" src={project.image} className="img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <Badge bg="secondary" pill className="m-1 px-2" key={i}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/projects/${project.id}`} className="btn btn-outline-primary fw-bold">
                    View Case Study
                  </Link>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;