"use client";

import { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { data } from "@/constants";
// SERVER ACTIONS
import { getExchanges } from "@/actions/get_exchange";
import { ExchangesTable, Loading } from "@/components";

const Exchanges = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCryptoList, setShowCryptoList] = useState(false);
  const [selectedSymbolQuery, setSelectedSymbolQuery] = useState("XRP/USDT");
  const [selectedSymbolLabel, setSelectedSymbolLabel] = useState("XRP");
  const [exchangeData, setExchangeData] = useState([]);

  // * FETCH DATA FUNCTION
  const fetchExchangeData = () => {
    setIsLoading(true);
    getExchanges(selectedSymbolQuery).then((response) => {
      // console.log(response);
      setExchangeData(response.res);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  };

  // *FETCH DATA ON PAGE LOAD
  useEffect(() => {
    fetchExchangeData();
  }, []);

  // *FETCH DATA ON SYMBOL CHANGE
  useEffect(() => {
    fetchExchangeData();
  }, [selectedSymbolQuery]);

  return (
    <div className="container border-y border-dark bg-lines space-y-5 lg:space-y-6">
      {/* DropDown Section */}
      <div className="relative w-fit">
        <div className="flex-v-center flex-wrap">
          <span className="hide-md">Crypto:</span>
          <span className="show-md">Cryptocurrency:</span>
          <button
            type="button"
            onClick={() => setShowCryptoList((prev) => !prev)}
            className="flex-between dark-gradient rounded-lg px-4 py-2.5 border border-card shadow-xl shadow-card/10 w-50 md:w-55"
          >
            <span className="text-gradient">{selectedSymbolLabel}</span>
            <IoIosArrowDown
              className={`transition duration-500 ${
                showCryptoList ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        {/* Dropdowm List */}
        {showCryptoList && (
          <div className="absolute top-[120%] right-0 w-50 md:w-55 dark-gradient-2 rounded-lg border border-card shadow-xl shadow-card/10 overflow-hidden z-100">
            <ul className="flex flex-col w-full divide-y divide-card/30 max-h-100 overflow-y-auto">
              {data.symbols_list.map((symbol, i) => (
                <li key={i} className="w-full">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSymbolQuery(symbol.symbol);
                      setSelectedSymbolLabel(symbol.label);
                      setShowCryptoList(false);
                    }}
                    className={`w-full text-left px-4 py-2 ${
                      selectedSymbolLabel === symbol.label
                        ? "bg-dark/50 backdrop-blur-3xl text-gradient"
                        : ""
                    }`}
                  >
                    {symbol.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="dark-gradient-2 border border-card rounded-xl shadow-2xl shadow-card/20">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {exchangeData && exchangeData.length > 0 ? (
              <ExchangesTable data={exchangeData} />
            ) : (
              <p className="p-4">Network Error, Please Try Again</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exchanges;
