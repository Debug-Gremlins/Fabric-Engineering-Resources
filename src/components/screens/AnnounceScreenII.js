import React, { Component } from "react";
import announceImg from "../../assets/svg/dedicated-team.svg";
import ScreenCardI from "../widgets/screencard/ScreenCardI";
import { ScreenArea } from "../config/Palette";

export class AnnounceScreenII extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container">
            <ScreenCardI
              imgPath={announceImg}
              title="Online Class Resources"
              description="Contents are depending on Pandemic🖤"
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default AnnounceScreenII;
