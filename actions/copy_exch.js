// "use server";

import ccxt, {
  alpaca,
  apex,
  ascendex,
  bigone,
  binance,
  bingx,
  bit2c,
  bitbank,
  bitbns,
  bitfinex,
  bitflyer,
  bitget,
  bithumb,
  bitmart,
  bitmex,
  bitopro,
  bitrue,
  bitso,
  bitstamp,
  bitteam,
  bitvavo,
  bl3p,
  blockchaincom,
  blofin,
  btcalpha,
  btcbox,
  btcmarkets,
  btcturk,
  bybit,
  cex,
  coinbase,
  coinbaseexchange,
  coinbaseinternational,
  coincatch,
  coincheck,
  coinex,
  coinlist,
  coinmate,
  coinmetro,
  coinone,
  coinsph,
  coinspot,
  cryptocom,
  cryptomus,
  defx,
  delta,
  deribit,
  derive,
  digifinex,
  ellipx,
  exmo,
  gate,
  gemini,
  hashkey,
  hitbtc,
  hollaex,
  htx,
  huobijp,
  hyperliquid,
  idex,
  independentreserve,
  indodax,
  kraken,
  krakenfutures,
  kucoin,
  kucoinfutures,
  kuna,
  latoken,
  lbank,
  luno,
  mercado,
  mexc,
  ndax,
  novadax,
  oceanex,
  okcoin,
  okx,
  onetrading,
  oxfun,
  p2b,
  paradex,
  paymium,
  phemex,
  poloniex,
  probit,
  timex,
  tokocrypto,
  tradeogre,
  upbit,
  vertex,
  wavesexchange,
  whitebit,
  woo,
  woofipro,
  xt,
  yobit,
  zaif,
  zonda,
} from "ccxt";

const exchanges = [
  alpaca,
  apex,
  ascendex,
  bigone,
  binance,
  bingx,
  bit2c,
  bitbank,
  bitbns,
  bitfinex,
  bitflyer,
  bitget,
  bithumb,
  bitmart,
  bitmex,
  bitopro,
  bitrue,
  bitso,
  bitstamp,
  bitteam,
  bitvavo,
  bl3p,
  blockchaincom,
  blofin,
  btcalpha,
  btcbox,
  btcmarkets,
  btcturk,
  bybit,
  cex,
  coinbase,
  coinbaseexchange,
  coinbaseinternational,
  coincatch,
  coincheck,
  coinex,
  coinlist,
  coinmate,
  coinmetro,
  coinone,
  coinsph,
  coinspot,
  cryptocom,
  cryptomus,
  defx,
  delta,
  deribit,
  derive,
  digifinex,
  ellipx,
  exmo,
  gate,
  gemini,
  hashkey,
  hitbtc,
  hollaex,
  htx,
  huobijp,
  hyperliquid,
  idex,
  independentreserve,
  indodax,
  kraken,
  krakenfutures,
  kucoin,
  kucoinfutures,
  kuna,
  latoken,
  lbank,
  luno,
  mercado,
  mexc,
  ndax,
  novadax,
  oceanex,
  okcoin,
  okx,
  onetrading,
  oxfun,
  p2b,
  paradex,
  paymium,
  phemex,
  poloniex,
  probit,
  timex,
  tokocrypto,
  tradeogre,
  upbit,
  vertex,
  wavesexchange,
  whitebit,
  woo,
  woofipro,
  xt,
  yobit,
  zaif,
  zonda,
];

const symbols = [
  "XRP/USDT",
  "BTC/USDT",
  "ETH/USDT",
  "BNB/USDT",
  "SOL/USDT",
  "DOGE/USDT",
  "LTC/USDT",
  "TRX/USDT",
  "ADA/USDT",
  "DOT/USDT",
  "LINK/USDT",
  "UNI/USDT",
  "AAVE/USDT",
  "AVAX/USDT",
];

export function getExchanges() {
  try {
    // const exchange = new binance({ enableRateLimit: true });
    // const ticker = await exchange.fetch_ticker("XRP/USDT");
    // console.log(ticker);

    const tickerData = [];

    exchanges.map(async (exchangeClass, i) => {
      tickerData.push({
        id: i,
        name: i,
        logo: i,
        url: i,
        symbol: i,
        price: i,
        volume24h: i,
        change24h: i,
        high24h: i,
        low24h: i,
      });

      const httpsProxy = `http://${process.env.HTTPS_PROXY}:80`;
      let exchange;
      if (!binance && !gate) {
        exchange = new exchangeClass({
          enableRateLimit: true,
          httpsProxy,
        });
      } else {
        exchange = new exchangeClass({
          enableRateLimit: true,
        });
      }

      if (exchange.has["fetchTickers"]) {
        console.log("SUCCESS: Got Ticker data from" + exchange.name);
        success_count += 1;
        const tickers = await exchange.fetchTickers(symbols);
      }

      // try {
      //   const httpsProxy = `http://${process.env.HTTPS_PROXY}:80`;
      //   let exchange;
      //   if (!binance && !gate) {
      //     exchange = new exchangeClass({
      //       enableRateLimit: true,
      //       httpsProxy,
      //     });
      //   } else {
      //     exchange = new exchangeClass({
      //       enableRateLimit: true,
      //     });
      //   }

      //   if (exchange.has["fetchTickers"]) {
      //     try {
      //       console.log("SUCCESS: Got Ticker data from" + exchange.name);
      //       success_count += 1;
      //       const tickers = await exchange.fetchTickers(symbols);

      //       tickerData.push({
      //         id: tickerData.length + 1,
      //         // id: i,
      //         name: exchange.name,
      //         logo: exchange.urls.logo,
      //         url: exchange.urls.www,
      //         symbol: "",
      //         price: 0,
      //         volume24h: 0,
      //         change24h: 0,
      //         high24h: 0,
      //         low24h: 0,

      //         // exchange: exchange,
      //         tickers: tickers,
      //       });
      //     } catch (error) {
      //       console.log(
      //         "FAILED: Couldn't get Ticker Data from " + exchange.name
      //       );
      //       fail_count += 1;
      //     }
      //   } else {
      //     console.log("Exchange can't fetch tickers");
      //     fail_count += 1;
      //   }

      //   if (exchangeClass === exchanges[exchanges.length - 1]) {
      //     finished_fetch = true;
      //     console.log("Finished Fetching Exchanges Data");
      //     console.log({
      //       success: success_count,
      //       fail: fail_count,
      //     });
      //   }
      // } catch (error) {
      //   // console.log(error);
      //   console.log("Couldn't get Ticker Data");
      // }
    });

    // if (finished_fetch) {
    //   return {
    //     res: tickerData,
    //     status: 200,
    //   };
    // } else {
    //   return {
    //     message: "No Exchange Data Found",
    //     status: 404,
    //   };
    // }

    return {
      res: tickerData,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Network Error, Please Try Again",
      error: error,
      status: 404,
    };
  }
}
