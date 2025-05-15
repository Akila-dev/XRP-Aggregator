"use client";

import { useEffect, useState } from "react";

import ccxt, { exchanges, NetworkError } from "ccxt";

import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";
import { data, my_exchange_data } from "@/constants";

import { ExchangesTable, Loading } from "@/components";
import { time } from "framer-motion";

const Exchanges = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNetworkError, setShowNetworkError] = useState(false);
  const [showCryptoList, setShowCryptoList] = useState(false);
  const [selectedSymbolQuery, setSelectedSymbolQuery] = useState("XRP/USDT");
  const [selectedSymbolLabel, setSelectedSymbolLabel] = useState("XRP");
  const [exchangeData, setExchangeData] = useState([]);
  const [filteredExchangeData, setFilteredExchangeData] = useState([]);

  const filterExchangeData = (ex_data, symbol) => {
    setExchangeData(ex_data);

    if (ex_data && ex_data.length > 0 && symbol) {
      const prev_data = [...my_exchange_data.data, ...ex_data];
      // console.log("🚀 ~ filterExchangeData ~ ex_data:", ex_data);
      const data_no_null = prev_data.filter(
        (item) => item !== null && item !== undefined
      );

      const filteredData = data_no_null.map((item, i) => {
        if (item !== undefined && item && item.tickers[symbol]) {
          item.id = i + 1;
          item.symbol = symbol;
          item.price = item.tickers[symbol]
            ? item.tickers[symbol].last
              ? item.tickers[symbol].last
              : 0
            : 0;
          item.volume24h = item.tickers[symbol]
            ? item.tickers[symbol].quoteVolume
              ? item.tickers[symbol].quoteVolume
              : 0
            : 0;

          item.high24h = item.tickers[symbol]
            ? item.tickers[symbol].high
              ? item.tickers[symbol].high
              : 0
            : 0;
          item.low24h = item.tickers[symbol]
            ? item.tickers[symbol].low
              ? item.tickers[symbol].low
              : 0
            : 0;

          return item;
        } else {
          item.id = i + 1;
          item.symbol = symbol;
          item.price = 0;
          item.volume24h = 0;
          item.high24h = 0;
          item.low24h = 0;

          return item;
        }
      });

      setFilteredExchangeData(filteredData);
      // console.log(filteredData);
    }
  };

  // ! Fetch Data function
  const fetchExchangeData = async () => {
    setIsLoading(true);
    // console.log("loading tickers start");
    // ! Fetch Exchange Data
    try {
      const exchangeList = data.exchanges_list.map(async (exchangeString) => {
        try {
          const exchange = new exchanges[exchangeString]({
            enableRateLimit: true,
            timeout: 30000,
          });
          const response = await exchange.fetchTickers(data.exchange_symbols);

          return {
            id: 0,
            name: exchange.name,
            logo: exchange.urls.logo,
            url: exchange.urls.www,
            symbol: "",
            price: 0,
            volume24h: 0,
            high24h: 0,
            low24h: 0,
            tickers: response,
          };
        } catch (error) {
          // console.log("EXCHANGE DATA FAILED!");
          return null;
        }
      });

      // ! Set Exchange Data to the respone data
      filterExchangeData(await Promise.all(exchangeList), selectedSymbolQuery);
    } catch (error) {
      // console.error("Error fetching ticker data:");
      // setError(error.message);
      setShowNetworkError(true);
    }

    setIsLoading(false);
    console.log("loading tickers end");
  };

  useEffect(() => {
    fetchExchangeData();
  }, []);

  // *FETCH DATA ON SYMBOL CHANGE
  useEffect(() => {
    filterExchangeData(exchangeData, selectedSymbolQuery);
  }, [exchangeData, selectedSymbolQuery]);

  return (
    <div
      id="exchanges"
      className="container border-y border-dark bg-lines space-y-5 lg:space-y-6"
    >
      {/* DropDown Section */}
      <div className="relative w-fit">
        <div className="flex-v-center flex-wrap">
          {/* <span className="hide-md">Crypto:</span> */}
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
          <button
            onClick={() => {
              setIsLoading(true);
              fetchExchangeData();
            }}
            className={`"bg-dark/50 text-neon p-[0.5em] size-[2.5em] flex-center border border-card shadow-xl shadow-card/10 rounded-full cursor-pointer ${
              isLoading
                ? "animate-spin opacity-90 !pointer-events-none"
                : "pointer-events-auto"
            }`}
          >
            <BsArrowRepeat className="text-neon scale-125" />
          </button>
        </div>
        {/* Dropdowm List */}
        {showCryptoList && (
          <div className="absolute top-[120%] right-0 w-50 md:w-55 dark-gradient-2 rounded-lg border border-card shadow-xl shadow-card/10 overflow-hidden z-100">
            <ul className="flex flex-col w-full divide-y divide-card/30 max-h-[15em] overflow-y-auto no-scrollbar">
              {data.symbols_list.map((symbol, i) => (
                <li key={i} className="w-full">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSymbolQuery(symbol.symbol);
                      setSelectedSymbolLabel(symbol.label);
                      setShowCryptoList(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:!bg-card/50 hover:backdrop-blur-3xl ${
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
            {showNetworkError ? (
              <div>
                <p className="p-4">Network Error, Please Try Again</p>
                <button
                  onClick={() => fetchExchangeData()}
                  className="p-4 bg-dark/50 text-gradient rounded-lg"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div>
                {filteredExchangeData && filteredExchangeData.length > 0 ? (
                  <ExchangesTable data={filteredExchangeData} />
                ) : (
                  <div>
                    <p className="p-4">Couldn't Find Any Data to display.</p>
                    <button
                      onClick={() => fetchExchangeData()}
                      className="p-4 bg-dark/50 text-gradient rounded-lg"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {!isLoading &&
        !showNetworkError &&
        filteredExchangeData.length <= my_exchange_data.data.length && (
          <p className="p-4">
            Slow network, please check your network and{" "}
            <button
              onClick={() => fetchExchangeData()}
              className="inline text-gradient"
            >
              Try Again
            </button>
          </p>
        )}
    </div>
  );
};

export default Exchanges;
