// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // <-- New imports

import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy'; // <-- We will create this next

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Routes>
          {/* Main Homepage Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          {/* Dynamic Route for Each Project Case Study */}
          <Route path="/projects/:id" element={<CaseStudy />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;