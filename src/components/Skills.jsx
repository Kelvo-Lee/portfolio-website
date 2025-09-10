import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Bootstrap', 'Wordpress', 'Tailwind CSS', 'jQuery'],
    backend: ['Node.js', 'PHP', 'Python', 'Django'],
    databases: ['MySQL', 'MongoDB'],
    uiux: ['Figma', 'User Research', 'Prototyping'],
    tools: ['PyCharm', 'GitHub', 'Git', 'VS Code', 'Photoshop','Illustrator']
  };

  const skillsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  const getRandomColor = () => badgeColors[Math.floor(Math.random() * badgeColors.length)];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={skillsVariants}
    >
      <Container className="my-5 py-5 text-center">
        <h2 className="display-5 fw-bold mb-5">Skills & Expertise</h2>
        
        <Row className="justify-content-center">
          {Object.entries(skills).map(([category, list]) => (
            <Col xs={12} md={6} lg={4} className="mb-4" key={category}>
              <div className="card h-100 shadow-sm border-0 bg-dark text-light">
                <div className="card-body">
                  <h4 className="card-title text-capitalize mb-4 fw-bold text-primary">{category}</h4>
                  <div className="d-flex flex-wrap justify-content-center">
                    {list.map((skill, index) => (
                      <Badge 
                        key={index} 
                        bg={getRandomColor()} 
                        pill 
                        className="m-2 px-3 py-2 fw-normal fs-6 text-uppercase"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Skills;