import React from "react";
import classNames from "classnames";
import mainImage from "/public/images/image5.png";
import style from "./style.module.scss";

type BusinessPartyProps = {
  className?: string;
};

const BusinessParty: React.FC<BusinessPartyProps> = ({ className = "" }) => (
  <div
    id="businessParty"
    className={classNames(style.BusinessParty, className)}
  >
    <p className={style.BusinessParty__title}>【交流会・懇親会】</p>
    <div className={style.BusinessParty__heading}>
      <img
        src={mainImage}
        alt="交流会・懇親会のイメージ画像"
        className={style.BusinessParty__headingImage}
      />
      <h2 className={style.BusinessParty__headingText}>
        <p className={style.BusinessParty__headingTitle}>
          食事と会話の心地よい
        </p>
        <p className={style.BusinessParty__headingTitle}>コミュニケーション</p>
        <p className={style.BusinessParty__headingSubtitle}>Business Party</p>
      </h2>
    </div>
    <p className={style.BusinessParty__description}>
      セミナーや講演後の交流会、出版記念イベント後のパーティ、食事を介した社員研修など、
      もっとコミュニケーションを深めたいという時にもAshi Laboが活躍します。
      食べて、飲んで、話して、笑って、心地よい時間を共有できる場所。
      キッチンで調理してもよし、ケータリングやデリで買ったメニューを持ち込んでも◎！
    </p>
    <p className={style.BusinessParty__descriptionEn}>
      Social gatherings after seminars and lectures, parties after publication
      commemorative events, employee training through meals, etc. Ashi Labo is
      also useful when you want to deepen communication. A place where you can
      eat, drink, talk, laugh, and share pleasant moments. You can cook in the
      kitchen, or bring in the menu you bought from the caterer or deli!
    </p>
  </div>
);

export default BusinessParty;
