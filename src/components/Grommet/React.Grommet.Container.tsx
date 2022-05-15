import React, { Component } from "react";
import { Main } from "grommet";

import "./React.Grommet.Container.scss";

class GrommetContainer extends Component {

    render() {
        return (<Main id="Grommet-Container-Main">
            {this.props.children}
        </Main>);
    }

}

export { GrommetContainer }