import ccxt, { binance, exchanges } from "ccxt";
// import { HttpProxyAgent } from "http-proxy-agent";

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

export async function GET(req) {
  // Initialize the exchange with a proxy
  //   const httpAgent = new HttpProxyAgent(process.env.HTTP_PROXY);

  try {
    const exchange = new exchanges.binance();
    exchange.httpProxy = "http://127.0.0.1:1087";
    //   exchange.timeout = 30000;
    //   exchange.proxyUrl = process.env.HTTPS_PROXY;
    //   exchange.updateProxySettings();

    // Fetch the ticker data for the specified symbol
    const tickers = await exchange.fetchTickers(symbols);
    console.log(tickers);

    return new Response(JSON.stringify(tickers), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching ticker:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching ticker data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
