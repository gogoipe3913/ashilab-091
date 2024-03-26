import React from "react";
import Top from "../organisms/Top";
import ReserveButton from "../organisms/ReserveButton";
import OnlineStoreLink from "../organisms/OnlineStoreLink";
import About from "../organisms/About";
import LocationShooting from "../organisms/LocationShooting";
import style from "./style.module.scss";
import FoodEvents from "../organisms/FoodEvents";
import BusinessParty from "../organisms/BusinessParty";
import CookingClass from "../organisms/CookingClass";
import Footer from "../organisms/Footer";
import Access from "../organisms/Access";
import Reservation from "../organisms/Reservation";
import UsageFee from "../organisms/UsageFee";
import { mediaQuery, useMediaQuery } from "../hooks/mediaQuery";
import SpNavigation from "../organisms/SpNavigation";

const Templates: React.FC = () => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div className={style.Templates}>
      {isSp ? <SpNavigation /> : <ReserveButton />}
      <Top />
      <OnlineStoreLink />
      <div className={style.Templates__contents}>
        <About className={style.Templates__about} />
        <LocationShooting className={style.Templates__locationShooting} />
        <FoodEvents className={style.Templates__foodEvents} />
        <BusinessParty className={style.Templates__businessParty} />
        <CookingClass className={style.Templates__cookingClass} />
        <Access className={style.Templates__access} />
        <UsageFee className={style.Templates__usageFee} />
        <Reservation className={style.Templates__reservation} />
      </div>
      <Footer />
    </div>
  );
};

export default Templates;
