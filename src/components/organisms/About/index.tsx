import React from "react";
import mainImage from "/public/images/image2.png";
import mainImageSp from "/public/images/sp/image2.png";
import style from "./style.module.scss";
import classNames from "classnames";
import { mediaQuery, useMediaQuery } from "../../hooks/mediaQuery";

type AboutProps = {
  className?: string;
};

const About: React.FC<AboutProps> = ({ className = "" }) => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div id="about" className={classNames(style.About, className)}>
      <div className={style.About__heading}>
        <img
          src={isSp ? mainImageSp : mainImage}
          alt="キッチンのイメージ画像"
          className={style.About__headingImage}
        />
        <h2 className={style.About__headingText}>
          <p className={style.About__headingTitle}>
            キッチンとバルコニーのある
          </p>
          <p className={style.About__headingTitle}>レンタルスタジオ</p>
          <p className={style.About__headingSubtitle}>
            with kitchen and balcony rental studio
          </p>
        </h2>
      </div>
      <p className={style.About__description}>
        都営浅草線・浅草駅から徒歩５分のアクセス良好な場所。
        <br />
        黒とグレーを基調とした落ち着いたシンプルな空間。
        <br />
        バルコニーからは駒形の街並が伺え、自然光が加わることによってシックさとやわらかさがちょうど良いハーモニー。
        交流・創作・発信のベースとして、自由な発想でお使いいただけます。
      </p>
      <p className={style.About__descriptionEn}>
        Easy access, 5-minute walk from Asakusa Station on the Toei Asakusa
        Line.
        <br />
        The space is calm and simple, with black and gray as the basic color
        scheme. <br />
        The balcony overlooks the Komagata cityscape, and the addition of
        natural light creates just the right harmony of chic and softness. You
        can use it freely as a base for exchange, creation, and communication.
      </p>
    </div>
  );
};

export default About;
