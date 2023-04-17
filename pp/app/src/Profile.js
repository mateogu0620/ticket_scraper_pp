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
    // const parsed = await res.json()
    // if (res.status === 200) {
    //   setInfo(parsed.info)
    //   console.log(Info)
    // } else {
    //   console.log("GetEvents failed")
    // }
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
                type="string"
                value={userName}
                placeholder="User Name"
                onChange={evt => setUserName(evt.target.value)}
              />
              <input
                type="string"
                value={password}
                placeholder="Password"
                onChange={evt => setPassword(evt.target.value)}
              />
              <button type="submit">Update Info</button>
            </form>
            
            {(Info && Info.length > 0) ?
            Info.map(e =>
                    <div>
                      <h1>{e.name}</h1>
                      <h2>{e.password}</h2>
                    </div>
                  )
                  :
                  <p>No events found</p>}

          <form onLoad={getUserPreferences}>
              <input
                type="string"
                value={userZipCode}
                placeholder="User Name"
                onChange={evt => setSserZipCode(evt.target.value)}
              />
              <button type="submit">Update Info</button>
            </form>
            
            {(Info && Info.length > 0) ?
            Info.map(e =>
                    <div>
                      <h1>{e.zipcode}</h1>
                    </div>
                  )
                  :
                  <p>Default ZipCode not Set</p>}
      </div>
  );
}

export default App;
