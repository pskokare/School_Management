import React from 'react';
import './MissionVision.css';


const MissionVision = () => {
  return (
    <div>
    <div className="container-fluid">
  <video
    src={`${process.env.PUBLIC_URL}/Navbar/video2.mp4`}
    className="d-block align-top image"
    alt="Logo"
    style={{ height: "600px", width: "1200px" }}
    controls // Add controls for playback
  />
  <div className="aboutmiddle">
    <div className="abouttext">
      <h2>GIIS - VISION, MISSION & CORE VALUES</h2>
      <p>Our vision is to become a global role model for teaching and learning.</p>
    </div>
  </div>
</div>


      <br/><br/><br/><br/>

      {/* First Mission Vision Section */}
      <div className="gmp-2 mission-wrp color" style={{paddingTop:'50px', paddingBottom:'100px', backgroundColor:'#fdf8fb'}}>
        <div className="mission-col hor-wrp w-row">
          <div className="column-padding w-col w-col-5">
            <img
              src="https://assets-global.website-files.com/5d8b6753af3a4fd1a3d2870a/5f6b371a2c8d3b7d9e3f5ac2_tokyo-home-cover-p-800-compressed.jpeg"
              loading="lazy"
              alt=""
              className="mission-img"
            />
          </div>
          <div className="column-112 w-col w-col-7">
            <h2 className="heading-38" style={{marginRight:'50px'}}>Committed to Overall Excellence</h2>
            <p className="gmp-para-3"  style={{marginRight:'50px'}}>
              "The cornerstone of GIIS is our deep commitment to excellence. We employ ethical engagements and futuristic techniques to provide exceptional to our global learners."
            </p>
            <div className="_40px-padding-3 desktop-hide-new"></div>
          </div>
        </div>
      </div>

    

      {/* Second Mission Vision Section */}
      <div className="gmp-2 mission-wrp color" style={{paddingTop:'50px', paddingBottom:'100px',backgroundColor:'#f3f8f8'}}>
        <div className="mission-col hor-wrp w-row">
          <div className="column-112 w-col w-col-7">
            <h2 className="heading-38" style={{marginLeft:'50px'}}>Our Vision</h2>
            <p className="gmp-para-3" style={{marginLeft:'50px'}}>
            Since our founding, our goal has been to become a global role model for teaching and learning. We aspire to prepare students for moral, healthy, productive, and successful lives.
            </p>
            <div className="_40px-padding-3 desktop-hide-new"></div>
          </div>
          <div className="column-padding w-col w-col-5">
            <img
              src="https://assets-global.website-files.com/5d8b6753af3a4fd1a3d2870a/621f04a4b7c466ca7ac2c518_Tokyo-secondary-cover.jpg"
              loading="lazy"
              alt=""
              className="mission-img"
            />
          </div>
        </div>
      </div>



      {/* Third Mission Vision Section */}
      <div className="gmp-2 mission-wrp color" style={{paddingTop:'50px', paddingBottom:'100px', backgroundColor:'#fdf8fb'}}>
        <div className="mission-col hor-wrp w-row">
          <div className="column-padding w-col w-col-5">
            <img
              src="https://assets-global.website-files.com/5d8b6753af3a4fd1a3d2870a/621f18c76891eac0481f572d_tokyo-faculty-cover.jpg"
              loading="lazy"
              alt=""
              className="mission-img"
            />
          </div>
          <div className="column-112 w-col w-col-7">
            <h2 className="heading-38" style={{marginRight:'50px'}}>Our Mission</h2>
            <p className="gmp-para-3"  style={{marginRight:'50px'}}>
            We strive to embody our vision by holistically fostering our students in mind, body, and character; empower them to confidently explore their interests and put their skills to meaningful use.
            </p>
            <div className="_40px-padding-3 desktop-hide-new"></div>
          </div>
        </div>
      </div>

    

      {/* Four Mission Vision Section */}
      <div className="gmp-2 mission-wrp color" style={{paddingTop:'50px', paddingBottom:'100px',backgroundColor:'#f3f8f8'}}>
        <div className="mission-col hor-wrp w-row">
          <div className="column-112 w-col w-col-7">
            <h2 className="heading-38" style={{marginLeft:'50px'}}>Our Core Philosophy</h2>
            <p className="gmp-para-3" style={{marginLeft:'50px'}}>
            At GIIS, we bring our mission and vision to life by following the teachings of Mahatma Gandhi. It’s how we nurture students’ growth to prepare them for college and beyond.
            <br /><br></br>
            <p>Everything we do is driven by these intrinsic beliefs:</p>
            <ul>
              <li>Manage with Information and Metrics</li>
              <li>Agility and Adaptability</li>
              <li>Honesty, Integrity and Ethical Practices</li>
              <li>Attitude before Knowledge</li>
              <li>Teamwork</li>
              <li>Mentor, Coach and Make a Difference</li>
              <li>Ambience for Learning</li>
            </ul>
           
            </p>
            <div className="_40px-padding-3 desktop-hide-new"></div>
          </div>
          <div className="column-padding w-col w-col-5">
            <img
              src="https://assets-global.website-files.com/5d8b6753af3a4fd1a3d2870a/621f6e22c02b8ae69901ba52_610ad8eef88eb1ae6f810e73_IMG_1314-p-500.jpeg"
              loading="lazy"
              alt=""
              className="mission-img"
            />
          </div>
        </div>
      </div>

      {/* FIve Mission Vision Section */}
      <div className="gmp-2 mission-wrp color" style={{paddingTop:'50px', paddingBottom:'100px', backgroundColor:'#fdf8fb'}}>
        <div className="mission-col hor-wrp w-row">
          <div className="column-padding w-col w-col-5">
            <img
              src="https://assets-global.website-files.com/5d8b6753af3a4fd1a3d2870a/621f180a77fd4e9f334a03e6_tokyo-CLS-cover.jpg"
              loading="lazy"
              alt=""
              className="mission-img"
            />
          </div>
          <div className="column-112 w-col w-col-7">
            
            <p className="gmp-para-3"  style={{marginRight:'50px'}}>
            A dedicated Mahatma Gandhi Centre for Universal Values in all our global campuses serves as an institutional lodestar for the values and beliefs of the Mahatma, and its relevance to today's world.<br></br>
            Through the centre, we ensure that our students get valuable insights into the teachings of Mahatma Gandhi, as well, we make an active effort to imbibe these values into our students.
            </p>
            <div className="_40px-padding-3 desktop-hide-new"></div>
          </div>
        </div>
      </div>

    

      {/* Six Mission Vision Section */}
      <div className="gmp-2 mission-wrp color" style={{paddingTop:'50px', paddingBottom:'100px',backgroundColor:'#f3f8f8'}}>
        <div className="mission-col hor-wrp w-row">
          <div className="column-112 w-col w-col-7">
            <h2 className="heading-38" style={{marginLeft:'50px'}}>Quality Policy</h2>
            <p className="gmp-para-3" style={{marginLeft:'50px'}}>
            At GIIS, we take our values, vision, and mission seriously.  To this end, we created the following framework that helps us stay aligned with our vision and mission.
          <ul>
            <li>Adherence to a Quality Management System</li>
            <li>Sharing of Best Practices</li>
            <li>Actionable Feedback based on Stakeholder Satisfaction</li>
            <li>Surveys</li>
          </ul>
            </p>
            <div className="_40px-padding-3 desktop-hide-new"></div>
          </div>
          <div className="column-padding w-col w-col-5">
            <img
              src="https://assets-global.website-files.com/5d8b6753af3a4fd1a3d2870a/621f6dc0cf95f1e4861107fa_5f473dae05bd5016eaeb0b7c_tokyo-faculty-cover-p-1080.jpeg"
              loading="lazy"
              alt=""
              className="mission-img"
            />
          </div>
        </div>
      </div>

      {/* Seven Mission Vision Section */}
      <div className="gmp-2 mission-wrp color" style={{paddingTop:'50px', paddingBottom:'100px', backgroundColor:'#fdf8fb'}}>
        <div className="mission-col hor-wrp w-row">
          <div className="column-padding w-col w-col-5">
            <img
              src="https://assets-global.website-files.com/5d8b6753af3a4fd1a3d2870a/601aa878ba21952420b89125_tokyo-scholarships.jpg"
              loading="lazy"
              alt=""
              className="mission-img"
            />
          </div>
          <div className="column-112 w-col w-col-7">
            <h2 className="heading-38" style={{marginRight:'50px'}}>Quality Objectives</h2>
            <p className="gmp-para-3"  style={{marginRight:'50px'}}>
            As one of the leading private schools, the values we instill in our students are the same values that propel each member of our faculty. We live in alignment with our vision, mission, core values, quality policy, and quality objectives to get closer to our vision of becoming an international standard for learning.
            </p>
            <div className="_40px-padding-3 desktop-hide-new"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MissionVision;
