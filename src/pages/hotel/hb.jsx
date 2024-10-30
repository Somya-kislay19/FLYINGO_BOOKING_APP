import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hb= () => {
  const [name, setName] = useState('');
  const [newDate, setNewDate] = useState('');
  const [baggage, setBaggage] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('New Date:', newDate);
    console.log('Staying Info:', baggage);
    
  };
 const navigate=useNavigate();
 const c=()=>{
    navigate("/c")
 }

  return (
    <div className="reschedule-container">
      <h1>Stay that feels like HOME!</h1>
      <form className="reschedule-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        

        <div className="form-group">
          <label htmlFor="newDate">Check-In Date:</label>
          <input
            type="date"
            id="newDate"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newDate">Check-Out Date:</label>
          <input
            type="date"
            id="newDate"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="baggage">Baggage Information:</label>
          <input
            type="text"
            id="baggage"
            value={baggage}
            onChange={(e) => setBaggage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button" onClick={c} >Submit</button>
      </form>
    </div>
  );
}

export default Hb;
