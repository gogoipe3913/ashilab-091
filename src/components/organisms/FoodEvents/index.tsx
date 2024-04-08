import React from "react";
import classNames from "classnames";
import mainImage from "/public/images/image4.png";
import mainImageSp from "/public/images/sp/image4.png";
import style from "./style.module.scss";
import { mediaQuery, useMediaQuery } from "../../hooks/mediaQuery";

type FoodEventsProps = {
  className?: string;
};

const FoodEvents: React.FC<FoodEventsProps> = ({ className = "" }) => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div id="foodEvents" className={classNames(style.FoodEvents, className)}>
      <p className={style.FoodEvents__title}>【フードイベント】</p>
      <div className={style.FoodEvents__heading}>
        <img
          src={isSp ? mainImageSp : mainImage}
          alt="フードイベントのイメージ画像"
          height={400}
          loading="lazy"
          className={style.FoodEvents__headingImage}
        />
        <h2 className={style.FoodEvents__headingText}>
          <p className={style.FoodEvents__headingTitle}>
            「作る」「食べる」＋αの
          </p>
          <p className={style.FoodEvents__headingTitle}>多様性空間</p>
          <p className={style.FoodEvents__headingSubtitle}>Food Events</p>
        </h2>
      </div>
      <p className={style.FoodEvents__description}>
        ワインの試飲会や日本酒の利き酒、新レシピの発表会、シェフが腕をふるうランチ付きイベントなど、
        様々なフードイベントにご活用いただけます。レイアウトを変更すれば立食・着席どちらのスタイルも可能で、
        特に料理を発信する企業PRイベントにはもってこい。キッチンスタジオを自由に使い、多様性と価値がある
        フードイベントを仕掛けられます。
      </p>
      <p className={style.FoodEvents__descriptionEn}>
        Wine tastings, sake tastings, new recipe presentations, events with
        lunch where chefs show off their skills, etc. It can be used for various
        food events. By changing the layout, you can have both standing and
        seated dining styles. It is especially suitable for corporate PR events
        promoting food. Use the kitchen studio freely, have variety and value
        You can set up a food event.
      </p>
    </div>
  );
};

export default FoodEvents;
