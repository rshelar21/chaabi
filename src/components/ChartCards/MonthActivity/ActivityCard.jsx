import React from "react";
import "./ActivityCard.css";
import { BsArrowUp } from "react-icons/bs";
import { data } from "../../../lib/constants";

const ActivityCard = () => {
  return (
    <>
      <div className="activity__body">
        <p className="activity__heading">monthly training activity</p>
        <div className="secondry__heading">
          <BsArrowUp className="activity__icon" />
          <span className="activity__description">
            16% more enrollees this month
          </span>
        </div>

        <div className="course__body">
          {data.map((item) => (
            <div className="course__section" key={item.id}>
              <div className="coures__dot" />
              <div className="couse__info">
                <h1 className="course__title">{item.title}</h1>
                <p className="course_desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
