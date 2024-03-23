import React from "react";
import style from "./style.module.scss";

const OnlineStoreLink: React.FC = () => (
  <a href="" className={style.OnlineStoreLink}>
    <span className={style.OnlineStoreLink__text}>
      <span>ONLINE</span>
      <span>STORE</span>
    </span>
  </a>
);

export default OnlineStoreLink;
