import React from "react";
import backgroundImage from "/images/top_bg.png";
import style from "./style.module.scss";
import LogoMain from "../../atoms/LogoMain";

const Top: React.FC = () => {
  return (
    <div id="Top" className={style.Top}>
      <img
        src={backgroundImage}
        alt="キッチンスタジオの画像"
        width={"100%"}
        height={"100%"}
        className={style.Top__background}
      />
      <LogoMain />
    </div>
  );
};

export default Top;
