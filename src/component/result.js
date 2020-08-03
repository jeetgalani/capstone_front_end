import React from 'react'
import { Table } from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';

class Result extends React.Component {
    render () {
        return(
        <div>
        <div className ="header">
        <Navbar expand="lg" className="header">
            <Navbar.Brand href="#home">
            {/* <img
            alt=""
            src="logo.jpg"
            width="30"
            height="30"

        />{' '} */}
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
      <div className="background">
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
            </div>
        </div>
        ) 

    }
}

export default Result