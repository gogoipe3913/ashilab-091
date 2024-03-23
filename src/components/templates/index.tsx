import React from "react";
import Top from "../organisms/Top";
import ReserveButton from "../organisms/ReserveButton";
import OnlineStoreLink from "../organisms/OnlineStoreLink";

const Templates: React.FC = () => {
  return (
    <>
      <ReserveButton />
      <Top />
      <OnlineStoreLink />
    </>
  );
};

export default Templates;
