import React from "react";
import classNames from "classnames";
import mainImage from "/public/images/image3.png";
import mainImageSp from "/public/images/sp/image3.png";
import style from "./style.module.scss";
import { mediaQuery, useMediaQuery } from "../../hooks/mediaQuery";

type LocationShootingProps = {
  className?: string;
};

const LocationShooting: React.FC<LocationShootingProps> = ({
  className = "",
}) => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div
      id="locationShooting"
      className={classNames(style.LocationShooting, className)}
    >
      <p className={style.LocationShooting__title}>【スチール・動画撮影】</p>
      <div className={style.LocationShooting__heading}>
        <img
          src={isSp ? mainImageSp : mainImage}
          alt="撮影スタジオのイメージ画像"
          className={style.LocationShooting__headingImage}
        />
        <h2 className={style.LocationShooting__headingText}>
          <p className={style.LocationShooting__headingTitle}>
            クリエイティビティーを刺激する
          </p>
          <p className={style.LocationShooting__headingTitle}>
            ちょっぴり大人な空間
          </p>
          <p className={style.LocationShooting__headingSubtitle}>
            Location Shooting
          </p>
        </h2>
      </div>
      <p className={style.LocationShooting__description}>
        窓から注ぎ込むやわらかな自然光、黒とグレーを基調としたちょっぴり大人なインテリア。
        <br />
        浅草ではありそうでなかったシンプルなキッチン付きスタジオです。
        <br />
        料理関連の教室や撮影はもちろん、物撮り、作品撮り、インタビュー、カタログ撮影や動画
        YouTube撮影など、多様なシチュエーションに対応します。
        <br />
        また1F店舗では定食をメインにしたランチや、夕方からはディナー&バータイムを年中無休でオープン。
        撮影途中のお食事はもちろん、アフターの打ち上げにも最適です。（別途料金が必要です。）
      </p>
      <p className={style.LocationShooting__descriptionEn}>
        Gentle natural light comes in through the windows, and the interior
        features black and gray for a slightly more mature look.
        <br /> This is a simple studio with a kitchen, something you wouldn’t
        expect to find in Asakusa.
        <br />
        In addition to cooking-related classes and photography, we also offer
        object photography, work photography, interviews, catalog photography,
        and videos.
        <br />
        Compatible with various combinations such as YouTube shooting. In
        addition, the 1st floor store is open 365 days a year for lunch, mainly
        set meals, and dinner and bar time in the evening. It’s perfect not only
        for a meal during the shoot, but also for a post-launch event.
      </p>
    </div>
  );
};

export default LocationShooting;
