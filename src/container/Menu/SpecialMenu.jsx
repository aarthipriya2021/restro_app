import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-classic  flex__center">
        <p className="app__specialMenu-menu_heading">Classic Comfy Foods</p>
        <div className="app__specialMenu_menu_items">
          {data.ClassicComfort.map((CC_dish, index) => (
            <MenuItem
              key={CC_dish.title + index}
              title={CC_dish.title}
              price={CC_dish.price}
              tags={CC_dish.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-classic  flex__center">
        <p className="app__specialMenu-menu_heading">Global Fusion</p>
        <div className="app__specialMenu_menu_items">
          {data.GlobalFusion.map((GF_dish, index) => (
            <MenuItem
              key={GF_dish.title + index}
              title={GF_dish.title}
              price={GF_dish.price}
              tags={GF_dish.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
