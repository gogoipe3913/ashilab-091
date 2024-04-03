import React from "react";
import classNames from "classnames";
import mainImage from "/public/images/image6.png";
import mainImageSp from "/public/images/sp/image6.png";
import style from "./style.module.scss";
import { mediaQuery, useMediaQuery } from "../../hooks/mediaQuery";

type CookingClassProps = {
  className?: string;
};

const CookingClass: React.FC<CookingClassProps> = ({ className = "" }) => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div
      id="cookingClass"
      className={classNames(style.CookingClass, className)}
    >
      <p className={style.CookingClass__title}>【料理教室】</p>
      <div className={style.CookingClass__heading}>
        <img
          src={isSp ? mainImageSp : mainImage}
          alt="料理教室のイメージ画像"
          loading="lazy"
          className={style.CookingClass__headingImage}
        />
        <h2 className={style.CookingClass__headingText}>
          <p className={style.CookingClass__headingTitle}>
            「美味しい」「楽しい」を紡ぐ
          </p>
          <p className={style.CookingClass__headingTitle}>
            アットホームなレッスン
          </p>
          <p className={style.CookingClass__headingSubtitle}>Cooking Class</p>
        </h2>
      </div>
      <p className={style.CookingClass__description}>
        デモンストレーションが見やすいシステムキッチン、プロ仕様の調理器具や料理の映えるお皿など。
        Ashi Labo（アシラボ）には料理教室に必要なものが一通り揃っており、
        食材や調味料をお持ちいただくだけですぐに始められます。
        まっさらなスタジオで何をスパイスにするかはアイデア次第。
        浅草駅からのアクセスもよく、生徒さんたちが通いやすい立地です。
      </p>
      <p className={style.CookingClass__descriptionEn}>
        A system kitchen with easy-to-see demonstrations, professional cooking
        utensils, and plates that make your food stand out. Ashi Labo has
        everything you need for a cooking class. Just bring your ingredients and
        seasonings and you can start right away. What to spice up a blank studio
        depends on your ideas. It has good access from Asakusa Station, making
        it easy for students to commute.
      </p>
    </div>
  );
};

export default CookingClass;
