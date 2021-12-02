import React from "react";
import cn from "classnames/bind";
import styles from "./Card.module.scss";

const cx = cn.bind(styles);
const Card = () => {
  return (
    <div className={cx("hero-image",)}>
      <div className={cx("hero-text")}>
        <h1>I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <button>Hire me</button>
      </div>
    </div>
  );
};
export default Card;
