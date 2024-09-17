import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import Pagination from './Pagination'; // Import the Pagination component
import './CampusActivities.css';

const CampusActivities = () => {
  // Data for pagination (e.g., multiple pages content)
  const data = [
    // Content for the first page
    <div className="carousel-item-content">
      <div className="carousel-text">
        <h2>
          Welcome to <br />
          <h1 style={{ color: 'black' }}>Tokyo</h1>
        </h2>
        <h2 style={{ color: 'blue' }}>Campus Activities</h2>
        <h3 style={{ color: 'gray' }}>Where Learning Comes to life</h3>
        <br />
        <div className="button-container">
          <button 
            style={{
              backgroundColor: 'white',
              border: 'none',
              width: '150px',
              height: '50px',
              marginRight: '10px'
            }}
          >
            Enquire Now
          </button>
          <button
            style={{
              backgroundColor: 'white',
              border: 'none',
              width: '150px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="fas fa-play" style={{ marginRight: '8px' }}></i>
            Watch Video
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://www.japantimes.co.jp/wp-content/uploads/2019/06/z26-sophia-a-20190627.jpg"
          alt="Tokyo"
          className="carousel-image"
        />
      </div>
    </div>,
    // Content for the second page
    <div className="carousel-item-content">
      <div className="carousel-text">
        <h2>
          On Eye <br />
          <h1 style={{ color: 'red' }}>On The Future</h1>
        </h2>
        <h2 style={{ color: 'black' }}>Half a Century of Molding The Best</h2>
        <br />
        <div className="button-container">
          <button 
            style={{
              backgroundColor: 'white',
              border: 'none',
              width: '150px',
              height: '50px',
              marginRight: '10px'
            }}
          >
            Enquire Now
          </button>
          <button
            style={{
              backgroundColor: 'white',
              border: 'none',
              width: '150px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="fas fa-play" style={{ marginRight: '8px' }}></i>
            Watch Video
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://activityhighschool.com/wp-content/uploads/2021/11/banner2.jpg"
          alt="Tokyo"
          className="carousel-image"
        />
      </div>
    </div>,
    // Content for the third page
    <div className="carousel-item-content">
      <div className="carousel-text">
        <h2>Ready To  <br />
          <h1 style={{ color: 'green' }}>Soar</h1>
        </h2>
        <h2 style={{ color: 'purple' }}>DIgniting the spark for generation..</h2>
        <br />
        <div className="button-container">
          <button 
            style={{
              backgroundColor: 'white',
              border: 'none',
              width: '150px',
              height: '50px',
              marginRight: '10px'
            }}
          >
            Enquire Now
          </button>
          <button
            style={{
              backgroundColor: 'white',
              border: 'none',
              width: '150px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="fas fa-play" style={{ marginRight: '8px' }}></i>
            Watch Video
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://activityhighschool.com/wp-content/uploads/2021/11/banner3.jpg"
          alt="Image for Third Page"
          className="carousel-image"
        />
      </div>
    </div>,
    // Add more items as needed
  ];

  return (
    <div>
      <Pagination itemsPerPage={1} data={data} />
    </div>
  );
};

export default CampusActivities;
