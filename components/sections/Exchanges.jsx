"use client";

import { useEffect, useState } from "react";

// SERVER ACTIONS
import { getExchangeList } from "@/actions/get_exchange";

const Exchanges = () => {
  const [exchangeList, setExchangeList] = useState([]);
  useEffect(() => {
    getExchangeList().then((response) => {
      // console.log(response);
      response.res.data.map((element) =>
        setExchangeList((prev) => [...prev, element.id])
      );
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
