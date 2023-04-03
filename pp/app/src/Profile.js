import './App.css';
import React, { useState } from 'react'
import Navbar from './Navbar';

function Profile() {  
    //user retreval from login
    //const [userName, setUserName] = useState('')
    //const [password, setPassword] = useState('')
    //needs more user
    
    
    // const getUserInfo = async (evt) => {
    //   evt.preventDefault()
    //   try {
        
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
  
  return (
      <div className="Profile">
        <Navbar/>

        <div>
          <h1 className="info">Ticket Scraper</h1>
          <br></br>
          <p className= "info">Quickly and easily find all the local events happening in your area. Whether it's a concert, festival, or simply a community gathering, the web scraper will provide you with all the details you need to know, including location, date, and time. With its user-friendly interface and accurate data, you'll never miss out on a single local event again! </p>
        </div>

        <form onLoad={getUserInfo}>
              <input
                type="number"
                value={userName}
                placeholder="User Name"
                onChange={evt => setUserName(evt.target.value)}
              />
              <input
                type="number"
                value={maxPrice}
                placeholder="Max Price"
                onChange={evt => setUserName(evt.target.value)}
              />
              
              <button type="submit">Update Info</button>
            </form>
  
      </div>
  );
}

export default App;
