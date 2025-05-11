"use client";

import { useEffect, useState } from "react";

// SERVER ACTIONS
import { getExchanges } from "@/actions/get_exchange";

const Exchanges = () => {
  const [exchangeList, setExchangeList] = useState([]);
  useEffect(() => {
    getExchanges().then((response) => {
      console.log(response);
      // console.log(exchangeList);
    });
  }, []);

  return (
    <div className="container flex-v-center-md lg:!gap-10 border-y border-dark bg-lines">
      Exchanges
    </div>
  );
};

export default Exchanges;
