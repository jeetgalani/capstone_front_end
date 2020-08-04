import React from 'react'
import { Table } from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';

class Result extends React.Component {

    constructor(props) {
        super(props)
        this.foo="bar"

        this.scenery = props.location.search.split("=")[1];
      }


    getResults = async () => {
        //const result = await fetch(`http://localhost:8080/result/scenery/${this.state.scenery}`)
        //const destination = await result.json()
        // this.props.history.push(`/result?scenery=${this.state.scenery}`)
        //console.log(destination);
    }

    render () {
        return(
        <div>
        Your scenery choice is : {this.scenery}
        <div className ="header">
        <Navbar expand="lg" className="header">
            <Navbar.Brand href="/">
            {/* <img
            alt=""
            src="logo.jpg"
            width="30"
            height="30"

        />{' '} */}
            <i class="fas fa-plane"></i>    Travel Assistant</Navbar.Brand>
            <Nav>
            <Nav.Item>
            <Nav.Link href="/"> Home <i class="fas fa-home"></i> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/result?scenery=all"> Results <i class="fas fa-scroll"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>  Map <i class="fas fa-map-marked-alt"></i></Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>
      </div>
      <div className="result-background">
            <Table striped bordered hover variant="light">
            <thead>
                <tr>
                <th>Name</th>
                <th>Scenery</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{this.scenery}</td>
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
            <footer className="footer"> 
                <div className="container">
                <p> <i class="fas fa-heartbeat"></i>    Don't forget to wear a mask and safe travels from the Hawk Team</p>
                </div>
            </footer>
        </div>
        ) 

    }
}

export default Result