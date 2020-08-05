import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './component/body';
import NavBar from './component/navbar';
import planeImage from './component/960x0.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Carousel from './component/carousel';
import Footer from './component/footer';

// onQuery = async () => {
//   await fetch('/api/person', {
//       method: 'POST',
//       headers: {
//       'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({Scenery: this.state.Scene})
//   })
// }

function App() {
  return (
    <div >

      <Navbar expand="lg" className="header">
        <Navbar.Brand  className="logo" href="/">

          <i className="fas fa-plane"></i> Travel Assistant</Navbar.Brand>
          <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home <i className="fas fa-home"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/result/find/scenery=all/budgetLimit=5000">Results <i className="fas fa-scroll"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Map <i className="fas fa-map-marked-alt"></i></Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
     


 
        
      <Carousel /> 

      <Body  />

      <div>
      <footer className="footer"> 
                <div className="container">
                <p> <i class="fas fa-heartbeat"></i>    Don't forget to wear a mask and safe travels from the Hawk Team</p>
                </div>
        </footer>
      </div>
      
    </div>
  );
}

export default App;
