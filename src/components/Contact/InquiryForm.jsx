
import React, { useState } from 'react';
import './InquiryForm.css'; // Import CSS file for styling
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsFillStopwatchFill } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";
import { MdPhoneMissed } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { IoSchoolSharp } from "react-icons/io5";


const currentYear = new Date().getFullYear();

  const iconStyle = {
    marginRight: '10px',
    color: '#fff',
  };
function YourComponent() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (campus) => {
    setSelectedButton(campus);
  };

  const [showMessage, setShowMessage] = useState(false);

  const handleClickIcon = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
  };

  const renderPageContent = () => {
    // Based on the selectedButton value, return the corresponding content
    switch (selectedButton) {
      case 'Nishi Kasai Campus':
        return (
              <React.Fragment>
                <div className="text-container">
                  <h3 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '0px' }}>Global Indian International School (GIIS) Nishi Kasai Campus</h3>
                </div>
                <div className="button-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div>
                    <h5 style={{ marginBottom: '10px' }}>It would be our pleasure to know and answer your requirements.<br /> Kindly fill in the enquiry form to help you out at the earliest.</h5>     {/* Form */}
          <hr style={{height:'5px'}}></hr>
            <form className="inquiry-form">
            <div className="form-group">
              <div className="oval-inputs">
                <div className="oval-input">
                  <label htmlFor="ovalField1" className="oval-label" style={{textAlign:'left'}}><b>First Name</b></label>
                  <input type="text" id="ovalField1" name="ovalField1" className="oval-field" placeholder="Enter first name" />
                </div>
                <div className="oval-input">
                  <label htmlFor="ovalField2" className="oval-label"style={{textAlign:'left'}}><b>Last Name</b></label>
                  <input type="text" id="ovalField2" name="ovalField2" className="oval-field" placeholder="Enter last name" />
                </div>
                <div className="oval-input">
                  <label htmlFor="ovalField3" className="oval-label"style={{textAlign:'left'}}><b>Email</b></label>
                  <input type="text" id="ovalField3" name="ovalField3" className="oval-field" placeholder="abc@gmail.com" />
                </div>
              </div>
            </div><br></br>
            <div className="form-group">
              <div className="oval-inputs">
                <div className="oval-input">
                 <label htmlFor="phone" className="oval-label" style={{textAlign:'left'}}><b>Phone Number</b></label>
                  <div className="phone-input">
                    <select id="countryCode" name="countryCode" className="country-code" style={{height:'35px', borderRadius:'20px'}}>
                      <option value="91" style={{textAlign:'left'}}>India (+91)</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <input type="text" id="phone" name="phone" className="phone-field" placeholder="Enter phone number" />
                  </div>
                </div>
                <div className="oval-input">
                <label htmlFor="passportCountry" className="oval-label"style={{textAlign:'left'}}><b>Child's Passport Country</b></label>
                <div className="oval-dropdown">
                 <select id="passportCountry" name="passportCountry" className="passport-country" >
                  <option>Enter Country</option>
                 <option>India</option>
                 <option>Shrilanka</option>
                 <option>Japan</option>
                 <option>America</option>
          
                   </select>
                 </div>
                 
               </div>
              </div>
            </div><br></br>
            <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="oval-input">
                <label htmlFor="grade" className="oval-label"style={{textAlign:'left'}}><b>Seeking Admission to Grade*</b></label>
                <select id="grade" name="grade" className="oval-field" placeholder="please select" style={{width:'300px'}}>
                <option>please select</option>
                  <option>Nursery</option>
                  <option>LKG</option>
                  <option>HKG</option>
                  <option>Grade1</option>
                  <option>Grade2</option>
                  <option>Grade3</option>
                  <option>Grade4</option>
                  <option>Grade5</option>
                  <option>Grade6</option>
                  <option>Grade7</option>
                  <option>Grade8</option>
                  <option>Grade9</option>
                  <option>Grade10</option>
                 
          
                </select>
              </div>
              <div className="oval-input">
                <label htmlFor="curricula" className="oval-label"style={{textAlign:'left'}}><b>Interested Curricula*</b></label>
                <select id="curricula" name="curricula" className="oval-field" placeholder="please select" style={{width:'300px'}}>
                  <option>please select</option>
                <option>GMP</option>
                <option>CBSE</option>
                <option>IB PYP</option>
                <option>CLSP</option>
                <option>CLSP</option>
                <option>CLSP</option>
                <option>CLSP</option>
           </select>
            </div>
            </div><br></br>
            <textarea style={{width:'100%'}}></textarea><br></br>
            <button type="submit" className="oval-button">Send My Message</button>
          </form>
          
            </div>
              <div style={{ position: 'relative' }}>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-3538c484bb410d7005adb1696576a706-lq" alt="Image" style={{ width: '600px', height: '450px', borderRadius: '20px', marginLeft: '150px', }} />
                  <a href="https://youtu.be/30GnbQ3GEWM?si=5KOtUng5-ivaK37H" className="watch-video-button">
                    <i className="fas fa-play"><FaRegCirclePlay /></i> Watch Video
                    </a>
                  </div>
                </div>    
                <hr style={{ marginTop: '0px', height: '5px' }}></hr>
          
                 <div className="additional-info" style={{textAlign:'center'}}>
                 <p>GIIS, with its humble beginning in 2006, is known for its reputation in Tokyo, which caters to the education demands of the 21st century. The school is located in a serene atmosphere and is well connected to the central city. The school offers the best curriculum that moulds students into well-groomed citizens of the future. At GIIS Tokyo, our priority is to a parent’s time and  the seamless, admission process. Get details via our school enquiry form and join us in nurturing growth and fostering learning excellence.<br></br><br></br>
          
                  Through the Global Indian International School enquiry, you can fill out the school admission enquiry form to get the appropriate information. All the queries or redresses are taken care of by the professional admissions team who are just a call away or you can also reach out to us through the registered email.<br></br><br></br>
                  At GIIS Tokyo we have a well-established school admission enquiry cell that guides applicants through the entire admission process. Our expert counsellors are delighted to answer all your queries and provide the required information. Discover excellence in education at GIIS Tokyo. For inquiries, access our school enquiry form and help build a bright future for your child!</p>
                </div>
                <hr style={{ marginTop: '0px', height: '5px' }}></hr>
                <div className="additional-message" style={{ marginLeft: '10px',color:'black'}}>
                <h5>This is an additional text message.</h5>
               </div>
              <div className="oval-shape" style={{ backgroundColor: 'lightblue', borderRadius: '20px', textAlign: 'center', padding: '10px', display: 'inline-block' }}>
               <p style={{ margin: '0', fontWeight: 'bold' }}>CBSE</p>
             </div>
             
          
             <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* First Circular Border */}
            <div className="circular-border1" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div>
                <BsFillStopwatchFill />
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>9:00am to 3:30pm</p>
                <p style={{ fontSize: '12px', marginBottom: '5px' }}>(Monday to Friday)</p>
              </div>
            </div>
          
            {/* Second Circular Border */}
            <div className="circular-border2" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div>
                <IoMdMailUnread />
                <p style={{ fontSize: '10px', fontWeight: 'bold' }}>tokyo@globalindianschool.org</p>
              </div>
            </div>
          
            {/* Third Circular Border */}
            <div className="circular-border3" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div>
              <MdPhoneMissed />
          
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <span>(+81) 80 3609 1648</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>(+81) 35696 7141</span>
                </div>
              </div>
            </div>
          </div>
          
               
              </React.Fragment>
              );
              //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case 'Higashi Kasai Campus':
        return (
          <React.Fragment>
          <div className="text-container">
            <h3 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '0px' }}>Global Indian International School (GIIS) Nishi Kasai Campus</h3>
          </div>
          <div className="button-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <h5 style={{ marginBottom: '10px' }}>It would be our pleasure to know and answer your requirements.<br /> Kindly fill in the enquiry form to help you out at the earliest.</h5>     {/* Form */}
    <hr style={{height:'5px'}}></hr>
      <form className="inquiry-form">
      <div className="form-group">
        <div className="oval-inputs">
          <div className="oval-input">
            <label htmlFor="ovalField1" className="oval-label" style={{textAlign:'left'}}><b>First Name</b></label>
            <input type="text" id="ovalField1" name="ovalField1" className="oval-field" placeholder="Enter first name" />
          </div>
          <div className="oval-input">
            <label htmlFor="ovalField2" className="oval-label"style={{textAlign:'left'}}><b>Last Name</b></label>
            <input type="text" id="ovalField2" name="ovalField2" className="oval-field" placeholder="Enter last name" />
          </div>
          <div className="oval-input">
            <label htmlFor="ovalField3" className="oval-label"style={{textAlign:'left'}}><b>Email</b></label>
            <input type="text" id="ovalField3" name="ovalField3" className="oval-field" placeholder="abc@gmail.com" />
          </div>
        </div>
      </div><br></br>
      <div className="form-group">
        <div className="oval-inputs">
          <div className="oval-input">
           <label htmlFor="phone" className="oval-label" style={{textAlign:'left'}}><b>Phone Number</b></label>
            <div className="phone-input">
              <select id="countryCode" name="countryCode" className="country-code" style={{height:'35px', borderRadius:'20px'}}>
                <option value="91" style={{textAlign:'left'}}>India (+91)</option>
                {/* Add more country codes as needed */}
              </select>
              <input type="text" id="phone" name="phone" className="phone-field" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="oval-input">
          <label htmlFor="passportCountry" className="oval-label"style={{textAlign:'left'}}><b>Child's Passport Country</b></label>
          <div className="oval-dropdown">
           <select id="passportCountry" name="passportCountry" className="passport-country" >
            <option>Enter Country</option>
           <option>India</option>
           <option>Shrilanka</option>
           <option>Japan</option>
           <option>America</option>
    
             </select>
           </div>
           
         </div>
        </div>
      </div><br></br>
      <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="oval-input">
          <label htmlFor="grade" className="oval-label"style={{textAlign:'left'}}><b>Seeking Admission to Grade*</b></label>
          <select id="grade" name="grade" className="oval-field" placeholder="please select" style={{width:'300px'}}>
          <option>please select</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>HKG</option>
            <option>Grade1</option>
            <option>Grade2</option>
            <option>Grade3</option>
            <option>Grade4</option>
            <option>Grade5</option>
            <option>Grade6</option>
            <option>Grade7</option>
            <option>Grade8</option>
            <option>Grade9</option>
            <option>Grade10</option>
           
    
          </select>
        </div>
        <div className="oval-input">
          <label htmlFor="curricula" className="oval-label"style={{textAlign:'left'}}><b>Interested Curricula*</b></label>
          <select id="curricula" name="curricula" className="oval-field" placeholder="please select" style={{width:'300px'}}>
            <option>please select</option>
          <option>GMP</option>
          <option>CBSE</option>
          <option>IB PYP</option>
          <option>CLSP</option>
          <option>CLSP</option>
          <option>CLSP</option>
          <option>CLSP</option>
     </select>
      </div>
      </div><br></br>
      <textarea style={{width:'100%'}}></textarea><br></br>
      <button type="submit" className="oval-button">Send My Message</button>
    </form>
    
      </div>
        <div style={{ position: 'relative' }}>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrM1i1LJGRYGZK7uqDqFz8OweuhdoHyFa2DMoa4NHDWpZvBFH0" alt="Image" style={{ width: '600px', height: '450px', borderRadius: '20px', marginLeft: '150px', }} />
            <a href="https://youtu.be/30GnbQ3GEWM?si=5KOtUng5-ivaK37H" className="watch-video-button">
              <i className="fas fa-play"><FaRegCirclePlay /></i> Watch Video
              </a>
            </div>
          </div>    
          <hr style={{ marginTop: '0px', height: '5px' }}></hr>
    
           <div className="additional-info" style={{textAlign:'center'}}>
           <p>GIIS, with its humble beginning in 2006, is known for its reputation in Tokyo, which caters to the education demands of the 21st century. The school is located in a serene atmosphere and is well connected to the central city. The school offers the best curriculum that moulds students into well-groomed citizens of the future. At GIIS Tokyo, our priority is to a parent’s time and  the seamless, admission process. Get details via our school enquiry form and join us in nurturing growth and fostering learning excellence.<br></br><br></br>
    
            Through the Global Indian International School enquiry, you can fill out the school admission enquiry form to get the appropriate information. All the queries or redresses are taken care of by the professional admissions team who are just a call away or you can also reach out to us through the registered email.<br></br><br></br>
            At GIIS Tokyo we have a well-established school admission enquiry cell that guides applicants through the entire admission process. Our expert counsellors are delighted to answer all your queries and provide the required information. Discover excellence in education at GIIS Tokyo. For inquiries, access our school enquiry form and help build a bright future for your child!</p>
            <h5 style={{color:'black'}}>SCHOOL ADMISSION ENQUIRY FORM</h5>
              <p>At GIIS Tokyo we have a well-established school admission enquiry cell that guides applicants through the entire admission process. Our expert counselors are always delighted to answer all your queries and provide the required information.</p>


          </div>
          <hr style={{ marginTop: '0px', height: '5px' }}></hr>
          <div className="additional-message" style={{ marginLeft: '10px',color:'black'}}>
          <h5>This is an additional text message.</h5>
         </div>
        <div className="oval-shape" style={{ backgroundColor: 'lightblue', borderRadius: '20px', textAlign: 'center', padding: '10px', display: 'inline-block' }}>
         <p style={{ margin: '0', fontWeight: 'bold' }}>CBSE</p>
       </div>
       
    
       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* First Circular Border */}
      <div className="circular-border1" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
          <BsFillStopwatchFill />
          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>9:00am to 3:30pm</p>
          <p style={{ fontSize: '12px', marginBottom: '5px' }}>(Monday to Friday)</p>
        </div>
      </div>
    
      {/* Second Circular Border */}
      <div className="circular-border2" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
          <IoMdMailUnread />
          <p style={{ fontSize: '10px', fontWeight: 'bold' }}>tokyo@globalindianschool.org</p>
        </div>
      </div>
    
      {/* Third Circular Border */}
      <div className="circular-border3" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
        <MdPhoneMissed />
    
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <span>(+81) 80 3609 1648</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>(+81) 35696 7141</span>
          </div>
        </div>
      </div>
    </div>
    
         
        </React.Fragment>
        );
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case 'Seishincho Campus':
        return (
          <React.Fragment>
          <div className="text-container">
            <h3 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '0px' }}>Global Indian International School (GIIS) Nishi Kasai Campus</h3>
          </div>
          <div className="button-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <h5 style={{ marginBottom: '10px' }}>It would be our pleasure to know and answer your requirements.<br /> Kindly fill in the enquiry form to help you out at the earliest.</h5>     {/* Form */}
    <hr style={{height:'5px'}}></hr>
      <form className="inquiry-form">
      <div className="form-group">
        <div className="oval-inputs">
          <div className="oval-input">
            <label htmlFor="ovalField1" className="oval-label" style={{textAlign:'left'}}><b>First Name</b></label>
            <input type="text" id="ovalField1" name="ovalField1" className="oval-field" placeholder="Enter first name" />
          </div>
          <div className="oval-input">
            <label htmlFor="ovalField2" className="oval-label"style={{textAlign:'left'}}><b>Last Name</b></label>
            <input type="text" id="ovalField2" name="ovalField2" className="oval-field" placeholder="Enter last name" />
          </div>
          <div className="oval-input">
            <label htmlFor="ovalField3" className="oval-label"style={{textAlign:'left'}}><b>Email</b></label>
            <input type="text" id="ovalField3" name="ovalField3" className="oval-field" placeholder="abc@gmail.com" />
          </div>
        </div>
      </div><br></br>
      <div className="form-group">
        <div className="oval-inputs">
          <div className="oval-input">
           <label htmlFor="phone" className="oval-label" style={{textAlign:'left'}}><b>Phone Number</b></label>
            <div className="phone-input">
              <select id="countryCode" name="countryCode" className="country-code" style={{height:'35px', borderRadius:'20px'}}>
                <option value="91" style={{textAlign:'left'}}>India (+91)</option>
                {/* Add more country codes as needed */}
              </select>
              <input type="text" id="phone" name="phone" className="phone-field" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="oval-input">
          <label htmlFor="passportCountry" className="oval-label"style={{textAlign:'left'}}><b>Child's Passport Country</b></label>
          <div className="oval-dropdown">
           <select id="passportCountry" name="passportCountry" className="passport-country" >
            <option>Enter Country</option>
           <option>India</option>
           <option>Shrilanka</option>
           <option>Japan</option>
           <option>America</option>
    
             </select>
           </div>
           
         </div>
        </div>
      </div><br></br>
      <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="oval-input">
          <label htmlFor="grade" className="oval-label"style={{textAlign:'left'}}><b>Seeking Admission to Grade*</b></label>
          <select id="grade" name="grade" className="oval-field" placeholder="please select" style={{width:'300px'}}>
          <option>please select</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>HKG</option>
            <option>Grade1</option>
            <option>Grade2</option>
            <option>Grade3</option>
            <option>Grade4</option>
            <option>Grade5</option>
            <option>Grade6</option>
            <option>Grade7</option>
            <option>Grade8</option>
            <option>Grade9</option>
            <option>Grade10</option>
           
    
          </select>
        </div>
        <div className="oval-input">
          <label htmlFor="curricula" className="oval-label"style={{textAlign:'left'}}><b>Interested Curricula*</b></label>
          <select id="curricula" name="curricula" className="oval-field" placeholder="please select" style={{width:'300px'}}>
            <option>please select</option>
          <option>GMP</option>
          <option>CBSE</option>
          <option>IB PYP</option>
          <option>CLSP</option>
          <option>CLSP</option>
          <option>CLSP</option>
          <option>CLSP</option>
     </select>
      </div>
      </div><br></br>
      <textarea style={{width:'100%'}}></textarea><br></br>
      <button type="submit" className="oval-button">Send My Message</button>
    </form>
    
      </div>
        <div style={{ position: 'relative' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn31_F2sC66deNfc1VuKuGf45OvvI7Uv_NpyJ5XcidOaCnkH0Z" alt="Image" style={{ width: '600px', height: '450px', borderRadius: '20px', marginLeft: '150px', }} />
            <a href="https://youtu.be/30GnbQ3GEWM?si=5KOtUng5-ivaK37H" className="watch-video-button">
              <i className="fas fa-play"><FaRegCirclePlay /></i> Watch Video
              </a>
            </div>
          </div>    
          <hr style={{ marginTop: '0px', height: '5px' }}></hr>
    
           <div className="additional-info" style={{textAlign:'center'}}>
           <p>GIIS, with its humble beginning in 2006, is known for its reputation in Tokyo, which caters to the education demands of the 21st century. The school is located in a serene atmosphere and is well connected to the central city. The school offers the best curriculum that moulds students into well-groomed citizens of the future. At GIIS Tokyo, our priority is to a parent’s time and  the seamless, admission process. Get details via our school enquiry form and join us in nurturing growth and fostering learning excellence.<br></br><br></br>
    
            Through the Global Indian International School enquiry, you can fill out the school admission enquiry form to get the appropriate information. All the queries or redresses are taken care of by the professional admissions team who are just a call away or you can also reach out to us through the registered email.<br></br><br></br>
            At GIIS Tokyo we have a well-established school admission enquiry cell that guides applicants through the entire admission process. Our expert counsellors are delighted to answer all your queries and provide the required information. Discover excellence in education at GIIS Tokyo. For inquiries, access our school enquiry form and help build a bright future for your child!</p>
          </div>
          <hr style={{ marginTop: '0px', height: '5px' }}></hr>
          <div className="additional-message" style={{ marginLeft: '10px',color:'black'}}>
          <h5>This is an additional text message.</h5>
         </div>
        <div className="oval-shape" style={{ backgroundColor: 'lightblue', borderRadius: '20px', textAlign: 'center', padding: '10px', display: 'inline-block' }}>
         <p style={{ margin: '0', fontWeight: 'bold' }}>CBSE</p>
       </div>
       
    
       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* First Circular Border */}
      <div className="circular-border1" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
          <BsFillStopwatchFill />
          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>9:00am to 3:30pm</p>
          <p style={{ fontSize: '12px', marginBottom: '5px' }}>(Monday to Friday)</p>
        </div>
      </div>
    
      {/* Second Circular Border */}
      <div className="circular-border2" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
          <IoMdMailUnread />
          <p style={{ fontSize: '10px', fontWeight: 'bold' }}>tokyo@globalindianschool.org</p>
        </div>
      </div>
    
      {/* Third Circular Border */}
      <div className="circular-border3" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
        <MdPhoneMissed />
    
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <span>(+81) 80 3609 1648</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>(+81) 35696 7141</span>
          </div>
        </div>
      </div>
    </div>
    
         
        </React.Fragment>
        );
        //////////////////////////////////////////////////////////////////////////////////////////////////////
      case 'Kita Kasai Campus':
        return (
          <React.Fragment>
          <div className="text-container">
            <h3 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '0px' }}>Global Indian International School (GIIS) Nishi Kasai Campus</h3>
          </div>
          <div className="button-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <h5 style={{ marginBottom: '10px' }}>It would be our pleasure to know and answer your requirements.<br /> Kindly fill in the enquiry form to help you out at the earliest.</h5>     {/* Form */}
    <hr style={{height:'5px'}}></hr>
      <form className="inquiry-form">
      <div className="form-group">
        <div className="oval-inputs">
          <div className="oval-input">
            <label htmlFor="ovalField1" className="oval-label" style={{textAlign:'left'}}><b>First Name</b></label>
            <input type="text" id="ovalField1" name="ovalField1" className="oval-field" placeholder="Enter first name" />
          </div>
          <div className="oval-input">
            <label htmlFor="ovalField2" className="oval-label"style={{textAlign:'left'}}><b>Last Name</b></label>
            <input type="text" id="ovalField2" name="ovalField2" className="oval-field" placeholder="Enter last name" />
          </div>
          <div className="oval-input">
            <label htmlFor="ovalField3" className="oval-label"style={{textAlign:'left'}}><b>Email</b></label>
            <input type="text" id="ovalField3" name="ovalField3" className="oval-field" placeholder="abc@gmail.com" />
          </div>
        </div>
      </div><br></br>
      <div className="form-group">
        <div className="oval-inputs">
          <div className="oval-input">
           <label htmlFor="phone" className="oval-label" style={{textAlign:'left'}}><b>Phone Number</b></label>
            <div className="phone-input">
              <select id="countryCode" name="countryCode" className="country-code" style={{height:'35px', borderRadius:'20px'}}>
                <option value="91" style={{textAlign:'left'}}>India (+91)</option>
                {/* Add more country codes as needed */}
              </select>
              <input type="text" id="phone" name="phone" className="phone-field" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="oval-input">
          <label htmlFor="passportCountry" className="oval-label"style={{textAlign:'left'}}><b>Child's Passport Country</b></label>
          <div className="oval-dropdown">
           <select id="passportCountry" name="passportCountry" className="passport-country" >
            <option>Enter Country</option>
           <option>India</option>
           <option>Shrilanka</option>
           <option>Japan</option>
           <option>America</option>
    
             </select>
           </div>
           
         </div>
        </div>
      </div><br></br>
      <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="oval-input">
          <label htmlFor="grade" className="oval-label"style={{textAlign:'left'}}><b>Seeking Admission to Grade*</b></label>
          <select id="grade" name="grade" className="oval-field" placeholder="please select" style={{width:'300px'}}>
          <option>please select</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>HKG</option>
            <option>Grade1</option>
            <option>Grade2</option>
            <option>Grade3</option>
            <option>Grade4</option>
            <option>Grade5</option>
            <option>Grade6</option>
            <option>Grade7</option>
            <option>Grade8</option>
            <option>Grade9</option>
            <option>Grade10</option>
           
    
          </select>
        </div>
        <div className="oval-input">
          <label htmlFor="curricula" className="oval-label"style={{textAlign:'left'}}><b>Interested Curricula*</b></label>
          <select id="curricula" name="curricula" className="oval-field" placeholder="please select" style={{width:'300px'}}>
            <option>please select</option>
          <option>GMP</option>
          <option>CBSE</option>
          <option>IB PYP</option>
          <option>CLSP</option>
          <option>CLSP</option>
          <option>CLSP</option>
          <option>CLSP</option>
     </select>
      </div>
      </div><br></br>
      <textarea style={{width:'100%'}}></textarea><br></br>
      <button type="submit" className="oval-button">Send My Message</button>
    </form>
    
      </div>
        <div style={{ position: 'relative' }}>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLkMNUhJUt6-F-vVy015YVoMZWqneoR-UBB0iT9Xczf4fNP9m4" alt="Image" style={{ width: '600px', height: '450px', borderRadius: '20px', marginLeft: '150px', }} />
            <a href="https://youtu.be/30GnbQ3GEWM?si=5KOtUng5-ivaK37H" className="watch-video-button">
              <i className="fas fa-play"><FaRegCirclePlay /></i> Watch Video
              </a>
            </div>
          </div>    
          <hr style={{ marginTop: '0px', height: '5px' }}></hr>
    
           <div className="additional-info" style={{textAlign:'center'}}>
           <p>GIIS, with its humble beginning in 2006, is known for its reputation in Tokyo, which caters to the education demands of the 21st century. The school is located in a serene atmosphere and is well connected to the central city. The school offers the best curriculum that moulds students into well-groomed citizens of the future. At GIIS Tokyo, our priority is to a parent’s time and  the seamless, admission process. Get details via our school enquiry form and join us in nurturing growth and fostering learning excellence.<br></br><br></br>
    
            Through the Global Indian International School enquiry, you can fill out the school admission enquiry form to get the appropriate information. All the queries or redresses are taken care of by the professional admissions team who are just a call away or you can also reach out to us through the registered email.<br></br><br></br>
            At GIIS Tokyo we have a well-established school admission enquiry cell that guides applicants through the entire admission process. Our expert counsellors are delighted to answer all your queries and provide the required information. Discover excellence in education at GIIS Tokyo. For inquiries, access our school enquiry form and help build a bright future for your child!</p>
          </div>
          <hr style={{ marginTop: '0px', height: '5px' }}></hr>
          <div className="additional-message" style={{ marginLeft: '10px',color:'black'}}>
          <h5>This is an additional text message.</h5>
         </div>
        <div className="oval-shape" style={{ backgroundColor: 'lightblue', borderRadius: '20px', textAlign: 'center', padding: '10px', display: 'inline-block' }}>
         <p style={{ margin: '0', fontWeight: 'bold' }}>CBSE</p>
       </div>
       
    
       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* First Circular Border */}
      <div className="circular-border1" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
          <BsFillStopwatchFill />
          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>9:00am to 3:30pm</p>
          <p style={{ fontSize: '12px', marginBottom: '5px' }}>(Monday to Friday)</p>
        </div>
      </div>
    
      {/* Second Circular Border */}
      <div className="circular-border2" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
          <IoMdMailUnread />
          <p style={{ fontSize: '10px', fontWeight: 'bold' }}>tokyo@globalindianschool.org</p>
        </div>
      </div>
    
      {/* Third Circular Border */}
      <div className="circular-border3" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
        <MdPhoneMissed />
    
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <span>(+81) 80 3609 1648</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>(+81) 35696 7141</span>
          </div>
        </div>
      </div>
    </div>
    
         
        </React.Fragment>
        );
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <div className="centered-container1">
        <h2>SCHOOL ADMISSION ENQUIRY FORM</h2>
        <div className="button-container">
          <button className="oval-button1" onClick={() => handleClick('Nishi Kasai Campus')}>
            Nishi Kasai Campus
          </button>
          <button className="oval-button1" onClick={() => handleClick('Higashi Kasai Campus')}>
            Higashi Kasai Campus
          </button>
          <button className="oval-button1" onClick={() => handleClick('Seishincho Campus')}>
            Seishincho Campus
          </button>
          <button className="oval-button1" onClick={() => handleClick('Kita Kasai Campus')}>
            Kita Kasai Campus
          </button>
        </div>
        <div className="page-content">
          {selectedButton && renderPageContent()}
        </div>
      </div>

 
      <div className="sticky-buttons" style={{ position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>
        <div className="sticky-button" style={{ marginBottom: '20px' }}>
          <a href={window.location.href} className="enquire-button" style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', display: 'block', textDecoration: 'none' }}>ENQUIRE NOW</a>
        </div>
        <div className="sticky-button" style={{ position: 'relative' }}>
          <a href={window.location.href} className="enquire-button" style={{ backgroundColor:'rgb(27, 108, 146)', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', display: 'block', textDecoration: 'none' }}>BOOK A TOUR</a>
          {/* Circular icon */}
          <div style={{ position: 'absolute', top: '60px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'orange' ,color:'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={handleClickIcon}>
            <IoSchoolSharp style={{ color: 'rgb(27, 108, 146)', fontSize: '24px' }} />
          </div>
        </div>
      {/* Message */}
      {showMessage && (
        <div style={{ position: 'absolute', top: '140px', right: 'calc(50% + 35px)', backgroundColor: 'rgb(48, 58, 127)', color: 'white', padding: '5px 10px', borderRadius: '5px', whiteSpace: 'nowrap' }}>Schedule a call with scholarship experts</div>

      )}
        </div>
      

      <div className="footer" style={{ textAlign: 'center', padding: '20px 0' }}>
      <div className="container">
        <div className="row">
          {/* News and Publications Section */}
          <div className="col-md-3">
            <h6>News</h6>
            <ul className="list-unstyled">
              <li><Link to="/latest-news" className="text-black">News 1</Link></li>
              <li><Link to="/latest-news" className="text-black">News 2</Link></li>
              <li><Link to="/latest-news" className="text-black">News 3</Link></li>
            </ul>
            
          </div>

          {/* Contact Information */}
          <div className="col-md-3">
            <h6>Contact</h6>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 1234 Street, City, Country</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/about-us" className="text-black">About Us</Link></li>
              <li><Link to="/contact-us" className="text-black">Contact Us</Link></li>
              <li><Link to="/contribute" className="text-black">Contribute</Link></li>
              <li><Link to="/privacy-policy" className="text-black">Privacy Policy</Link></li>
              <li><Link to="/sitemap" className="text-black">Sitemap</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
           
            <h6>Publications</h6>
            <ul className="list-unstyled">
              <li><Link to="/publications" className="text-black">Publication 1</Link></li>
              <li><Link to="/publications" className="text-black">Publication 2</Link></li>
              <li><Link to="/publications" className="text-black">Publication 3</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr />

      {/* Footer Bottom */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 col-sm-6">
            <p className="copyright-text">
              &copy; {currentYear} All Rights Reserved by <Link to="/" className="text-black">Your Website</Link>
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" style={iconStyle} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={iconStyle} />
              </a>
            </div>
          </div>
        </div>
        </div>
     </div>

    </React.Fragment>
  );
}

export default YourComponent;
