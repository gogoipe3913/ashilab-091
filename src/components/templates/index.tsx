import React from "react";
import Top from "../organisms/Top";
import ReserveButton from "../organisms/ReserveButton";
import OnlineStoreLink from "../organisms/OnlineStoreLink";
import About from "../organisms/About";

const Templates: React.FC = () => {
  return (
    <>
      <ReserveButton />
      <Top />
      <OnlineStoreLink />
      <About />
    </>
  );
};

export default Templates;
