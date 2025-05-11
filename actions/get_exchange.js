// "use server";

import axios from "axios";

import cctx, {
  version,
  exchanges,
  alpaca,
  apex,
  binance,
  bingx,
  kraken,
} from "ccxt";

// export const getCryptoList = async () => {
//   try {
//     const { data } = await axios.get(
//       `${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}/v1/cryptocurrency/map`,
//       {
//         headers: {
//           "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
//         },
//       }
//     );

//     // ! IF SUCCESSFULLY RETRIEVED DATA
//     if (data) {
//       return { res: data };
//     }
//   } catch (error) {
//     // console.log(error);
//     return {
//       message: "Network Error, Please Try Again",
//       error: error,
//     };
//   }
// };

// export const getExchangeList = async () => {
//   try {
//     const { data } = await axios.get(
//       `${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}/v1/exchange/map`,
//       {
//         params: {
//           limit: 100,
//           crypto_id: 1,
//         },
//         headers: {
//           "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
//         },
//       }
//     );

//     // ! IF SUCCESSFULLY RETRIEVED DATA
//     if (data) {
//       return { res: data };
//     }
//   } catch (error) {
//     // console.log(error);
//     return {
//       message: "Network Error, Please Try Again",
//       error: error,
//     };
//   }
// };

export const getExchanges = async () => {
  try {
    const exchange = new binance({ enableRateLimit: true });
    const ticker = await exchange.fetch_ticker("BTC/USDT");
    console.log(ticker);

    // const ticker = await binance().publicGetTicker24hr();

    // console.log(new cctx.binance());

    // if (version && exchanges) {
    //   return {
    //     res: ticker,
    //     // exchange: exchange,
    //     exchanges: Object.keys(exchanges),
    //   };
    // }
  } catch (error) {
    console.log(error);
    return {
      message: "Network Error, Please Try Again",
      error: error,
    };
  }
};
