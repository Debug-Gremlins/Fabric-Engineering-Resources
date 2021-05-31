import React, { Component } from "react";
import announceImg from "../../assets/svg/bearie-partner.svg";
import ScreenCardI from "../widgets/screencard/ScreenCardI";
import {ScreenArea} from '../config/Palette'

export class AnnounceScreen extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container">
            <ScreenCardI
              imgPath={announceImg}
              title="CT & Term Exam Updates!"
              description="Get CT and Term related all updates here. Contents are coming
                  soon 🖤"
            />
          </div>
        </ScreenArea>
      </>
    );
  }
}

export default AnnounceScreen;
