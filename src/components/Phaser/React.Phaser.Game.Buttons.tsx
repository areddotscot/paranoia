import { Box, ButtonExtendedProps } from "grommet";
import React, { Component } from "react";

import Phaser from "phaser";
import Game from "../../game/game";

import { PhaserGameButton } from "./React.Phaser.Game.Button";

import "./React.Phaser.Game.Container.scss";

const PhaserConfig = () => {
    new Phaser.Game({
        width: 720,
        height: 480,
        type: Phaser.CANVAS,
        parent: "Phaser-Game"
    });
}


class PhaserGameButtons extends Component<ButtonExtendedProps> {

    render() {

        return (<Box width="66%" align="center" id="Phaser-Game-Buttons">
            <Box direction="row" align="center" gap="small" pad="xsmall">
                <PhaserGameButton primary label="Start" onClick={PhaserConfig} />
                <PhaserGameButton secondary label="Info" />
            </Box>
        </Box>);

    }

}

export { PhaserGameButtons }