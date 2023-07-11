import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { sidebarLinks } from "../../lib/constants";

const SideBar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="menu__bar">
        <CiMenuFries className="menu__icon" onClick={() => setActive(true)} />
      </div>
      <div className={` ${active ? "active__tab" : "sidebar__body"}`}>
        <div className="cancel__btn">
          <RxCross1 className="close__icon" onClick={() => setActive(false)} />
        </div>
        <div className="sidebar__logo">
          <img src="/assets/logo.svg" alt="logo" className="logo__img" />
        </div>

        <div className="siderbar__links">
          <div>
            <ul className="links__list">
              {sidebarLinks.map((item) => {
                return (
                  <li key={item?.id} className="list__item">
                    <Link
                      to="/"
                      className={`${item?.active ? "active__link" : ""} link`}
                    >
                      {item?.icons}
                      <span className="link__title">{item?.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
