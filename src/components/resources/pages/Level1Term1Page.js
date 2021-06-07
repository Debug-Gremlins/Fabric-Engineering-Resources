import React, { Component } from "react";
import ResourceDataCard from "../widgets/ResourceDataCard";
import data from "../json/Level1Term1-data.json";
import { ResourceArea } from "../Palette";
export class Level1Term1 extends Component {
  render() {
    return (
      <>
        <ResourceArea>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {data.map((e) => (
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <ResourceDataCard
                    course={e.course}
                    courseCode={e.courseCode}
                    lecturer={e.lecturer}
                    accessLink={e.access}
                  />
                </div>
              ))}
            </div>
          </div>
        </ResourceArea>
      </>
    );
  }
}

export default Level1Term1;
