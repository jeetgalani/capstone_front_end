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

// onQuery = async () => {
//   await fetch('/api/person', {
//       method: 'POST',
//       headers: {
//       'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({Scenery: this.state.Scene})
//   })
// }

const Footer = () => <div> This is the footer</div>

function App() {
  return (
    <div>
      <div>
      <Navbar expand="lg" className="header">
        <Navbar.Brand href="#home">
        <img
        alt=""
        src="logo.jpg"
        width="30"
        height="30"

      />{' '}
          Travel Assistant</Navbar.Brand>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
        <Nav.Item>
          <Nav.Link>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Results</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Map</Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
      </div>
      <div  className="background">
      <Body  />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
