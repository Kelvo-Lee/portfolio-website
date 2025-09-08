// src/components/Footer.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <Container fluid className="bg-dark text-light text-center py-4">
        <p className="mb-0">&copy; {new Date().getFullYear()} Kelvix Technologies. All rights reserved.</p>
      </Container>
    </motion.div>
  );
};

export default Footer;