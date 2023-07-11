import React from "react";
import "./AreaChartCard.css";
import { BsGraphUpArrow } from "react-icons/bs";
import Area from "../../Charts/Area";

const AreaChartCard = ({ item }) => {
  return (
    <>
      <div className="chart__box">
        <p className="chart__heading">{item.title}</p>

        <div className="chart__description">
          <div className="chart__data">
            <h1 className="total__value">{item.total}</h1>

            <div className="growth__section">
              <div
                className={`chart__growth ${
                  !item.profit ? " growth__down" : ""
                }`}
              >
                <BsGraphUpArrow className="chart__growth__icon" />
                <span className="growth__ratio">20%</span>
              </div>

              <p className="">{item.growth}</p>
            </div>
          </div>

          <div className="chart__img">
            <Area profit={item.profit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AreaChartCard;
