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

const Templates: React.FC = () => {
  return (
    <>
      <ReserveButton />
      <Top />
      <OnlineStoreLink />
      <About />
      <LocationShooting className={style.Templates__locationShooting} />
      <FoodEvents className={style.Templates__foodEvents} />
      <BusinessParty className={style.Templates__businessParty} />
      <CookingClass className={style.Templates__cookingClass} />
      <Access className={style.Templates__access} />
      <Reservation className={style.Templates__reservation} />
      <Footer />
    </>
  );
};

export default Templates;
