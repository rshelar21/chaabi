import React from "react";
import "./DashBoard.css";
import AreaChartCard from "../ChartCards/AreaChartCard.js/AreaChartCard";
import PieChartCard from "../ChartCards/PieChartCard/PieChartCard";
import BarCard from "../ChartCards/BarCard/BarCard";
import DonutChart from "../ChartCards/DonutChart/DonutChart";
import ActivityCard from "../ChartCards/MonthActivity/ActivityCard";
import {
  areaCharts,
  barChartTraining,
  barChartWorkersTrain,
} from "../../lib/constants";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard__body">
        <div className="dashboard__header">
          <h1 className="header__title">hello, Puneet Dhiman</h1>
          <p className="header__description">
            following is your organization’s performance summary.
          </p>
        </div>

        <div className="chart__section">
          <div className="chart__container">
            {areaCharts?.map((item) => (
              <AreaChartCard item={item} key={item.id} />
            ))}
          </div>

          <div className="chart__container__middle">
            <PieChartCard />
            <BarCard span="2/5" barChartData={barChartWorkersTrain} />
          </div>

          <div className="chart__container_body">
            <ActivityCard />
            <DonutChart />
            <BarCard span="" barChartData={barChartTraining} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
