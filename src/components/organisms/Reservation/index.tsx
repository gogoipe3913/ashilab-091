import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

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
        <div
          className={style.Reservation__reservationPageFrame}
          onWheel={handleWheel}
        >
          <iframe
            src="https://squareup.com/appointments/book/8rr5l1bshnapry/LJ0H72RBE83AV/services"
            width="100%"
            height="100%"
            frameBorder={0}
          />
        </div>
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
