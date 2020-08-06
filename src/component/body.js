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
        budget: "5000",
        date: null, 
        counter: 0,
        counter2: 1,
    };

    resetValues = () => {
        document.getElementById("myForm").reset();
        const currentDate = new Date();
        this.setState({counter: this.state.counter+1});
        this.setState({counter2: this.state.counter2+1})
        this.setState({date: currentDate})
    }

    getResults = async () => {
        //const result = await fetch(`http://localhost:8080/result/scenery/${this.state.scenery}`)
        //const destination = await result.json()
        this.props.history.push(`/result/find/scenery=${this.state.scenery}/budgetLimit=${this.state.budget}`)
        //console.log(destination);
    }


    setSceneryChange = (e) => {
        console.log("I am changing the scenery");
          this.setState ({
              scenery: e.target.value
          });
      };

      setBudgetChange = (e) => {
        console.log("I am changing the budget");
          this.setState ({
              budget: e.target.value
          });
      };



    render () {
        return (
            <div className="rcorners2 carousel-background">
                <form id="myForm" >
                    <div className="form-content form-fields">
                    <Scenerypicker changer={this.setSceneryChange} />
                    <div className="input-text form-fields"> <i class="fas fa-suitcase"></i> Check In:   <Datepicker key={this.state.counter} selected={this.state.check_in}/>  </div>
                    <div className="input-text form-fields"> <i class="fas fa-luggage-cart"></i> Check Out:  <Datepicker key={this.state.counter2}  selected={this.state.check_out}/> </div>
                    <Budgetpicker changer={this.setBudgetChange}/>
                    <p className="buttons"><Button  onClick={this.getResults} variant="primary" size="lg" >Search</Button><Button variant="danger" size="lg" onClick={this.resetValues}>Reset</Button></p>
                    </div>
                   
                </form>

            </div>
        )
    }

}

export default withRouter(Body);