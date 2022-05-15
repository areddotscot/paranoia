import React, { Component } from "react"
import { Avatar, Button, Header, Nav } from "grommet";

class GrommetHeader extends Component {

    render() {
        return (<Header background="brand" height="96px" width="full" pad="small">
            <Avatar src="" />
            <Nav direction="row">
                <Button secondary label="Hi" onClick={()=>0} />
            </Nav>
        </Header>);
    }
}

export { GrommetHeader }