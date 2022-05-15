import React from "react";

import { PhaserGameContainer } from "../components/Phaser/React.Phaser.Game.Container";
import { PhaserGame } from "../components/Phaser/React.Phaser.Game";
import { PhaserGameButtons } from "../components/Phaser/React.Phaser.Game.Buttons";

const IndexPage = () => {
    return (
        <>
            <PhaserGameContainer>
                <PhaserGame />
                <PhaserGameButtons />
            </PhaserGameContainer>
        </>
    );
};

export default IndexPage;