import React from "react";
import backgroundImage from "/images/top_bg.png";
import style from "./style.module.scss";
import LogoMain from "../../atoms/LogoMain";

const NAVIGATION_ITEMS = [
  { id: "about", displayText: "ABOUT," },
  { id: "location", displayText: "LOCATION," },
  { id: "shooting", displayText: "SHOOTING," },
  { id: "events", displayText: "EVENTS," },
  { id: "businessParty", displayText: "BUSINESS PARTY," },
  { id: "cookingClass", displayText: "COOKING CLASS," },
  { id: "access", displayText: "ACCESS," },
];

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
      <div className={style.Top__logoWrapper}>
        <LogoMain />
      </div>
      <p className={style.Top__copyright}>©︎2024 ashi lab</p>
      <div className={style.Top__bottomColumn}>
        <nav>
          <ul className={style.Top__navItems}>
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={index} className={style.Top__navItem}>
                <a href={`#${item.id}`} className={style.Top__navLink}>
                  {item.displayText}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p>2-6-5, Komagata, Taito Ku, Tokyo To, 111-0043, Japan</p>
      </div>
    </div>
  );
};

export default Top;