import React from 'react';
import './Feedback.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Feedback() {
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');
    const token=localStorage.getItem("jwtToken");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:8081/api/v1/users/addUserFeedback", {
          email,
          feedback,
        },{
            headers: {
              Authorization: "Bearer " + token
            }
          });
        window.alert('Feedback submited');
        console.log(response.data); // This will log "Feedback added!" if successful
        // Optionally, you can show a success message to the user
      } catch (error) {
        console.error(error);
        // Optionally, you can show an error message to the user
      }
    };
  
    return (
      <div>
        <center>
        <h2>Add Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="feedback"
              value={feedback} 
              className='f1'
              placeholder='Feedback'
              onChange={(e) => setFeedback(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="email"
              id="email"
              className='f'
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" id='fs'>Submit Feedback</button>
        </form>
        </center>
      </div>
    );
  }
  
  export default Feedback;