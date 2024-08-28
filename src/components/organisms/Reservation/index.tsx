import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

const RESERVE_LINK = "https://coubic.com/ashilab/2371791";
const REL = "nofollow";
const TARGET = "_blank";

type ReservationProps = {
  className?: string;
};

const Reservation: React.FC<ReservationProps> = ({ className = "" }) => {
  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

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
            height={700}
            frameBorder={0}
            onWheel={handleWheel}
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
