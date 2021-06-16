import axios from "axios";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import CustomCard from "./CustomCard";

const InfoCard = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries/")
      .then((res) => {
        console.log(res);
        setCovidData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <CovidDataArea>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {covidData.map((e) => (
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card">
                  <div key={e.id}>
                    <CustomCard
                      countryName={e.country}
                      countryImg={e.countryInfo.flag}
                      cases={e.cases}
                      recovered={e.recovered}
                      todayRecovered={e.todayRecovered}
                      todayCases={e.todayCases}
                      todayDeaths={e.todayDeaths}
                      deaths={e.deaths}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CovidDataArea>
    </div>
  );
};

export default InfoCard;

const CovidDataArea = styled.div`
  margin-top: 200px;
  h3 {
    color: #191f29e3;
  }
  h5 {
    text-align: left;
    color: #16162f;
  }
  p {
    text-align: left;
    font-size: 18px;
    color: #350c0c;
  }
  .info {
    padding-top: 30px;
  }
  .flag {
    max-width: 30%;
  }
  @media (max-width: 767px) {
    .info {
      text-align: center;
    }
    .flag {
      max-width: 25%;
    }
  }
`;
