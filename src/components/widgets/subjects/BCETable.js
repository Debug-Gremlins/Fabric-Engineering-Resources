import React from "react";
import { CourseArea } from "../../config/Palette";
import data from "../../../json/bce-data.json";
import { Component } from "react";
import BCEInfo from "../../database/lecturerData/BCEInfo";

class BCETable extends Component {
  render() {
    return (
      <div>
        <CourseArea>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                <div className="section-title">
                  <h1>Business &amp; Communicative English (BCE)</h1>
                </div>
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
              </div>
            </div>
          </div>
        </CourseArea>
        <BCEInfo />
      </div>
    );
  }
}

export default BCETable;
