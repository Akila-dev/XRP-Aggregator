"use server";

// import { HttpProxyAgent } from "http-proxy-agent";

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

export async function getExchanges() {
  try {
    // const exchange = new binance({ enableRateLimit: true });
    // const ticker = await exchange.fetch_ticker("XRP/USDT");
    // console.log(ticker);

    const tickerData = [];

    exchanges.map(async (exchangeClass, i) => {
      try {
        // const httpsProxy = `http://${process.env.HTTPS_PROXY}:80`;
        // let exchange;
        // if (!binance && !gate) {
        //   exchange = new exchangeClass({
        //     enableRateLimit: true,
        //     httpsProxy,
        //   });
        // } else {
        //   exchange = new exchangeClass({
        //     enableRateLimit: true,
        //   });
        // }

        // const httpsProxy = new HttpProxyAgent(process.env.HTTP_PROXY2);

        let exchange = new exchangeClass({
          enableRateLimit: true,
          // httpsProxy,
        });

        // exchange.proxyUrl = process.env.HTTP_PROXY2;
        // exchange.socksProxy = process.env.SOCKS_PROXY;

        if (exchange.has["fetchTickers"]) {
          try {
            const tickers = await exchange.fetchTickers();
            // const tickers = await exchange.fetchTickers(symbols);
            console.log("SUCCESS: Got Ticker data from" + exchange.name);

            tickerData.push({
              id: tickerData.length + 1,
              // id: i,
              name: exchange.name,
              logo: exchange.urls.logo,
              url: exchange.urls.www,
              symbol: "",
              price: 0,
              volume24h: 0,
              change24h: 0,
              high24h: 0,
              low24h: 0,

              // exchange: exchange,
              tickers: tickers,
            });
          } catch (error) {
            console.log(
              "FAILED: Couldn't get Ticker Data from " + exchange.name
            );
            console.log(error);
          }
        } else {
          console.log("Exchange can't fetch tickers");
        }
      } catch (error) {
        // console.log(error);
        console.log("Couldn't get Ticker Data");
      }
    });

    console.log(tickerData);
    if (tickerData && tickerData.length > 0) {
      return {
        res: tickerData,
        status: 200,
      };
    } else {
      return {
        message: "No Exchange Data Found",
        status: 404,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Network Error, Please Try Again",
      error: error,
      status: 404,
    };
  }
}
