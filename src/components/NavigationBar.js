import React from 'react';
import  { useState, useEffect } from 'react';
import './NavigationBar.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {


  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  // Mouse hover

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };



  return (

    <div>
      {/* New changes in navigationbar css adding */}
    <div className={scroll ? 'navbar active' : 'navbar'} style={{  backgroundColor: 'transparent',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
    /* position */
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  }}>
    <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: '#87CEEB', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '30px', paddingTop: '10px', fontSize: '24px', position:'fixed' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Brand logo (replace with your logo) */}
      <Navbar.Brand style={{ marginRight: '20px' }}>
        <img
          src={process.env.PUBLIC_URL + '/Navbar/logo.webp'}
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      {/* Hamburger menu toggle button for mobile */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      {/* Collapsible navbar content */}
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* Navigation items aligned to the right */}
        <Nav className="ml-auto"  onClick={handleClick}>
          {/* Use Link components for navigation */}
          <Link to="/" className="nav-link"   style={{ color: 'black', marginRight: '20px' }}  onClick={closeMobileMenu}>Home</Link>
          
          {/* Admission Dropdown */}
          <NavDropdown title="Admission" id="admission-dropdown" >
            <Container>
              <Link to="/admissions-overview" className="dropdown-item" >Admissions Overview</Link>
              <Link to="/programs" className="dropdown-item">Programs</Link>
              <Link to="/application-form" className="dropdown-item">Application Form</Link>
            </Container>
          </NavDropdown>

          {/* About Us Dropdown */}
          <NavDropdown title="About Us" id="aboutus-dropdown" show={showDropdown}>
            <Container>
              <Link to="/college-history" className="dropdown-item">College History</Link>
              <Link to="/mission-vision" className="dropdown-item">Mission & Vision</Link>
              <NavDropdown.Divider />
              {/* Faculty Submenu */}
              <NavDropdown title="Faculty" id="faculty-dropdown" >
                <Container>
                  <Link to="/faculty-profile" className="dropdown-item">Faculty Profile</Link>
                  <Link to="/faculty-list" className="dropdown-item">Faculty List</Link>
                </Container>
              </NavDropdown>
              <Link to="/facilities" className="dropdown-item">Facilities</Link>
            </Container>
          </NavDropdown>

          {/* Academics Dropdown */}
          <NavDropdown title="Academics" id="academics-dropdown">
            <Container>
              {/* Department Submenu */}
              <NavDropdown title="Department" id="department-dropdown">
                <Container>
                  <Link to="/department-list" className="dropdown-item">Department List</Link>
                  <Link to="/department" className="dropdown-item">Department</Link>
                </Container>
              </NavDropdown>
              {/* Research Submenu */}
              <NavDropdown title="Research" id="research-dropdown">
                <Container>
                  <Link to="/research-areas" className="dropdown-item">Research Areas</Link>
                  <Link to="/projects" className="dropdown-item">Projects</Link>
                  <Link to="/publications" className="dropdown-item">Publications</Link>
                </Container>
              </NavDropdown>
            </Container>
          </NavDropdown>

          {/* Student Life Dropdown */}
          <NavDropdown title="Student Life" id="student-life-dropdown">
            <Container>
              <Link to="/campus-activities" className="dropdown-item">Campus Activities</Link>
              <Link to="/student-organization" className="dropdown-item">Student Organization</Link>
              <Link to="/sports" className="dropdown-item">Sports</Link>
            </Container>
          </NavDropdown>

          {/* News Dropdown */}
          <NavDropdown title="News" id="news-dropdown">
            <Container>
              <Link to="/latest-news" className="dropdown-item">Latest News</Link>
              <Link to="/event-calendar" className="dropdown-item">Event Calendar</Link>
            </Container>
          </NavDropdown>

          {/* Contact Dropdown */}
          <NavDropdown title="Contact" id="contact-dropdown">
            <Link to="/contact-info" className="dropdown-item">Contact Info</Link>
            <Link to="/inquiry-form" className="dropdown-item">Inquiry Form</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
     
    </Navbar>

    </div>
    </div>
  );
};

export default NavigationBar;
