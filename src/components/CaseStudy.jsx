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
      <p>I designed and developed a website to empower women across diverse industries. The platform provides a supportive community, valuable resources, and opportunities for networking and career growth, with the goal of fostering a strong, interconnected network of professional women.</p>
      <h4 className="fw-bold mt-4">The Challenge</h4>
      <p>The core challenge was to create a digital space that felt both professional and welcoming. I needed to build a secure platform for resource sharing while ensuring an intuitive user experience. The design had to be elegant and inspiring, reflecting the website's mission to uplift and support its members.</p>
      <h4 className="fw-bold mt-4">My Process & Solution</h4>
      <p>I used **React** to build a dynamic and responsive front end. The solution included a dedicated resources section, a community forum for members to connect, and a user-friendly dashboard for managing profiles. The platform was designed to be easily scalable, allowing for future expansion with new features and content.</p>
      <h4 className="fw-bold mt-4">The Result & Impact</h4>
      <p>The final website provides a powerful tool for empowering women professionally. It has successfully created a digital hub that inspires growth and collaboration. This project demonstrates my ability to build a mission-driven platform from concept to a fully functional and secure website.</p>
    </>
  );
} else if (project.id === '8') {
  caseStudyContent = (
    <>
      <h3 className="fw-bold mb-3">Project Overview</h3>
      <p>I built an e-commerce website to serve as a mini-store for purchasing phones and accessories. The goal was to create a clean, modern shopping experience with a focus on a straightforward product catalog and a secure, efficient checkout process to drive sales.</p>
      <h4 className="fw-bold mt-4">The Challenge</h4>
      <p>The main challenge was simplifying the online shopping journey. I needed to design an intuitive user flow that made it easy for customers to browse products, add items to a cart, and complete a purchase. The website had to be fast and responsive, providing a smooth experience on both desktop and mobile devices.</p>
      <h4 className="fw-bold mt-4">My Process & Solution</h4>
      <p>I used **React** to build the user interface and integrated a **RESTful API** for managing product inventory and handling transactions. The solution included a dynamic product display with filters, a persistent shopping cart, and a secure checkout process with form validation to ensure customer data is protected.</p>
      <h4 className="fw-bold mt-4">The Result & Impact</h4>
      <p>The mini-store successfully provides a seamless and reliable shopping experience. It showcases my ability to build a full-stack e-commerce solution from scratch, with a focus on user experience, security, and performance. This project demonstrates my skills in creating a functional, sales-driven web application.</p>
    </>
  );
} else if (project.id === '9') {
  caseStudyContent = (
    <>
      <h3 className="fw-bold mb-3">Project Overview</h3>
      <p>I developed a website to order all types of food, from local cuisines to international dishes. The platform provides users with a simple way to browse menus, customize orders, and manage the delivery process, creating a seamless and convenient dining experience.</p>
      <h4 className="fw-bold mt-4">The Challenge</h4>
      <p>The core challenge was to create an intuitive and visually appealing menu system that could handle a wide variety of food options and complex order customizations. I needed to design a user flow that made placing an order feel effortless while providing clear updates on the order status from preparation to delivery.</p>
      <h4 className="fw-bold mt-4">My Process & Solution</h4>
      <p>I used **React** for the front end and integrated a **Node.js** or **headless CMS** for managing restaurant data and order processing. The solution included a dynamic menu interface, a customizable order builder, and a real-time order tracking feature to keep users informed. The design was focused on high-quality food visuals and an easy-to-navigate interface.</p>
      <h4 className="fw-bold mt-4">The Result & Impact</h4>
      <p>The food ordering website successfully provides a convenient and enjoyable user experience. It demonstrates my ability to build a robust, content-driven application with a focus on user convenience and real-time functionality. The project showcases my skills in front-end design, API integration, and creating intuitive user workflows.</p>
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