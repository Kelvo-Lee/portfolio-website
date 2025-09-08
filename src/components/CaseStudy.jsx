// src/components/CaseStudy.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

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

// The projects array with all nine project details
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
    title: "E-commerce Mobile App",
    description: "A mobile e-commerce application with a secure checkout process.",
    image: projectImage7,
    tags: ['React Native', 'Node.JS', 'API']
  },
  {
    id: '8',
    title: "Interactive Data Dashboard",
    description: "A web dashboard for visualizing and analyzing complex datasets.",
    image: projectImage8,
    tags: ['React', 'API', 'Data Visualization', 'D3.js']
  },
  {
    id: '9',
    title: "Personal Blog/CMS",
    description: "A full-stack personal blog platform with a content management system.",
    image: projectImage9,
    tags: ['React', 'Node.JS', 'MongoDB', 'CMS']
  }
];

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <Container className="my-5 py-5 text-center text-light">
        <h2>Project not found!</h2>
        <Link to="/" className="btn btn-outline-primary mt-3 fw-bold">Back to Home</Link>
      </Container>
    );
  }

  // Define the content for each case study
  let caseStudyContent;
  if (project.id === '1') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>Built a clean, user-friendly website for a charity to serve as a hub for their mission and campaigns. The goal was to create an accessible, professional site to drive donations and engagement.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The charity's existing online presence was outdated and inefficient. Key issues included poor navigation, slow performance, and a lack of clear calls-to-action, hindering effective communication and fundraising.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>I redesigned the frontend with a focus on modern, responsive design using HTML and CSS. The process involved analyzing the target audience to create an intuitive user interface with clear navigation and prominent buttons. I also prioritized accessibility to ensure a seamless experience for all users.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The new website significantly improved the charity's digital presence. The enhanced user experience resulted in a notable increase in online donations and higher engagement rates. The professional design has strengthened the charity's brand image and encouraged continued visitor support.</p>
      </>
    );
  } else if (project.id === '2') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>Built a landing page to showcase a logistics company's services. The goal was to create an impactful, professional site that would effectively generate leads and build trust with potential clients.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The primary challenge was to capture visitor interest quickly and convert it into action. I needed to present complex services in a clear, concise, and visually appealing way to build confidence in the company's brand and encourage client inquiries.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>I focused on a clean, responsive frontend design using HTML and CSS. I created a single-page layout with a strong visual hierarchy, incorporating clear sections for services, testimonials, and a streamlined contact form to guide users easily.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The new landing page provides a clear and professional face for the company. It successfully increased lead generation and improved the user experience, helping to attract high-value clients and reinforce the company's market position.</p>
      </>
    );
  } else if (project.id === '3') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>The goal of this project was to design a mobile application that simplifies utility bill management for users. The app needed a sleek, intuitive interface that made it easy to view, track, and pay bills securely.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The main challenge was to take a typically complex and stressful task—managing bills—and make it feel effortless and straightforward. I had to design a user flow that was both efficient for power users and simple for first-time users, all while ensuring robust security was a top priority.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>My process began with user research to understand common pain points in bill management. Based on these insights, I created wireframes and prototypes in Figma to map out the user flow. The solution involved a clean, minimalist UI with a dashboard that provides an at-a-glance view of upcoming payments. I designed intuitive data visualizations to help users track their spending and a secure, step-by-step payment process that minimizes friction.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The resulting app design provides a calm and simple solution for a stressful problem. The intuitive UI and clear payment flow have the potential to significantly reduce user anxiety around financial management. The design is scalable and provides a solid foundation for a powerful and secure application that can improve user's financial habits.</p>
      </>
    );
  } else if (project.id === '4') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>The goal was to create a professional and secure landing page for a company specializing in background checks and verification services. The site needed to communicate trust and authority while presenting the company’s services in a clear, compelling manner to potential clients.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The main challenge was building trust with potential clients, as the services offered are sensitive. The design needed to feel credible and secure, while also guiding users to key information and contact forms without a cluttered feel.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>I used React and Bootstrap to build a modern, responsive single-page application. The design focuses on a clean layout with a strong visual hierarchy. I implemented clear calls-to-action for each service and a streamlined contact form. I also prioritized performance and responsiveness to ensure a professional experience on any device.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The landing page provides a professional and trustworthy online presence for the company. The design effectively showcases the services and has successfully improved lead generation by making it easy for users to get in touch and learn more.</p>
      </>
    );
  } else if (project.id === '5') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>I developed a full-stack real estate platform to manage and streamline property transactions. The application required a robust backend for handling listings and an intuitive frontend for both property managers and buyers.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The core challenge was to build a cohesive platform that could manage complex data while providing a secure and responsive user interface. I had to integrate various components, from the database to the front end, to ensure a smooth and reliable user journey.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>I built the application using a full-stack approach with React for the frontend, Node.js for the backend, and MySQL for the database. I designed a relational database and a RESTful API to manage data, creating dynamic and interactive pages for listings, dashboards, and search functions.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The final application provides a complete real estate solution. By combining a reliable backend with a user-friendly frontend, the platform offers an efficient and scalable way to manage properties and connect with clients.</p>
      </>
    );
  } else if (project.id === '6') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>I built a crypto website featuring real-time market data, a wallet connection tool, and an analytics dashboard. The goal was to create a dynamic platform for users to track assets and explore market trends.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The main challenge was handling and displaying real-time data from various crypto APIs. I needed to ensure data was updated instantly and presented in a clear, organized way to avoid overwhelming the user.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>My solution focused on an API-first approach, using React to build a dynamic and responsive frontend. I integrated a robust crypto API to fetch live data and used custom CSS to design an intuitive analytics dashboard that visualizes the data effectively.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The website successfully delivers an immersive crypto experience. The ability to view real-time data and simulate a portfolio empowers users to make more informed decisions, demonstrating my skills in API integration and creating highly interactive user interfaces.</p>
      </>
    );
  } else if (project.id === '7') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>I designed and developed a mobile e-commerce application to provide a seamless and intuitive shopping experience. The app needed a clean interface, robust product management, and a secure, straightforward checkout process to drive sales and customer engagement.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The core challenge was to simplify the mobile shopping journey. I had to create a user flow that made browsing products, adding items to a cart, and completing a purchase feel effortless on a small screen, all while ensuring user data and payment information remained secure.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>I used **React Native** to build a cross-platform mobile app. For the backend, I implemented a **RESTful API** to handle user accounts, product data, and order processing. The solution included intuitive product search and filtering, a dynamic shopping cart, and a secure, multi-step checkout with form validation to minimize user friction.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The final e-commerce app provides a smooth and reliable shopping experience. It successfully streamlines the purchase process and creates an engaging user interface that encourages repeat customers. This project demonstrates my ability to build a full-stack, mobile-first application from concept to execution.</p>
      </>
    );
  } else if (project.id === '8') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>I built an interactive web dashboard designed to visualize and analyze complex datasets. The goal was to transform raw data into a set of actionable insights, providing users with a clear, at-a-glance understanding of key performance metrics through charts, graphs, and filters.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The main challenge was handling a large volume of data and presenting it in a way that was both easy to understand and highly customizable. I needed to create a system that could fetch and render data quickly and allow users to filter, sort, and interact with the visualizations without performance lag.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>I used **React** and a **data visualization library** like Chart.js or D3.js. The solution involved implementing an efficient data fetching strategy to load only the necessary data. I designed the dashboard with modular components for each chart, which can be dynamically updated based on user interactions.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The dashboard successfully provides a powerful tool for data analysis. The clean design and interactive features make complex data accessible to a broad audience, helping users identify trends and make data-driven decisions. This project showcases my skills in data handling, front-end optimization, and creating intuitive user interfaces for analytical tools.</p>
      </>
    );
  } else if (project.id === '9') {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>I developed a personal blog platform with a content management system (CMS) to make it easy to write and publish articles. The goal was to create a clean, minimalist space for sharing content while building a functional backend for managing posts, categories, and user comments.</p>
        <h4 className="fw-bold mt-4">The Challenge</h4>
        <p>The main challenge was building a seamless content creation workflow. I needed a secure system for an admin to create, edit, and publish new posts, along with a dynamic front end that would render the content beautifully and responsively on any device.</p>
        <h4 className="fw-bold mt-4">My Process & Solution</h4>
        <p>I used a **full-stack approach** with **React** for the front end and a **headless CMS** or custom **Node.js** backend. The solution included a rich-text editor for writing posts and a secure API for managing all content. The front end was designed to be fast and SEO-friendly, with dynamic routing for individual blog posts.</p>
        <h4 className="fw-bold mt-4">The Result & Impact</h4>
        <p>The blog platform provides a simple and effective way to manage and share content. It has successfully created a clean and professional online presence that is both easy to use for the administrator and pleasant to read for visitors. The project demonstrates my ability to build and deploy a content-driven application.</p>
      </>
    );
  } else {
    caseStudyContent = (
      <>
        <h3 className="fw-bold mb-3">Project Overview</h3>
        <p>This is a generic placeholder for your project write-up. When you are ready, replace this text with your detailed case study for **Project {project.id}**, outlining the challenge, your process, and the result.</p>
        <p>Make sure to include headers like "The Challenge," "My Process & Solution," and "The Result & Impact."</p>
      </>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Container className="my-5 text-dark">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">{project.title}</h1>
          <p className="lead fs-5">{project.description}</p>
          <div className="mb-3">
            {project.tags.map((tag, i) => (
              <Badge key={i} bg="secondary" pill className="m-1 px-2">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Image src={project.image} fluid rounded className="mb-5" />

        <Row className="justify-content-center my-5">
          <Col md={8}>
            {caseStudyContent}
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-outline-primary fw-bold">
            Back to Home
          </Link>
        </div>
      </Container>
    </motion.div>
  );
};

export default CaseStudy;