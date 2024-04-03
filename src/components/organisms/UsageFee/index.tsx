import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import { mediaQuery, useMediaQuery } from "../../hooks/mediaQuery";

type UsageFeeProps = {
  className?: string;
};

type PriceBoxProps = {
  title: string;
  titleEn: string;
  time?: string;
  price?: string;
  className?: string;
};

const PriceBox: React.FC<PriceBoxProps> = ({
  title,
  titleEn,
  time,
  price,
  className = "",
}) => (
  <div className={classNames(style.UsageFee__priceBox, className)}>
    <p className={style.UsageFee__priceBoxTitle}>
      <span className={style.UsageFee__priceBoxTitleEnText}>{titleEn}</span>
      <span className={style.UsageFee__priceBoxTitleText}>{title}</span>
    </p>
    {time ? (
      <p className={style.UsageFee__priceBoxTime}>{time}</p>
    ) : (
      <p className={style.UsageFee__priceBoxPrice}>{price}</p>
    )}
  </div>
);

const UsageFee: React.FC<UsageFeeProps> = ({ className = "" }) => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div id="usageFee" className={classNames(style.UsageFee, className)}>
      {!isSp && <p className={style.UsageFee__title}>【ご利用料金】</p>}
      {isSp && (
        <h2 className={style.UsageFee__headingText}>
          <p className={style.UsageFee__headingTitle}>料金に関して</p>
          <p className={style.UsageFee__headingSubtitle}>Usage Fee</p>
        </h2>
      )}
      <div className={style.UsageFee__heading}>
        <ul className={style.UsageFee__contents}>
          <li className={style.UsageFee__content}>
            <div className={style.UsageFee__contentUpper}>
              <h3>
                <p className={style.UsageFee__contentSubtitle}>
                  【キッチンスタジオ】
                </p>
                <p className={style.UsageFee__contentTitle}>Kitchen Studio</p>
              </h3>
              {!isSp && <p>※全て税込価格表示</p>}
            </div>
            <ul className={style.UsageFee__contentStudioFees}>
              <li className={style.UsageFee__contentStudioFee}>
                <PriceBox
                  title="午前"
                  titleEn="morning"
                  time="Am9:00〜Pm12:00"
                />
                <div className={style.UsageFee__prices}>
                  <PriceBox title="平日" titleEn="weekday" price="¥28,100-" />
                  <PriceBox title="土日祝" titleEn="weekend" price="¥38,000-" />
                </div>
              </li>
              <li className={style.UsageFee__contentStudioFee}>
                <PriceBox
                  title="午後"
                  titleEn="afternoon"
                  time="Pm1:00〜Pm5:00"
                />
                <div className={style.UsageFee__prices}>
                  <PriceBox title="平日" titleEn="weekday" price="¥38,500-" />
                  <PriceBox title="土日祝" titleEn="weekend" price="¥49,000-" />
                </div>
              </li>
              <li className={style.UsageFee__contentStudioFee}>
                <PriceBox
                  title="終日"
                  titleEn="all day"
                  time="Am9:00〜Pm5:00"
                />
                <div className={style.UsageFee__prices}>
                  <PriceBox title="平日" titleEn="weekday" price="¥48,120-" />
                  <PriceBox title="土日祝" titleEn="weekend" price="¥71,600-" />
                </div>
              </li>
            </ul>
          </li>
          <li className={style.UsageFee__content}>
            {!isSp && <div className={style.UsageFee__contentSeparator} />}
            <h3>
              <p className={style.UsageFee__contentSubtitle}>
                【撮影・配信機材レンタル】
              </p>
              <p className={style.UsageFee__contentTitle}>
                Filming/
                {isSp && <br />}
                Streaming Equipment Rental
              </p>
            </h3>
            <PriceBox
              title="一式レンタル"
              titleEn="weekday"
              price="¥55,000-"
              className={style.UsageFee__priceSingle}
            />
          </li>
          <li className={style.UsageFee__content}>
            {!isSp && <div className={style.UsageFee__contentSeparator} />}
            <h3>
              <p className={style.UsageFee__contentSubtitle}>
                【オプション・追加料金】
              </p>
              <p className={style.UsageFee__contentTitle}>
                Options/Additional Charges
              </p>
            </h3>
            <p className={style.UsageFee__contentText}>
              見学は15分以内でお願いしております。退室完了予定時刻を過ぎた場合は、延長料金が発生いたします。
              ※当日の状況により延長をお受けできない場合もございますので、あらかじめご承知ください。
              <br />
              弊社にてゴミを処理する場合には、専用ゴミ袋：１袋（45リットル）に廃棄料を含めて1,100円（税込）ご請求いたします。
              ※燃やすゴミと資源ゴミ（空き缶、空き瓶、ペットボトル）で袋が異なります。
              ※紛失・盗難や火災等よる損害について当社では一切の保証を致しかねます。
            </p>
          </li>
          <li className={style.UsageFee__content}>
            {!isSp && <div className={style.UsageFee__contentSeparator} />}
            <h3>
              <p className={style.UsageFee__contentSubtitle}>
                【キャンセル料金】
              </p>
              <p className={style.UsageFee__contentTitle}>Cancellation fee</p>
            </h3>
            <p className={style.UsageFee__contentText}>
              予約確定後、お客様のご都合にてキャンセルなさる場合は、以下の通りキャンセル料金が発生いたしますのでご注意ください。
              予約日の11日前までのキャンセルにつきましては、全額ご返金いたします。
              10～2日前まで：ご予約料金の50% 当日・前日：ご予約料金の100%
              （但しいずれの場合も、振込手数料は差し引かせていただきます）。
            </p>
          </li>
          <li className={style.UsageFee__content}>
            {!isSp && <div className={style.UsageFee__contentSeparator} />}
            <h3>
              <p className={style.UsageFee__contentSubtitle}>
                【お支払い方法】
              </p>
              <p className={style.UsageFee__contentTitle}>Payment method</p>
            </h3>
            <p className={style.UsageFee__contentText}>
              料金のお支払いにつきましては、銀行振込みにてお願いいたします。
              ご予約受付後、一営業日以内に請求書をメールにてお送りいたします。
              請求書到着後、3日以内に料金のお支払い（お振込み）をお願いいたします。
              ※法人のお客様へ
              (お支払い条件、お見積書等の発行書類についてはご相談ください)
            </p>
          </li>
        </ul>
        {!isSp && (
          <h2 className={style.UsageFee__headingText}>
            <p className={style.UsageFee__headingTitle}>料金に関して</p>
            <p className={style.UsageFee__headingSubtitle}>UsageFee</p>
          </h2>
        )}
      </div>
    </div>
  );
};

export default UsageFee;
