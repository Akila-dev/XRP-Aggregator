import ccxt, { binance } from "ccxt";
import { HttpProxyAgent } from "http-proxy-agent";

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

const getExchanges = async () => {
  const httpAgent = new HttpProxyAgent(process.env.HTTP_PROXY);

  const exchange = new binance({
    // proxy: process.env.HTTP_PROXY2,
    timeout: 30000,
    verbose: false,
    httpAgent,
  });

  // Fetch the ticker data for the specified symbol
  const tickers = await exchange.fetchTickers(symbols);

  return JSON.stringify(tickers);
};

export default async function handler(req, res) {
  // Initialize the exchange with a proxy
  try {
    const result = await getExchanges();
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
