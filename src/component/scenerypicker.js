import React from "react";


class Scenerypicker extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            
        };
      }


    render() {
        return(
            <div>
                 <p className="input-text form-fields">
                        <span> Scenery: </span>
                    <select className="Scenery"  onChange={this.props.changer}>
                        <option value="all" selected>Make a Selection</option>
                        <option value="Woodland">Woodland</option>
                        <option value="Urban">Urban</option>
                        <option value="Oceanfront">Oceanfront</option>
                    </select>
                    </p>
            </div>
        );
    }
}

export default Scenerypicker