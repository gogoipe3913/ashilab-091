import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

type AccessProps = {
  className?: string;
};

const Access: React.FC<AccessProps> = ({ className = "" }) => (
  <div id="access" className={classNames(style.Access, className)}>
    <div className={style.Access__heading}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.771700923244!2d139.79271291277436!3d35.70723527246443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec7d097b761%3A0x2841b1d21c0780bb!2sAshi!5e0!3m2!1sja!2sjp!4v1711386610794!5m2!1sja!2sjp"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      />
      <h2 className={style.Access__headingText}>
        <p className={style.Access__headingTitle}>アクセス情報</p>
        <p className={style.Access__headingSubtitle}>Access</p>
      </h2>
    </div>
    <div className={style.Access__description}>
      <p>〒111-0043 東京都台東区駒形2-6-5柳原ビル1階</p>
      <p>Tel 03-6883-6906</p>
    </div>
    <p className={style.Access__descriptionEn}>
      2-6-5, Komagata, Taito Ku, Tokyo To, 111-0043, Japan
    </p>
  </div>
);

export default Access;
