import React from "react";


class Budgetpicker extends React.Component {
    state = { budget: " " };

    setBudgetChange = (e) => {
        this.setState ({
            budget: e.target.value
        });
    };

    render() {
        return(
            <div>
            <p className="input-text form-fields"> 
            <span>Budget Limit:</span>
            <select className="Budget Limit" onChange={this.setBudgetChange} value={this.state.budget}>
                <option value="">Make a Selection</option>
                <option value="1000">Under $1000</option>
                <option value="3000">Under $3000</option>
                <option value="5000">Under $5000</option>
            </select>
            </p>
            </div>
    
        );
    }
}

export default Budgetpicker