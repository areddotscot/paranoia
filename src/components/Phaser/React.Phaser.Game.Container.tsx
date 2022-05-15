import React, { Component } from "react";
import { Box } from "grommet";

import "./React.Phaser.Game.Container.scss";

class PhaserGameContainer extends Component {

    /* change to page */
    render () {
        return (<Box align="center" id="Phaser-Game-Container">
            {this.props.children}
        </Box>);
    }

}

export { PhaserGameContainer }