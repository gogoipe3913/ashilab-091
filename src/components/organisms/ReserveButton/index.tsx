import React from "react";
import style from "./style.module.scss";

const RESERVE_LINK = "https://coubic.com/ashilab/2371791";
const REL = "nofollow";
const TARGET = "_blank";

const ReserveButton: React.FC = () => (
  <a
    href={RESERVE_LINK}
    rel={REL}
    target={TARGET}
    className={style.ReserveButton}
  >
    <span className={style.ReserveButton__text}>RESERVE</span>
  </a>
);

export default ReserveButton;
