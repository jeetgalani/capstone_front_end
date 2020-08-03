import React from "react";


class Scenerypicker extends React.Component {
    state = {
        scene : null
    };

    Schange = Scene => {
        this.setState ({
            scene: Scene
        });
    };

    render() {
        return(
            <Scenerypicker
                selected={this.state.scene}
                onChange={this.state.Schange}
            
            />
        );
    }
}

export default Scenerypicker