"use client";

import { useEffect, useState } from "react";

import axios, { isCancel, AxiosError } from "axios";

const Exchanges = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.diadata.org/v1/assetQuotation/XRPL/0x0000000000000000000000000000000000000000"
      )
      .then((response) => {
        console.log("🚀 ~ .then ~ response:", response);
      });
  }, []);

  return (
    <div className="container flex-v-center-md lg:!gap-10 border-y border-dark bg-lines">
      Exchanges
    </div>
  );
};

export default Exchanges;
