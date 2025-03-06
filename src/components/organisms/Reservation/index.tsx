import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";

const RESERVE_LINK = "https://coubic.com/ashilab/3243534";
const REL = "nofollow";
const TARGET = "_blank";

type ReservationProps = {
  className?: string;
};

const Reservation: React.FC<ReservationProps> = ({ className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);
  // なぜかiframeRefを宣言すると内容が丁度いい高さにスクロールされるので残す
  // @ts-ignore
  const iframeRef = useRef(null);
  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div id="reservation" className={classNames(style.Reservation, className)}>
      <p className={style.Reservation__title}>【予約表】</p>
      <div className={style.Reservation__heading}>
        <a
          href={RESERVE_LINK}
          rel={REL}
          target={TARGET}
          className={style.Reservation__reservationPageFrame}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <iframe
            src="https://coubic.com/ashilab/services#pageContent"
            width="100%"
            height={isMobile ? 500 : 700}
            frameBorder={0}
            onWheel={handleWheel}
            loading="lazy"
            className={style.Reservation__frameBody}
          />
        </a>
        <h2 className={style.Reservation__headingText}>
          <p className={style.Reservation__headingTitle}>ご予約はこちらまで</p>
          <p className={style.Reservation__headingSubtitle}>
            Reservation table
          </p>
        </h2>
      </div>
    </div>
  );
};

export default Reservation;
