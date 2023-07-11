import React from "react";
import "./DonutChart.css";
import Donut from "../../Charts/Donut";

const DonutChart = () => {
  return (
    <>
      <div className="donut__body">
        <p className="donutchart__headline">quiz passing %</p>

        <div className="donut__container">
          <div className="donut__chart">
            <Donut />
          </div>

          <div className="donut__data">
            <div className="data__container">
              <p className="donut__dot" />
              <div className="data__values">
                <h1 className="data__title">passed</h1>
                <p className="data__total">1423 workers</p>
              </div>
            </div>

            <div className="data__container">
              <p
                className="donut__dot"
                style={{ backgroundColor: "#ED1C24" }}
              />
              <div className="data__values">
                <h1 className="data__title">failed</h1>
                <p className="data__total">134 workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonutChart;
