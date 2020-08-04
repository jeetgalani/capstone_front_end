import React, {Component} from 'react';
import scenarydropdown from './scenarydropdown.js';
import Datepicker from './datepicker';
import Button from 'react-bootstrap/Button';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Scenerypicker from './scenerypicker'
import Budgetpicker from './budgetpicker'
import { browserHistory } from 'react-router'
import { withRouter } from "react-router-dom";


class Body extends Component {

    constructor(props) {
        super(props);
        this.foo="bar"
      }

    state = {
        scenery: "all",
        check_in: null,
        check_out: null,
        budget: null,
        date: null
    };

    resetValues = () => {
        document.getElementById("myForm").reset();
    }

    getResults = async () => {
        //const result = await fetch(`http://localhost:8080/result/scenery/${this.state.scenery}`)
        //const destination = await result.json()
        this.props.history.push(`/result?scenery=${this.state.scenery}`)
        //console.log(destination);
    }


    setSceneryChange = (e) => {
        console.log("I am changing the scenery");
          this.setState ({
              scenery: e.target.value
          });
      };


    render () {
        return (
            <div className="rcorners2 carousel-background">
                <form id="myForm" >
                    <div className="form-content form-fields">
                    <Scenerypicker changer={this.setSceneryChange} />
                    <div className="input-text form-fields"> <i class="fas fa-suitcase"></i> Check In:   <Datepicker selected={this.state.date}/>  </div>
                    <div className="input-text form-fields"> <i class="fas fa-luggage-cart"></i> Check Out:  <Datepicker selected={this.state.date}/> </div>
                    <Budgetpicker/>
                    <p className="buttons"><Button  onClick={this.getResults} variant="primary" size="lg" >Search</Button><Button variant="danger" size="lg" onClick={this.resetValues}>Reset</Button></p>
                    </div>
                   
                </form>

            </div>
        )
    }

}

export default withRouter(Body);