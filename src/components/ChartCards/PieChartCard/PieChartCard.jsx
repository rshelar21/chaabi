import React from "react";
import "./PieChartCard.css";
import Dots from "./Dots";
import Pie from "../../Charts/Pie";
import { dotsData } from "../../../lib/constants";

const PieChartCard = () => {
  return (
    <>
      <div className="pie__body">
        <span className="pie__heading">chapter wise status</span>
        <div>
          <Pie />
        </div>

        <div className="piechart__decription">
          <div>
            {dotsData
              .map((item) => <Dots key={item?.id} item={item} />)
              .slice(0, 3)}
          </div>

          <div>
            {dotsData
              .map((item) => <Dots key={item?.id} item={item} />)
              .slice(3)}
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChartCard;
