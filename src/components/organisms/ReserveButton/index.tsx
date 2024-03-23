import React from "react";
import style from "./style.module.scss";

const ReserveButton: React.FC = () => (
  <button className={style.ReserveButton}>
    <span className={style.ReserveButton__text}>RESERVE</span>
  </button>
);

export default ReserveButton;
