import React, {Component} from 'react';
import scenarydropdown from './scenarydropdown.js';
import Datepicker from './datepicker';
import Button from 'react-bootstrap/Button';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Scenerypicker from './scenerypicker'
import Budgetpicker from './budgetpicker'


class Body extends Component {

    state = {
        scenery: null,
        check_in: null,
        check_out: null,
        budget: null,
        date: null
    };

    resetValues = () => {
        document.getElementById("myForm").reset();
    }

    getResults = async () => {
        const result = await fetch(`http://localhost:8080/result/scenery/${this.state.scenery}`)
        const destination = await result.json()
        console.log(destination);
        // this.setState()
    }

    // getPersonList = async () => {
    //     const response = await fetch('/api/person')
    //     const people = await response.json()
    //     this.setState({people, selectedView : 'PersonList'})
    // }

    setSceneryChange = (e) => {
        console.log("I am changing the scenery");
          this.setState ({
              scenery: e.target.value
          });
      };


    render () {
        return (
            <div>
                <form id="myForm" className="rcorners2">
                    <div className="form-content">
                    <Scenerypicker changer={this.setSceneryChange} />
                    <div className="input-text form-fields"> Check In:   <Datepicker selected={this.state.date}/>  </div>
                    <div className="input-text form-fields"> Check Out:  <Datepicker selected={this.state.date}/> </div>
                    <Budgetpicker/>
                    <p className="buttons"><Button  onClick={this.getResults} variant="primary" size="lg" >Search</Button><Button variant="danger" size="lg" onClick={this.resetValues}>Reset</Button></p>
                    </div>
                </form>

            </div>
        )
    }

}

export default Body;