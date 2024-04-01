import React from "react";
import style from "./style.module.scss";

const RESERVE_LINK =
  "https://squareup.com/appointments/book/8rr5l1bshnapry/LJ0H72RBE83AV/start";
const REL = "nofollow";

const ReserveButton: React.FC = () => (
  <a href={RESERVE_LINK} rel={REL} className={style.ReserveButton}>
    <span className={style.ReserveButton__text}>RESERVE</span>
  </a>
);

export default ReserveButton;
