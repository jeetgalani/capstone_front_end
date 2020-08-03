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


    render () {
        return (
            <div class="background">
                <form id="myForm" class="rcorners2">
                    <div class="form-content">
                    {/* <Scenerypicker selected = {this.state.scenary} />
                    <Budgetpicker selected = {this.state.budget} /> */}
                    <p class="input-text form-fields">
                        <span> Scenery: </span>
                    <select class="Scenery">
                        <option value="Woodland">Woodland</option>
                        <option value="Urban">Urban</option>
                        <option value="Oceanfront">Oceanfront</option>
                    </select>
                    </p>
                    <p class="input-text form-fields"> Check In:   <Datepicker selected={this.state.date} /> </p>
                    <p class="input-text form-fields"> Check Out:  <Datepicker selected={this.state.date}/> </p>
                    <p class="input-text form-fields"> 
                    <span>Budget Limit:</span>
                    <select class="Budget Limit">
                        <option value="">Make a Selection</option>
                        <option value="1000">Under $1000</option>
                        <option value="3000">Under $3000</option>
                        <option value="5000">Under $5000</option>
                    </select>
                    </p>
                     
                    <p class="buttons"><Button variant="primary" size="lg" >Search</Button><Button variant="danger" size="lg" onClick={this.resetValues}>Reset</Button></p>
                    </div>
                </form>

            </div>
        )
    }

}

export default Body;