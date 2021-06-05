import React from "react";
import { CourseTitle, OverlayButton } from "../../config/Palette";
import data from "../../../json/bce-data.json";
import { Component } from "react";
import BCEInfo from "../../contact/BCEInfo";

class BCETable extends Component {
  render() {
    return (
      <div>
        <CourseTitle>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                <div className="section-title">
                  <h1>Business &amp; Communicative English (BCE)</h1>
                </div>
                <OverlayButton>
                  <a id="topbce" href="#bottombce">
                    <i className="fa fa-arrow-circle-down" aria-hidden="true" />
                    <span>Bottom</span>
                  </a>
                </OverlayButton>
                <table>
                  <tr>
                    <th>Date</th>
                    <th>Lecturer</th>
                    <th>Discussed Topics</th>
                    <th colSpan={3}>Resources</th>
                  </tr>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.key}>
                        <td>{row.Date}</td>
                        <td>{row.Lecturer}</td>
                        <td>{row.DiscussedTopics}</td>
                        <td className="link">
                          <a
                            href={row.DriveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Lecture Video
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <OverlayButton>
                  <a id="bottomchem" href="#topbce">
                    <i className="fa fa-arrow-circle-up" aria-hidden="true" />
                    <span>Top</span>
                  </a>
                </OverlayButton>
              </div>
            </div>
          </div>
        </CourseTitle>
        <BCEInfo />
      </div>
    );
  }
}

export default BCETable;
