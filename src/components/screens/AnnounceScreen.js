import React, { Component } from "react";
import announceImg from "../../assets/svg/bearie-partner.svg";
import ScreenCardI from "../widgets/screencard/ScreenCardI";
import { ScreenArea } from "../config/Palette";

export class AnnounceScreen extends Component {
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

export default AnnounceScreen;
