import React, { Component } from "react";
import ResourceDataCard from "../widgets/ResourceDataCard";
import data from "../json/Level1Term1-data.json";
import styled from "styled-components";

export class Level1Term1 extends Component {
  render() {
    return (
      <>
        <ResourceArea>
          <div className="container">
            <div className="row justify-content-center">
              {data.map((e) => (
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <ResourceDataCard
                    course={e.course}
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
const ResourceArea = styled.div`
  margin-top: 200px;
  margin-bottom: 20px;
  align-items: center;
  .content {
    text-align: left;
  }
  h1 {
    font-size: 30px;
    color: #0c253a;
  }
  p {
    color: #e0245e;
    font-size: 22px;
  }
  .btn {
    margin-top: 5px;
  }
  @media (max-width: 991px) {
    h1 {
      font-size: 26px;
    }
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
    @media (max-width: 767px) {
      .card {
        margin-bottom: 25px;
        align-items: unset;
      }
    }
  }
`;
