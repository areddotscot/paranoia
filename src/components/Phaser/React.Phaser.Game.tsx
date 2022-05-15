import React, { Component } from "react";
import Phaser from "phaser";

import "./React.Phaser.Game.scss";


class PhaserGame extends Component<{}, Phaser.Types.Core.GameConfig> {

    componentDidMount () {
    }

    render () {
        return <div id="Phaser-Game"></div>
    }
    
}

export { PhaserGame }