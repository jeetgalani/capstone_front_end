import React from 'react'
import { Table } from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';

class Result extends React.Component {

    constructor(props) {
        super(props)
        this.foo="bar"
        debugger

        this.url= props.location.pathname.split("/")
        if(this.url){

        this.scenery = this.url[3].split("=")[1]

        debugger

        this.budgetLimit = this.url[4].split("=")[1]

        this.state = {results: []}
        }
      }

    componentDidMount() {
        window.scrollTo(0,0);
        this.getResults()
    }

    getResults = async () => {
        let result;
        let destination;
        if(this.scenery && this.budgetLimit) {
        result = await fetch(`http://localhost:8080/result/find/${this.scenery}/${this.budgetLimit}`)
         destination = await result.json()
        }
        else {
            result = await fetch(`http://localhost:8080/result`)
            destination = await result.json()

        }
        debugger;
        console.log(destination)
        this.setState( {results: destination})
    }

    Destination = ({activities, arrival, budgetLimit, departure, name, scenery}) =>
    
                <tr>
                    <td>{name}</td>
                    <td>{scenery}</td>
                    <td>{arrival}</td>
                    <td>{departure}</td>
                    <td>{budgetLimit}</td>
                    <td>{activities}</td>
                </tr>

    render () {
        return(
        <div>
        <div className ="header">
        <Navbar expand="lg" className="header">
            <Navbar.Brand href="/">
            <i class="fas fa-plane"></i>    Travel Assistant</Navbar.Brand>
            <Nav>
            <Nav.Item>
            <Nav.Link href="/"> Home <i class="fas fa-home"></i> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/result/find/scenery=all/budgetLimit=5000"> Results <i class="fas fa-scroll"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>  Map <i class="fas fa-map-marked-alt"></i></Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>
      </div>

      <Table striped bordered hover variant="light">
            <thead className="table">
                <tr>
                <th>Name</th>
                <th>Scenery</th>
                <th>Arrival</th>
                <th>Departure</th>
                <th>Budget Limit</th>
                <th>Activities</th>
                </tr>
            </thead>
            <tbody>
              {this.state.results.map(result => <this.Destination key={result.id} name={result.name} scenery={result.scenery}
                activities={result.activities} arrival={result.arrival}  budgetLimit={result.budgetLimit}  departure={result.departure}/>)}

            </tbody>
        </Table>
      
       
      <div className="result-background">
           
            </div>
            <footer className="footer"> 
                <p> <i class="fas fa-heartbeat"></i>    Don't forget to wear a mask and safe travels from the Hawk Team</p>
                <div className="container">
                </div>
            </footer>
        </div>
        ) 

    }
}

export default Result