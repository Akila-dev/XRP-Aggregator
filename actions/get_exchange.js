"use server";
import axios from "axios";

export const getCryptoList = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}/v1/cryptocurrency/map`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
        },
      }
    );

    // ! IF SUCCESSFULLY RETRIEVED DATA
    if (data) {
      return { res: data };
    }
  } catch (error) {
    // console.log(error);
    return {
      message: "Network Error, Please Try Again",
      error: error,
    };
  }
};

export const getExchangeList = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}/v1/exchange/map`,
      {
        params: {
          limit: 100,
          crypto_id: 1,
        },
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
        },
      }
    );

    // ! IF SUCCESSFULLY RETRIEVED DATA
    if (data) {
      return { res: data };
    }
  } catch (error) {
    // console.log(error);
    return {
      message: "Network Error, Please Try Again",
      error: error,
    };
  }
};

export const getExchanges = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}/v1/exchange/info`,
      {
        params: {
          limit: 100,
          crypto_id: 1,
        },
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
        },
      }
    );

    // ! IF SUCCESSFULLY RETRIEVED DATA
    if (data) {
      return { res: data };
    }
  } catch (error) {
    // console.log(error);
    return {
      message: "Network Error, Please Try Again",
      error: error,
    };
  }
};
