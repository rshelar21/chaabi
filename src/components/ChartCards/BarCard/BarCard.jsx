import React from "react";
import "./BarCard.css";
import Bar from "../../Charts/Bar";

const BarCard = ({ span, barChartData }) => {
  return (
    <>
      <div className="barchart__body" style={{ gridColumn: span }}>
        <div className="header">
          <p className="barchat__heading">{barChartData.title}</p>
          <p className="barchat__heading">{barChartData.days}</p>
        </div>

        <div>
          <Bar
            series={barChartData.series}
            xaxis={barChartData.xaxis}
            stacked={barChartData?.stacked}
          />
        </div>
      </div>
    </>
  );
};

export default BarCard;
