import './App.css';
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [postalCode, setPostalCode] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [size, setSize] = useState('')
  const [events, setEvents] = useState([])

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const res = await fetch("http://127.0.0.1:8000/get-events", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postal_code: postalCode,
          max_price: maxPrice,
          start_date: startDate,
          end_date: endDate,
          size: size,
        })
      })
      const parsed = await res.json()
      if (res.status === 200) {
        setEvents(parsed.events)
        console.log(events)
      } else {
        console.log("GetEvents failed")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
      <div className="App">
        {/* <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar> */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <h1 className="info">Ticket Scraper</h1>
          <br></br>
          <p className= "info">Quickly and easily find all the local events happening in your area. Whether it's a concert, festival, or simply a community gathering, the web scraper will provide you with all the details you need to know, including location, date, and time. With its user-friendly interface and accurate data, you'll never miss out on a single local event again! </p>
        </div>

        <hr></hr>
        <div className="side_by_side">
          <div className="side_by_element">
            <h2>Search For Event</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={postalCode}
                placeholder="Postal Code"
                onChange={evt => setPostalCode(evt.target.value)}
              />
              <input
                type="number"
                value={maxPrice}
                placeholder="Max Price"
                onChange={evt => setMaxPrice(evt.target.value)}
              />
              From:
              <input
                type="date"
                value={startDate}
                onChange={evt => setStartDate(evt.target.value)}
              />
              To:
              <input
                type="date"
                value={endDate}
                onChange={evt => setEndDate(evt.target.value)}
              />
              <input
                type="number"
                value={size}
                placeholder="How many events?"
                onChange={evt => setSize(evt.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="side_by_element" id="space" ></div>
          <div className="side_by_element">
            <div>
              <table id="events">
                <tr>
                  <th>Event Name</th>
                  <th>Genre</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue Name</th>
                  <th>Price Range</th>
                  <th>URL</th>
                </tr>


                {(events && events.length > 0) ?
                  events.map(e =>
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.genre}</td>
                      <td>{e.eventDate}</td>
                      <td>{e.eventTime}</td>
                      <td>{e.venueName}</td>
                      <td>{e.minPrice}-{e.maxPrice}</td>
                      <td><a href={e.url} target="_blank">URL</a></td>
                    </tr>
                  )
                  :
                  <p>No events found</p>}
              </table>
            </div>
          </div>
          <div className="side_by_element" id="space" ></div>
        </div>





        <footer>
          <p>About: This event searcher searches for nearby events in the area. The options given to filter the events by Location, Date, Price, Venue, Artist, Genre, and Ticket Availability. This project was done to make nearby, local events more accessable to visitors, tourists , and people that are bored and are looking for fun things to do in the area. This website searches using SeatGeek and Ticketmaster to provide a streamline and one stop shop for events near you.</p>
        </footer>
      </div>
  );
}

export default App;
