import React, { useState } from 'react';
import { FaStar,FaSearch} from 'react-icons/fa';
import './SearchForm.css'; // Import CSS for styling

const HotelBookingForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2 adults, 0 children, 1 room',
    starRating: '3',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="booking-container">
      <h2>Discover Your Next Adventure</h2>
      <p>Unlock your path to adventure, start your journey of discovery – where every destination awaits your exploration</p>
      <div className='booking'>
         <div className="form-tabs">
        <button className="tab-button active">Packages</button>
        <button className="tab-button">Tours</button>
      </div>

      <form onSubmit={handleSubmit} className="hotel-booking-form">
        <div className="form-group">
            <div><label htmlFor='destination'>Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Enter the City"
          /></div>
            
        </div>

        <div className="form-group">
            <div><label htmlFor="checkIn">Check-in</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
          /></div>
          
          <span className="nights">1 Night</span>
          <div><label htmlFor="checkOut">Check-out</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
          /></div>
          
        </div>

        

        <div className="form-group">
            <label htmlFor='guests'>Guests and Rooms</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            <option value="2 adults, 0 children, 1 room">2 adults, 0 children, 1 room</option>
            <option value="1 adult, 0 children, 1 room">1 adult, 0 children, 1 room</option>
            <option value="2 adults, 1 child, 1 room">2 adults, 1 child, 1 room</option>
            <option value="2 adults, 2 children, 1 room">2 adults, 2 children, 1 room</option>
            <option value="3 adults, 0 children, 1 room">3 adults, 0 children, 1 room</option>
          </select>
        </div>

        <button type="submit" className="search-button">
          <FaSearch/>
        </button>
      </form>
      <div className='star-rating'>
        Star Rating 
        <button className='d'>3<FaStar/></button>
        <button className='d'>4<FaStar/></button>
        <button className='d'>5<FaStar/></button>
      </div>
      
      
      </div>
      
    </div>
  );
};

export default HotelBookingForm;
