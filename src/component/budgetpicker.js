import React from "react";


class Budgetpicker extends React.Component {
    state = { budgets: null };

    Bchange = Budget => {
        this.setState ({
            budgets: Budget
        });
    };

    render() {
        return(
            <Budgetpicker
                selected={this.state.budgets}
               // onChange={this.state.Bchange}
            
            />
        );
    }
}

export default Budgetpicker