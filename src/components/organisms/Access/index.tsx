import React from "react";
import classNames from "classnames";
import mainImage from "/public/images/image6.png";
import style from "./style.module.scss";

type AccessProps = {
  className?: string;
};

const Access: React.FC<AccessProps> = ({ className = "" }) => (
  <div id="access" className={classNames(style.Access, className)}>
    <div className={style.Access__heading}>
      <img
        src={mainImage}
        alt="料理教室のイメージ画像"
        className={style.Access__headingImage}
      />
      <h2 className={style.Access__headingText}>
        <p>アクセス情報</p>
        <p className={style.Access__headingSubtitle}>Access</p>
      </h2>
    </div>
    <p className={style.Access__description}>
      〒111-0043 東京都台東区駒形2-6-5柳原ビル1階 Tel 03-6883-6906
    </p>
    <p className={style.Access__descriptionEn}>
      2-6-5, Komagata, Taito Ku, Tokyo To, 111-0043, Japan
    </p>
  </div>
);

export default Access;
