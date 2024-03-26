import React from "react";
import classNames from "classnames";
import mainImage from "/public/images/image4.png";
import style from "./style.module.scss";

type ReservationProps = {
  className?: string;
};

const Reservation: React.FC<ReservationProps> = ({ className = "" }) => (
  <div id="reservation" className={classNames(style.Reservation, className)}>
    <p className={style.Reservation__title}>【予約表】</p>
    <div className={style.Reservation__heading}>
      <img
        src={mainImage}
        alt="フードイベントのイメージ画像"
        className={style.Reservation__headingImage}
      />
      <h2 className={style.Reservation__headingText}>
        <p className={style.Reservation__headingTitle}>ご予約はこちらまで</p>
        <p className={style.Reservation__headingSubtitle}>Reservation table</p>
      </h2>
    </div>
  </div>
);

export default Reservation;
