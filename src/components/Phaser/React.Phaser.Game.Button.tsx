import { Button, ButtonExtendedProps } from "grommet";
import React, { Component, MouseEventHandler } from "react";

import "./React.Phaser.Game.Container.scss";

class PhaserGameButton extends Component<ButtonExtendedProps> {

    render() {

        return (

            <Button {...this.props.onClick } {...this.props} />

        );

    }

}

export { PhaserGameButton }