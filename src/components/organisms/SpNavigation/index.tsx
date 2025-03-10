import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { NAVIGATION_ITEMS } from "../Top";
import LogoMain from "../../atoms/LogoMain";
import { Link } from "react-scroll";

const RESERVE_LINK = "https://coubic.com/ashilab/3243534";
const REL = "nofollow";
const TARGET = "_blank";

const SpNavigation: React.FC = () => {
  const [isDisplayedNavigation, setIsDisplayedNavigation] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;

    if (isDisplayedNavigation) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  }, [isDisplayedNavigation]);

  return (
    <div className={style.SpNavigation}>
      <a
        href={RESERVE_LINK}
        rel={REL}
        target={TARGET}
        className={style.SpNavigation__reserve}
      >
        RESERVE
      </a>
      <button
        className={style.SpNavigation__hamburger}
        onClick={() => {
          setIsDisplayedNavigation(!isDisplayedNavigation);
        }}
      >
        <span
          className={classNames(
            style.SpNavigation__hamburgerLine,
            isDisplayedNavigation
              ? style["SpNavigation__hamburgerLine--top"]
              : ""
          )}
        />
        <span
          className={classNames(
            style.SpNavigation__hamburgerLine,
            isDisplayedNavigation
              ? style["SpNavigation__hamburgerLine--middle"]
              : ""
          )}
        />
        <span
          className={classNames(
            style.SpNavigation__hamburgerLine,
            isDisplayedNavigation
              ? style["SpNavigation__hamburgerLine--bottom"]
              : ""
          )}
        />
      </button>
      {/* ナビゲーションコンテンツ */}
      <div
        className={classNames(
          style.SpNavigationContents,
          isDisplayedNavigation ? style["SpNavigationContents--displayed"] : ""
        )}
      >
        <div className={style.SpNavigationContents__top}>
          <p className={style.SpNavigationContents__address}>
            2-6-5, Komagata, Taito Ku, Tokyo To, 111-0043, Japan
          </p>
          <div className={style.SpNavigationContents__logoWrapper}>
            <LogoMain />
          </div>
        </div>
        <p className={style.SpNavigationContents__copyright}>©︎2024 ashi lab</p>
        <nav className={style.SpNavigationContents__nav}>
          <ul className={style.SpNavigationContents__navItems}>
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={index} className={style.SpNavigationContents__navItem}>
                {index === 0 ? null : (
                  <span
                    className={style.SpNavigationContents__navItemSeparator}
                  />
                )}
                <Link
                  to={item.id}
                  smooth={true}
                  duration={600}
                  className={style.SpNavigationContents__navLink}
                  onClick={() => {
                    setIsDisplayedNavigation(false);
                  }}
                >
                  {item.displayText}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SpNavigation;
