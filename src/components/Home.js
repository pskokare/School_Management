import React, { useState } from 'react';
import Footer from './Footer';

import './Home.css';

// First Home Page
import carousel1 from '../images/home1.jpg';
import carouselsub from '../images/mainboy.png';
import carousel2 from '../images/homee.jpg';
import carousel3 from '../images/homea.jpg';
import carousel4 from '../images/homec.jpg';
import carousel5 from '../images/coursal2.jpg';
import carousel6 from '../images/homeb.jpg';

//Second Home Page
import second1 from '../images/card2.svg';
import second2 from '../images/card1.svg';
import second3 from '../images/card3.svg';
import second4 from '../images/card4.svg';


// Four Home Page 
import four1 from '../images/four1.png';
import four2 from '../images/four2.png';
import four3 from '../images/four3.png';
import four4 from '../images/four4.png';
import four5 from '../images/four5.jpg';
import four6 from '../images/four6.jpg';

// Five Home Page
import five1 from '../images/five1.jpg';
import five2 from '../images/five2.jpg';
import five3 from '../images/five3.jpg';
import five4 from '../images/five4.jpg';

//Seven Home Page







const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
  };

  // four Home Page
  const [isHovered, setIsHovered] = useState(false);

  //six Home page
 

 
  return (
    
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? "active" : ""}
          aria-current={activeIndex === 0 ? "true" : "false"}
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? "active" : ""}
          aria-current={activeIndex === 1 ? "true" : "false"}
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          className={activeIndex === 2 ? "active" : ""}
          aria-current={activeIndex === 2 ? "true" : "false"}
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
          <img src={carousel1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
           <img src={carouselsub} className="b-block " alt="..." />
           
          </div>
        </div>
        <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
          <img  src={carousel2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
          <img src={carousel3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className={activeIndex === 3 ? "carousel-item active" : "carousel-item"}>
          <img src={carousel4} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className={activeIndex === 4 ? "carousel-item active" : "carousel-item"}>
          <img src={carousel5} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className={activeIndex === 5 ? "carousel-item active" : "carousel-item"}>
          <img src={carousel6} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

{/* Second Home Page */}
<br></br><br></br>
<p>
<div className="card-container">
  <div className="card" style={{width:'13rem', height:'240px'}}>
  <img  style={{width:'80px',padding:'10px' ,marginLeft:'60px',backgroundColor:'#005AA919', borderRadius:'50%', marginTop:'10px', transition: 'background-color 0.3s ease' }} src={second2} className="card-img-top" alt="..." onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'white')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#005AA919')}/>
  <div className="card-body">
    <h4 style={{fontSize:'18px ', fontFamily:'Poppins, sans-serif'}} className="card-title">Univercity Placement</h4>
    <p style={{fontSize:'12px', fontFamily:'sans-serif'}} className="card-text">Our graduates are sought after by the world’s leading universities year after year due to their all-round credentials and excellent results.</p>

  </div>
</div>
<div className="card" style={{width:'13rem', height:'240px'}}onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'orange')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'initial')}>
<img  style={{width:'80px',padding:'10px' ,marginLeft:'60px',backgroundColor:'#005AA919', borderRadius:'50%', marginTop:'10px', transition: 'background-color 0.3s ease' }} src={second1} className="card-img-top" alt="..." onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'white')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#005AA919')}/>
  <div className="card-body">
    <h4 style={{fontSize:'18px ', fontFamily:'Poppins, sans-serif'}}className="card-title">Result</h4>
    <p style={{fontSize:'12px', fontFamily:'sans-serif'}} className="card-text">GIIS believes that a student can gain success only when the institution facilitates an excellent result driven education system.</p>
   
  </div>
</div>

<div className="card" style={{width:'13rem', height:'240px'}} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#a5cd39')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'initial')}>
<img  style={{width:'80px',padding:'10px' ,marginLeft:'60px',backgroundColor:'#005AA919', borderRadius:'50%', marginTop:'10px', transition: 'background-color 0.3s ease' }} src={second3} className="card-img-top" alt="..." onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'white')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#005AA919')}/>
  <div className="card-body">
    <h4 style={{fontSize:'18px ', fontFamily:'sans-serif'}}className="card-title">Awards</h4>
    <p style={{fontSize:'12px', fontFamily:'sans-serif'}} className="card-text">We have over 350+ awards in education excellence to our creadit</p>
   
  </div>
</div>
<div className="card" style={{width:'13rem'}} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#00adee')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'initial')}>
<img  style={{width:'80px',padding:'10px' ,marginLeft:'60px',backgroundColor:'#005AA919', borderRadius:'50%', marginTop:'10px', transition: 'background-color 0.3s ease' }} src={second4} className="card-img-top" alt="..." onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'white')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#005AA919')}/>
  <div className="card-body">
    <h4 style={{fontSize:'18px ', fontFamily:'sans-serif'}}className="card-title">9 GEMS</h4>
    <p style={{fontSize:'12px', fontFamily:'sans-serif'}} className="card-text">Ours is a dynamic educational framework aimed at fostering all-round development of students through an integrated, holistic approach to learning</p>
   
  </div>
</div>

</div>
<h2 className='heading1' style={{color:'#07294D', fontSize:'24px', fontFamily:'Poppins, sans-serif;' , marginLeft:'50px',marginRight:'600px'}}>Leading International School in Tokyo (K-12) that Provides Quality Education</h2>
<p style={{fontSize:'16px', fontFamily:'Poppins, sans-serif;', color:'#505C7FB3', marginLeft:'50px',marginRight:'600px'}}>As one of the top-rated International schools in Tokyo Japan, GIIS has set benchmarks in learning frameworks, Curricula delivery methodologies and exceptional academic output in International Baccalaureate, Cambridge and CBSE examinations.<br></br><br></br>
Global Indian International School fosters a positive environment wherein students experience top-notch learning and strengthen their personality, values and culture. Our goal at GIIS is to equip students with innovation, leadership and entrepreneurial skills thereby moulding them as future leaders of the world. Global Indian International School chain of private International schools in Tokyo still retains the legacy as the Best school in Japan.
</p>
<h2 className='heading1' style={{color:'#07294D', fontSize:'24px', fontFamily:'Poppins, sans-serif;' , marginLeft:'50px',marginRight:'600px'}}>TOP RANKED CBSE INTERNATIONAL SCHOOL IN TOKYO</h2>
<p style={{fontSize:'16px', fontFamily:'Poppins, sans-serif;', color:'#505C7FB3', marginLeft:'50px',marginRight:'600px'}}>GIIS is a multi-award-winning and progressive international school in Tokyo offering a curriculum that nurtures 21st-century skills. Despite the Covid-19 turmoil, Global Indian International School Tokyo makes history by ranking 9th among 16000 CBSE schools and Rank 1 in Overseas CBSE Schools.</p>
</p>


{/* Third Home Page */}

<h2 className='heading2'style={{color:'#07294D', fontSize:'24px', fontFamily:'Poppins, sans-serif;' , marginLeft:'50px', marginTop:'100px'}}>We have a Bus Service covering different routes below</h2>

{/* Card Third Home Page */}

<div className="card1" style={{width:'17rem', backgroundColor:'#00BFFF0D',color:'#07294d', marginLeft:'50px' }}>
 <div className="card-body">
    <h5 style={{textAlign:'center', fontSize:'18px'}} className="card-title">Route1</h5>
    <p style={{fontSize:'14px',fontFamily:'Poppins, sans-serif;', color:'#07294d'}} className="card-text">Ojima, Kinshicho, Shin Urayasu, Ichinoe, Shinozaki, Toyosu, Funabori, HigashiOjima, Ariake, Harumi, Toyocho</p>
   
  </div>
</div>

<div className="card1" style={{width:'17rem', backgroundColor:'#00BFFF0D',color:'#07294d' }}>
 <div className="card-body">
    <h5 style={{textAlign:'center', fontSize:'18px'}} className="card-title">Route2</h5>
    <p style={{fontSize:'14px',fontFamily:'Poppins, sans-serif;', color:'#07294d'}} className="card-text">Ojima, Kinshicho, Shin Urayasu, Ichinoe, Shinozaki, Toyosu, Funabori, HigashiOjima, Ariake, Harumi, Toyocho</p>
   
  </div>
</div>
<div className="card1" style={{width:'17rem', backgroundColor:'#00BFFF0D',color:'#07294d' }}>
 <div className="card-body">
    <h5 style={{textAlign:'center'}} className="card-title">Route3</h5>
    <p style={{fontSize:'14px',fontFamily:'Poppins, sans-serif;', color:'#07294d'}} className="card-text">Ojima, Kinshicho, Shin Urayasu, Ichinoe, Shinozaki, Toyosu, Funabori, HigashiOjima, Ariake, Harumi, Toyocho</p>
   
  </div>
</div>
<div className="card1" style={{width:'17rem', backgroundColor:'#00BFFF0D',color:'#07294d' }}>
 <div className="card-body">
    <h5 style={{textAlign:'center', fontSize:'18px'}} className="card-title">Route4</h5>
    <p style={{fontSize:'14px',fontFamily:'Poppins, sans-serif;', color:'#07294d'}} className="card-text">Ojima, Kinshicho, Shin Urayasu, Ichinoe, Shinozaki, Toyosu, Funabori, HigashiOjima, Ariake, Harumi, Toyocho</p>
   
  </div>
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

{/* Four Home Page */}

<h2 style={{color:'#07294D', fontSize:'24px', fontFamily:'Poppins, sans-serif;' , marginLeft:'150px', marginTop:'100px', marginBottom:'50px',}}>STAGES OF THE JOURNEY</h2>
<div style={{marginLeft:'150px'}} className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img style={{width:'300px'}} src={four1} alt="...." />
      {isHovered && <div className="hover-text" style={{width:'300px',height:'300px'}}>
        
        <h2 style={{textAlign:'center', fontSize:'24px',fontFamily:'Poppins, sans-serif', marginTop:'30px'}}>Pre-K Year-2</h2>
        <p style={{textAlign:'justify',fontFamily:'Poppins, sans-serif;', fontSize:'14px'}}>We create a sense of belonging and encourage our young people to develop independence within a supportive child-centred environment.</p>
        <button className='btn btn-light' style={{backgroundColor:' rgba(0, 56, 147, 0.7)',marginLeft:'80px',fontFamily:'Poppins, sans-serif;',color:'white'}}>LERAN MORE</button>
        </div>}
    </div>


    <div style={{marginLeft:'40px'}} className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img style={{width:'300px'}} src={four2} alt="...." />
      {isHovered && <div className="hover-text" style={{width:'300px',height:'300px'}}>
        
        <h2 style={{textAlign:'center', fontSize:'24px',fontFamily:'Poppins, sans-serif', marginTop:'30px'}}>Years 3 & 4</h2>
        <p style={{textAlign:'justify',fontFamily:'Poppins, sans-serif;', fontSize:'14px'}}>Students are encouraged to find their voice and gather skills that allow them to effectively express their ideas, opinions and thoughts.</p>
        <button className='btn btn-light' style={{backgroundColor:' rgba(0, 56, 147, 0.7)',marginLeft:'80px',fontFamily:'Poppins, sans-serif;',color:'white'}}>LERAN MORE</button>
        </div>}
    </div>

    <div style={{marginLeft:'40px'}} className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img style={{width:'300px'}} src={four3} alt="...." />
      {isHovered && <div className="hover-text" style={{width:'300px',height:'300px'}}>
        
        <h2 style={{textAlign:'center', fontSize:'24px',fontFamily:'Poppins, sans-serif', marginTop:'30px'}}>Years 5 & 6</h2>
        <p style={{textAlign:'justify',fontFamily:'Poppins, sans-serif;', fontSize:'14px'}}>Your child’s passions and interests are explored through several real-world learning opportunities inside and outside the College community.</p>
        <button className='btn btn-light' style={{backgroundColor:' rgba(0, 56, 147, 0.7)',marginLeft:'80px',fontFamily:'Poppins, sans-serif;',color:'white'}}>LERAN MORE</button>
        </div>}
    </div>

    <div style={{marginTop:'40px', marginLeft:'150px'}} className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img style={{width:'300px'}} src={four4} alt="...." />
      {isHovered && <div className="hover-text" style={{width:'300px',height:'300px'}}>
        
        <h2 style={{textAlign:'center', fontSize:'24px',fontFamily:'Poppins, sans-serif', marginTop:'30px'}}>Years 7 & 8</h2>
        <p style={{textAlign:'justify',fontFamily:'Poppins, sans-serif;', fontSize:'14px'}}>Aligning with the core curriculum, 21st century capabilities are taught through tailored subjects and designed to help students confidently navigate the VUCA world.</p>
        <button className='btn btn-light' style={{backgroundColor:' rgba(0, 56, 147, 0.7)',marginLeft:'80px',fontFamily:'Poppins, sans-serif;',color:'white'}}>LERAN MORE</button>
        </div>}
    </div>

    <div style={{marginLeft:'40px'}} className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img style={{width:'300px'}} src={four5} alt="...." />
      {isHovered && <div className="hover-text" style={{width:'300px',height:'300px'}}>
        
        <h2 style={{textAlign:'center', fontSize:'24px',fontFamily:'Poppins, sans-serif', marginTop:'30px'}}>Years 9 & 10</h2>
        <p style={{textAlign:'justify',fontFamily:'Poppins, sans-serif;', fontSize:'14px'}}>A personalised pathway is available where student choice and agency provides a strong foundation for their senior years.</p>
        <button className='btn btn-light' style={{backgroundColor:' rgba(0, 56, 147, 0.7)',marginLeft:'80px',fontFamily:'Poppins, sans-serif;',color:'white'}}>LERAN MORE</button>
        </div>}
    </div>

    <div style={{marginLeft:'40px'}} className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img style={{width:'300px'}} src={four6} alt="...." />
      {isHovered && <div className="hover-text" style={{width:'300px',height:'300px'}}>
        
        <h2 style={{textAlign:'center', fontSize:'24px',fontFamily:'Poppins, sans-serif', marginTop:'30px'}}>Years 11 & 12
</h2>
        <p style={{textAlign:'justify',fontFamily:'Poppins, sans-serif;', fontSize:'14px'}}>Our ‘ATAR Plus’ approach brokers individual pathways where success is measured individually and many unique opportunities are available.</p>
        <button className='btn btn-light' style={{backgroundColor:' rgba(0, 56, 147, 0.7)',marginLeft:'80px',fontFamily:'Poppins, sans-serif;',color:'white'}}>LERAN MORE</button>
        </div>}
    </div>


    {/* Five Home Page */}

    <h2 style={{color:'#07294D', fontSize:'24px', fontFamily:'Poppins, sans-serif;' , marginLeft:'150px', marginTop:'100px'}}>School Levels</h2>

    <div class="card3" style={{ width: '14.5rem', marginLeft:'150px', marginTop:'50px' }}>
  <img style={{ width: '215.83px', height: '161.88px' }} src={five1} class="card-img-top" alt="..." />
  <div class="card-body">
    <h4 style={{font:'12px',fontFamily:'Poppins, sans-serif',color:'#005AA9'}} className="titlename">Pre Primary</h4>
    <p style={{color:'#28333399', fontSize:'12px'}} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div class="card3" style={{ width: '14.5rem', marginLeft:'20px' , marginTop:'50px'}}>
  <img style={{ width: '215.83px', height: '161.88px' }} src={five2} class="card-img-top" alt="..." />
  <div class="card-body">
    <h4 style={{font:'12px',fontFamily:'Poppins, sans-serif',color:'#005AA9'}} className="titlename">Primary School</h4>
    <p style={{color:'#28333399', fontSize:'12px'}} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div class="card3" style={{ width: '14.5rem', marginLeft:'20px' , marginTop:'50px'}}>
  <img style={{ width: '215.83px', height: '161.88px' }} src={five3} class="card-img-top" alt="..." />
  <div class="card-body">
    <h4 style={{font:'12px',fontFamily:'Poppins, sans-serif',color:'#005AA9'}} className="titlename">Secondary School</h4>
    <p style={{color:'#28333399', fontSize:'12px'}} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div class="card3" style={{ width: '14.5rem', marginLeft:'20px', marginTop:'50px' }}>
  <img style={{ width: '215.83px', height: '161.88px' }} src={five4} class="card-img-top" alt="..." />
  <div class="card-body">
    <h4 style={{font:'12px',fontFamily:'Poppins, sans-serif',color:'#005AA9'}} className="titlename">High School</h4>
    <p style={{color:'#28333399', fontSize:'12px'}} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

{/* Six HOme Page */}

<div className="acreditions"  style={{marginLeft:'50px'}}>
   
      <img src="https://www.british-school.org/wp-content/uploads/2022/06/nat-1.png" alt="" data-no-retina />
      <h4>60</h4>
      <span>NATIONALITIES</span>
    </div>

    <div className="acreditions" >
      <img src="https://www.british-school.org/wp-content/uploads/2022/06/students.png" alt="" data-no-retina />
      <h4>8:1</h4>
      <span>STUDENT TEACHER RATIO</span>
      
    </div>

    <div className="acreditions">
  
      <img src="https://www.british-school.org/wp-content/uploads/2022/06/students2.png" alt="" data-no-retina />
      <h4>1,300</h4>
      <span>STUDENTS</span>
    </div>


    <div className="acreditions" style={{marginLeft:'50px', marginTop:'100px'}}>
      <img src="https://www.british-school.org/wp-content/uploads/2022/06/history.png" alt="" data-no-retina />
      <h4>60</h4>
      <span>
        "YEARS OF HISTORY"
        <br />
        "AND TRADITION"
      </span>
    </div>

    <div className="acreditions"  style={{marginLeft:'100px',marginTop:'100px'}}>
   
      <img src="https://www.british-school.org/wp-content/uploads/2022/06/nat-1.png" alt="" data-no-retina />
      <h4>60</h4>
      <span>NATIONALITIES</span>
    </div>


    <div className="acreditions" style={{marginLeft:'100px', marginTop:'100px'}}>
     
      <img src="https://www.british-school.org/wp-content/uploads/2022/06/acr.png" alt="" data-no-retina />
      <h4 className="mb-1">Top 5</h4>
      <span> Student nationalities </span>
      <p> Indian, British, South Korean, American & Japanese </p>
    </div>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br>


{/* Footer Home PAge */}

<Footer></Footer>


   



    </div>
  );
};

export default Home;
