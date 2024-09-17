import React, { useState } from 'react';
import img11 from './img11.jpg';
import map11 from './map11.jpg'; // Assuming you have a map image file
import { IoAccessibility } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { MdSubway } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";







function ContactInfo() {
  // Define options for the dropdown
  const landmarks = [
    { value: 'landmark1', label: 'Landmark 1 Landmark 1' },
    { value: 'landmark2', label: 'Landmark 2 Landmark 1' },
    { value: 'landmark3', label: 'Landmark 3 Landmark 1' },
    { value: 'landmark1.', label: 'Landmark 1 Landmark 1' },
    { value: 'landmark2', label: 'Landmark 2 Landmark 1' },
    { value: 'landmark3', label: 'Landmark 3 Landmark 1' },
    { value: 'landmark1.',label: 'Landmark 1 Landmark 1' },
    { value: 'landmark2', label: 'Landmark 2 Landmark 1' },
    { value: 'landmark3', label: 'Landmark 3 Landmark 1' },
    
    // Add more landmarks as needed
  ];

  const landmark1 = [
      { value: 'landmark1', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }} /> Landmark 1 Landmark 1</> },
      { value: 'landmark2', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }} /> Landmark 2 Landmark 1</> },
      { value: 'landmark3', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }}/> Landmark 3 Landmark 1</> },
      { value: 'landmark3', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }}/> Landmark 3 Landmark 1</> },
      { value: 'landmark3', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }}/> Landmark 3 Landmark 1</> },

    ];

    const landmark2 = [
      { value: 'landmark1', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }} /> Landmark 1 Landmark 1</> },
      { value: 'landmark2', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }} /> Landmark 2 Landmark 1</> },
      { value: 'landmark3', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }}/> Landmark 3 Landmark 1</> },
      { value: 'landmark3', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }}/> Landmark 3 Landmark 1</> },
      { value: 'landmark3', label: <><img src="https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2017/02/colour-culture-1170x692.png" alt="USA Flag" style={{ width: '50px', height:'30px', marginRight: '5px' }}/> Landmark 3 Landmark 1</> },

    ];

    const landmark3 = [
      { 
        vedioSrc: 'https://example.com/image.jpg',alt: 'Image Description' 
      }
    ];


    // map
    const handleDownload = () => {
      // Implement your download logic here
      // For example, initiate the download of the map file
      // window.open('path_to_map_file', '_blank');
      alert('Map downloading...');
    };

  return (
    <div style={{marginTop:'100px'}}>
     <iframe width="1520" height="500" src="https://www.youtube.com/embed/PyHpfywqXwY?si=2XybJRiCjjxgUkUT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay></iframe> 
      <img src={img11} alt="Footer Image" style={{ width: '100%', height: '100px', marginTop: '-50px' }} />
      <div style={{ textAlign: 'center' ,marginTop:'20px'}}>
        <h4><a href="#location" style={{textDecoration:'none'}}>Location</a> || <a href="#Access" style={{textDecoration:'none'}}>Access</a> || <a href="#Contact" style={{textDecoration:'none'}}>Contact</a></h4>
      </div>

      {/* Your location content */}
    <div id="location" style={{ background: '#0f6ab9', textAlign: 'center', paddingTop:'10px', position: 'relative', height: 'auto',marginTop:'20px' }}>
    <h3 style={{ marginTop: '50px', color:'white' }}>Located in the Center of Tokyo</h3>
    <p style={{color:'white'}}> Our campus is situated in Tokyo’s embassy district. We are on the doorstep of many of the city’s most <br></br>famous landmarks.</p>
    {/* Map image */}
    <img src={map11} alt="Map" style={{ width: '70%', maxWidth: '100%', height:'450px', borderRadius: '10px', marginTop: '20px' }} />
    {/* Dropdown menu for famous landmarks */}

    {/* Dropdown 1 */}
    <div className="dropdown" style={{ margin: '20px auto', maxWidth: '70%' }}>
        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width:'100%', height:'60px', backgroundColor:'rgb(232, 225, 225)', border:'2px solid white', paddingTop:'15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
            <h5 style={{ margin: 0, color:'blue' }}>Famous Landmark</h5>
            <span className="caret" style={{ marginTop: '3px' }}></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: '100%', paddingLeft:'20px', paddingRight:'20px' }}>
            {landmarks.map((landmark, index) => (
                <li key={index}><a className="dropdown-item" href="#" style={{ border:'1px solid white', backgroundColor:'gainsboro', height:'70px', paddingTop:'20px' }}>{landmark.label}</a></li>
            ))}
        </ul>
    </div>

    {/* Dropdown 2 */}
      <div className="dropdown" style={{ margin: '20px auto', maxWidth: '70%' }}>
        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{ width:'100%', height:'60px',backgroundColor:'rgb(232, 225, 225)', border:'2px solid white', paddingTop:'15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
            <h5 style={{ margin: 0, color:'blue' }}>African embassies</h5>
            <span className="caret" style={{ marginTop: '3px' }}></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2" style={{ width: '100%', paddingLeft:'20px', paddingRight:'20px' }}>
            {landmark1.map((landmark, index) => (
                <li key={index}><a className="dropdown-item" href="#" style={{ border:'1px solid white', backgroundColor:'gainsboro', height:'70px', paddingTop:'20px' }}>{landmark.label}</a></li>
            ))}
        </ul>
    </div>

     {/* Dropdown 3 */}
     <div className="dropdown" style={{ margin: '20px auto', maxWidth: '70%', position: 'relative', top: '-18px' }}>
        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{ width:'100%', height:'60px', backgroundColor:'rgb(232, 225, 225)', border:'2px solid white', paddingTop:'15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
            <h5 style={{ margin: 0, color:'blue' }}>Asia-Pacific embassies</h5>
            <span className="caret" style={{ marginTop: '3px' }}></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2" style={{ width: '100%', paddingLeft:'20px', paddingRight:'20px' }}>
            {landmark2.map((landmark, index) => (
                <li key={index}><a className="dropdown-item" href="#" style={{ border:'1px solid white', backgroundColor:'gainsboro', height:'70px', paddingTop:'20px' }}>{landmark.label}</a></li>
            ))}
        </ul>
    </div>
    </div>

      {/* Text and List */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'lightblue',paddingTop:'50px',marginTop:'-20px' }}>
    {/* Text */}
    <div style={{ marginRight: '20px' }}>
        <h3 style={{ color: 'rgb(59, 100, 222)' }}>Some Advantages of our<br /> Central Location</h3>
        <ul style={{ listStyleType: 'square' }}>
            <li>We walk, cycle, and skateboard to school</li>
            <li>Getting to galleries, museums, and parks is quick and easy</li>
            <li>We see Tokyo Tower every day</li>
            <li>Our running club jogs past famous landmarks</li>
            <li>Great bagels, cakes, and coffee shops</li>
        </ul>
    </div>
    {/* Image */}
    <div style={{ marginLeft: '30px' }}>
        <img src="https://media.istockphoto.com/id/1410391090/photo/crystal-globe-putting-on-moss.webp?b=1&s=170667a&w=0&k=20&c=7CxPK3yCzidarDiNXhkk4NfR3w4KT2mCGRG5mZ87HSA=" alt="Image description" style={{ maxWidth: '100%',borderRadius:'15px' }} />
    </div>
      </div>
      <hr style={{height:'5px'}}></hr>

      <div id="Access" style={{ textAlign: 'center', marginTop: '50px',paddingBottom:'50px' }}>
       <h1 style={{color:'rgb(59, 100, 222)'}}>Where it's Happening</h1>
        {/* Add your live map component here */}
         {/* Example: */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158852.89139817715!2d-122.41941602310208!3d37.77492949922409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e8b685a8e9d%3A0x1a6d5dfe9bf9a16f!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1649313582380!5m2!1sen!2sus" 
        width="70%" height="450" style={{ border: 0, maxWidth: '100%' }} allowfullscreen="" loading="lazy" ></iframe>
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <h3 style={{color:'rgb(59, 100, 222)'}}>Tokyo International School</h3>
          <p>2 Chome-13-6 Minami Azabu, Minato-ku, Tokyo 106-0047</p> 
        </div>
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <p > <b>Shirokane Takanawa Station on the Namboku Line/Mita Line  Exit 4 (7mins)</b></p>
          <p > <b>Shirokane Takanawa Station on the Namboku Line/Mita Line  Exit 4 (7mins)</b></p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => handleDownload()} style={{border:'none',color:'rgb(59, 100, 222)',backgroundColor:'white'}}><b>Download Map</b></button>
        </div>
       

        {/* Dropdown menu */}
        <div className="dropdown" style={{ margin: '20px auto', maxWidth: '70%' }}>
         <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false" style={{ width:'100%', height:'60px', paddingTop:'15px', display: 'flex',backgroundColor:'rgb(232, 225, 225)', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
         <h5 style={{ margin: 0, color:'blue' }}><IoAccessibility />  Access by Foot, Bike, Scooter</h5>
         <span className="caret" style={{ marginTop: '3px' }}></span>
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3" style={{ width: '100%', height: '500px', paddingLeft:'20px', paddingRight:'20px' }}>
          {/* Video */}
           {landmark3.map((_item, index) => (
            <li key={index}>
             <iframe width="100%" height="500" src="https://www.youtube.com/embed/--WWvrwrIp0?si=ABmko0iU5Gy1jppH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{border:'5px solid rgb(16, 95, 144)',borderRadius:'20px'}}></iframe>
             </li>
           ))}
           </ul>
        </div>
        {/* Dropdown menu */}
        <div className="dropdown" style={{ margin: '20px auto', maxWidth: '70%',marginTop:'-15px' }}>
         <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false" style={{ width:'100%', height:'60px', paddingTop:'15px', display: 'flex',backgroundColor:'rgb(232, 225, 225)', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
         <h5 style={{ margin: 0, color:'blue' }}><MdSubway/>  Access by Subway</h5>
         <span className="caret" style={{ marginTop: '3px' }}></span>
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3" style={{ width: '100%', height: '500px', paddingLeft:'20px', paddingRight:'20px' }}>
          {/* Video */}
           {landmark3.map((_item, index) => (
            <li key={index}>
             <iframe width="100%" height="500" src="https://www.youtube.com/embed/--WWvrwrIp0?si=ABmko0iU5Gy1jppH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{border:'5px solid rgb(16, 95, 144)',borderRadius:'20px'}}></iframe>
             </li>
           ))}
           </ul>
        </div>
         {/* Dropdown menu */}
         <div className="dropdown" style={{ margin: '20px auto', maxWidth: '70%',marginTop:'-15px' }}>
         <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false" style={{ width:'100%', height:'60px', paddingTop:'15px', display: 'flex',backgroundColor:'rgb(232, 225, 225)', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
         <h5 style={{ margin: 0, color:'blue' }}><FaBus/>  Access by Bus</h5>
         <span className="caret" style={{ marginTop: '3px' }}></span>
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3" style={{ width: '100%', height: '500px', paddingLeft:'20px', paddingRight:'20px' }}>
          {/* Video */}
           {landmark3.map((_item, index) => (
            <li key={index}>
             <iframe width="100%" height="500" src="https://www.youtube.com/embed/--WWvrwrIp0?si=ABmko0iU5Gy1jppH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{border:'5px solid rgb(16, 95, 144)',borderRadius:'20px'}}></iframe>
             </li>
           ))}
           </ul>
        </div>
         {/* Dropdown menu */}
         <div className="dropdown" style={{ margin: '20px auto', maxWidth: '70%',marginTop:'-15px' }}>
         <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false" style={{ width:'100%', height:'60px', paddingTop:'15px', display: 'flex',backgroundColor:'rgb(232, 225, 225)', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
         <h5 style={{ margin: 0, color:'blue' }}><FaCar/> Access by Car</h5>
         <span className="caret" style={{ marginTop: '3px' }}></span>
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3" style={{ width: '100%', height: '500px', paddingLeft:'20px', paddingRight:'20px' }}>
          {/* Video */}
           {landmark3.map((_item, index) => (
            <li key={index}>
             <iframe width="100%" height="500" src="https://www.youtube.com/embed/--WWvrwrIp0?si=ABmko0iU5Gy1jppH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{border:'5px solid rgb(16, 95, 144)',borderRadius:'20px'}}></iframe>
             </li>
           ))}
           </ul>
        </div>
        </div><hr></hr>

        <div id='Contact' style={{ textAlign: 'center',backgroundColor:'rgb(245, 241, 241)'}}>
        <h1 style={{color:'rgb(59, 100, 222)'}}>Contact Us</h1>
        <h5>We love curiosity at TIS. Please get in touch with your questions.</h5>
        <div style={{ position: 'relative' }}>
        <img src="https://tokyois.com/wp-content/uploads/2022/07/IMG_9994-2048x1365.jpeg" alt="Your Image" style={{ width: '70%', height: '500px', borderRadius: '20px', paddingTop:'50px' }} />
        <div style={{ position: 'absolute', bottom: '70%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', borderRadius: '50%', width: '100px', height: '100px' }}>
         <img src="https://cdn.pixabay.com/photo/2014/04/03/10/02/email-309678_960_720.png" alt="Email Icon" style={{ width: '70px', height: '70px', display: 'block', margin: 'auto', paddingTop: '30px'}} />
        </div>
       </div>

       <div style={{ width: '70%', margin: 'auto', marginTop: '20px' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
           {/* First dropdown */}
            <div className="dropdown" style={{ width: '48%' }}>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '100%',backgroundColor:'lightblue',fontSize:'20px',border:'1px solid blue',color:'blue'}}>Admissions</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{width:'100%', paddingLeft:'50px'}}>
             <p><  BsClockFill style={{color:'blue'}}/> Admissions Office:</p>
                <p>9:00am – 4:30pm (on school days)<br></br>
                9:00am – 3:00pm (non-school days)</p>
                <p><FaPhone style={{color:'blue'}}/>  (3)-6381-7774</p>
                <p><IoMdMailOpen style={{color:'blue'}}/> Admissions Inquiry Form</p>
                <p><IoMdMailOpen style={{color:'blue'}}/> admissions@tokyois.com</p>

             </ul>
             </div>

          {/* Second dropdown */}
          <div className="dropdown" style={{ width: '48%' }}>
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '100%',backgroundColor:'lightblue' ,fontSize:'20px',border:'1px solid blue',color:'blue' }}>
           Other Enquiery
           </button>
           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2" style={{width:'100%', paddingLeft:'50px',}}>
           <p><  BsClockFill style={{color:'blue'}}/> Business Hours:</p>
                <p>9:00am – 4:30pm (on school days)<br></br>
                9:00am – 3:00pm (non-school days)</p>
                <p><FaPhone style={{color:'blue'}}/>  (3)-6381-7774</p>
                <p>If you have any inquiries after business hours, please send an email to info@tokyois.com. We will get back to you as soon as we can.</p>
                <p>For general inquiries please use the contact form below.</p>
           </ul>
    </div>
  </div>

     <div style={{ textAlign: 'center', color: 'green', marginTop: '100px' }}>
       <h3>We love curiosity at TIS. Please contact us with your<br></br> questions.</h3>
       <p style={{color:'black'}}>For general inquiries, please fill out all of the fields marked with an asterisk (*).<br></br>
        For employment questions or job applications, kindly refer to our FAQS and Join Us pages – please<br></br>
        do not submit employment applications here.</p>
     </div>

     <div style={{ textAlign: 'center', marginTop: '50px', width: '60%', margin: 'auto' }}>
     <form style={{ marginTop: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
      <input type="text" id="name" name="name" placeholder="Your Name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />
       </div>
      <div style={{ marginBottom: '10px' }}>
      <input type="email" id="email" name="email" placeholder="Your Email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
      <input type="text" id="subject" name="subject" placeholder="Subject" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />
       </div>
      <div style={{ marginBottom: '20px' }}>
      <textarea id="message" name="message" rows="4" placeholder="Your Message" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}></textarea>
       </div>
       <button type="submit" style={{ background: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
    
  </form>
</div>




</div>
</div>


      
</div>   

   
  );
}

export default ContactInfo;
