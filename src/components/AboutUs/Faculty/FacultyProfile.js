import React, { useState, useEffect } from 'react';
import './Facultyprofile1.css';


const Tab = ({ title, content, image, isActive }) => {
  return (
    <li className={`tab ${isActive ? 'active' : ''}`}>
      <article className='tab-content'>
        <h3>{title}</h3>
        <p>{content}</p>
        <button>Read More</button>
      </article>
      <div className='tab-image'><img src={image} alt={title} /></div>
    </li>
  );
};

const FacultyProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: 'Domain Proficiency',
      content: 'We ensure that our teachers are experts in their fields with a wealth of experience which makes them an invaluable asset.',
      image: 'https://assets-global.website-files.com/5d69e79b85adc9f70a07cad3/5d69e79b85adc9658807cc18_domain-proficiency-illustration-41.svg',
    },
    {
      title: 'Selection Criteria',
      content: 'Our interview process is rigorous, our selection criteria is stringent and our evaluation takes into account inter-personal skills, past experience and the ability to adapt and improvise.',
      image: 'https://assets-global.website-files.com/5d69e79b85adc9f70a07cad3/5d69e79b85adc9353b07cc30_selection-illustration-42.svg',
    },
    {
      title: 'Training',
      content: 'Our teachers undergo a minimum of 80 hours of training each year. Our dedicated training and development centre ensures that opportunities are identified for each faculty member to improve themselves and in turn help the organisation grow.',
      image: 'https://assets-global.website-files.com/5d69e79b85adc9f70a07cad3/5d69e79b85adc970ce07cc27_Training-illustration-43.svg',
    },
    {
      title: 'Collaboration',
      content: 'We share knowledge and expertise across our various campuses by exchanging ideas of best practises and conducting training and brainstorming sessions.',
      image: 'https://assets-global.website-files.com/5d69e79b85adc9f70a07cad3/5d69e79b85adc9839307cc2d_collaboration-illustration-44.svg',
    },
  ];

  useEffect(() => {
    const init = () => showTab(0);

    window.addEventListener('load', init, false);
    return () => {
      window.removeEventListener('load', init, false);
    };
  }, []);

  const reset = () => {
    const indexes = document.querySelectorAll('.indexes li');
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    for (let i = 0; i < tabs.length; i++) {
      indexes[i].style.borderColor = 'transparent';
      tabs[i].style.zIndex = 0;
      tabs[i].classList.remove('active');
      contents[i].classList.remove('active');
    }
  };

  const showTab = (i) => {
    const indexes = document.querySelectorAll('.indexes li');
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    indexes[i].style.borderColor = 'rgba(211,38,38,0.6)';
    tabs[i].style.opacity = 1;
    tabs[i].style.zIndex = 5;
    tabs[i].classList.add('active');
    contents[i].classList.add('active');
  };

  const activate = (e, index) => {
    reset();
    showTab(index);
    setActiveIndex(index);
  };

  return (
    <React.Fragment>
    <div className="home-header" style={{paddingTop:'100px'}}>
        <div className="intro">
          <div className="header">
            <h1>GIIS FACULTY</h1>
            <h2>Nearly 1500 teachers work diligently to help students build a strong educational foundation</h2>
          </div>
          <ul>
            <li>Always available</li>
            <li>GIIS History</li>
            <li>Holistic Education</li>
          </ul>
          <div className="trustpilot">Requirements...</div>
        </div>
        <div className="panels">
          <div className="panel">
            <a href="#">
              <span className="inner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWG_oONStpyIhYjqpY8rTBovPY4xauGuZTQ&usqp=CAU" className="home-sofa" alt="Sofa" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk79hckKrILRiJ-Aa9LFlynuUl9oKGg__FMQ&usqp=CAU" className="home-lamp" alt="Lamp" />
              </span>
              <span className="link link-01">Students</span>
            </a>
            <a href="#">
              <span className="inner">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20220212/pngtree-teacher-with-child-and-education-graphic-drawings-photo-image_29413812.jpg" className="home-chair" alt="Chair" />
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20220212/pngtree-teacher-with-child-and-education-graphic-drawings-photo-image_29413812.jpg" className="home-shelves" alt="Shelves" />
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20220212/pngtree-teacher-with-child-and-education-graphic-drawings-photo-image_29413812.jpg" className="home-drawers" alt="Drawers" />
              </span>
              <span className="link link-02">Students</span>
            </a>
          </div>
          <div className="panel second">
            <a href="#">
              <span className="inner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-xnBzXHwIVAK5udyaGTPsDv3Upu-5MHcLw&usqp=CAU" className="home-bike" alt="Bike" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-xnBzXHwIVAK5udyaGTPsDv3Upu-5MHcLw&usqp=CAU" className="home-car" alt="Car" />
              </span>
              <span className="link link-03">Students</span>
            </a>
            <a href="#">
              <span className="inner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDW4sIsb72PKkXNg9vpv4dQNYW2IqwpNC2g&usqp=CAU" className="home-piano" alt="Piano" />
              </span>
              <span className="link link-04">Students</span>
            </a>
            <a href="#">
              <span className="inner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pkCuUT1Rbt6EqhAoytN1HmFWfd18h6BAjP9OvyI4XLP6_ybqStu5Xx9FI7SJ2794SCc&usqp=CAU" className="home-boxes" alt="Boxes" />
              </span>
              <span className="link link-05">students</span>
            </a>
          </div>
        </div>
      </div>
      <hr style={{height:'5px'}}/>

      <div className="container">
        <div className="text-container">
          <h2 className="center-text">How do we hire our Faculty?</h2>
          <h5 className="center-text">Specifically, we look for the following unique points.</h5>
        </div>
      </div>

      <div className="bottom-card-container">
        <div className="card-container">
          <h2>Domain Proficiency</h2>
          <img src="https://assets-global.website-files.com/5d69e79b85adc9f70a07cad3/5d69e79b85adc9658807cc18_domain-proficiency-illustration-41.svg" alt="Domain Proficiency Image"></img>
          <p>We ensure that our teachers are experts in their fields with a wealth of experience which makes them an invaluable asset.</p>
        </div>
        <div className="card-container">
          <h2>Selection Criteria</h2>
          <img src="https://assets-global.website-files.com/5d69e79b85adc9f70a07cad3/5d69e79b85adc9353b07cc30_selection-illustration-42.svg" alt="Selection Criteria Image"></img>
          <p>Our interview process is rigorous, our selection criteria is stringent and our evaluation takes into account inter-personal skills, past experience and the ability to adapt and improvise.</p>
        </div>

        <div className="card-container" >
          <h2>Training</h2>
          <img src="https://assets-global.website-files.com/5d69e79b85adc9f70a07cad3/5d69e79b85adc970ce07cc27_Training-illustration-43.svg" alt="Training Image"></img>
          <p>Training Our teachers undergo a minimum of 80 hours of training each year. Our dedicated training and development centre ensures that opportunities are identified for each faculty member to improve themselves and in turn help the organisation.</p>
        </div>
        <div className="card-container">
          <h2>Collaboration</h2>
          <img src="https://assets-global.website-files.com/5d69e79b85adc9f70a07cad3/5d69e79b85adc9839307cc2d_collaboration-illustration-44.svg" alt="Collaboration Image"></img>
          <p>We share knowledge and expertise across our various campuses by exchanging ideas of best practises and conducting training and brainstorming sessions.</p>
        </div>
      </div>

   
      <section>
        <ul className='indexes'>
          {tabs.map((tab, index) => (
            <li
              key={index}
              data-index={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => {setActiveIndex(index); activate(null, index);}}>
              <span>School Executive Management {index + 1}</span>
            </li>
          ))}
        </ul>
        <ul className='tabs' >
          {tabs.map((tab, index) => (
            <Tab key={index} title={tab.title} content={tab.content} image={tab.image} isActive={activeIndex === index} />
          ))}
        </ul>
      </section>

      <div className="footer">
        <img src="https://www.shutterstock.com/image-vector/curved-header-footer-element-260nw-2329747809.jpg" alt="Footer" />
      </div>

{/* ********************************************** */}

      
    </React.Fragment>

        );
      };
      
export default FacultyProfile;

    