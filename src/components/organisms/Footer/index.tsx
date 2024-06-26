import React from "react";
import style from "./style.module.scss";
import LogoMain from "../../atoms/LogoMain";
import { NAVIGATION_ITEMS } from "../Top";
import { mediaQuery, useMediaQuery } from "../../hooks/mediaQuery";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div id="footer" className={style.Footer}>
      <div className={style.Footer__logoWrapper}>
        <LogoMain isColored={true} />
      </div>
      {!isSp && (
        <nav className={style.Footer__nav}>
          <ul className={style.Footer__navItems}>
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={index} className={style.Footer__navItem}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={600}
                  className={style.Footer__navLink}
                >
                  {item.displayText}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <p className={style.Footer__address}>
        2-6-5, Komagata, Taito Ku, Tokyo To, 111-0043, Japan
      </p>
    </div>
  );
};

export default Footer;
