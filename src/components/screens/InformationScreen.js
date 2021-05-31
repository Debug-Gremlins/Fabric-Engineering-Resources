import React, { Component } from "react";
import ScreenCardII from "../widgets/ScreenCardII";
import { ScreenArea } from "../config/Palette";
import infoImg from "../../assets/balb.png";

export class InformationScreen extends Component {
  render() {
    return (
      <>
        <ScreenArea>
          <div className="container">
            <ScreenCardII
              imgPath={infoImg}
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

export default InformationScreen;
