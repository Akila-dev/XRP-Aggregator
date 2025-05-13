"use client";

import React from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";

const SortIcon = ({ isSorted, isAscending, className }) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 right-3 ${
        className ? className : ""
      }`}
    >
      <div className="flex-center !flex-col !gap-0 h-4 lg:h-5 w-fit relative">
        <BiCaretUp
          className={`text-base absolute top-0 -translate-y-[7%] right-0 ${
            isSorted && isAscending ? "text-white" : "text-card"
          }`}
        />
        <BiCaretDown
          className={`text-base absolute bottom-0 translate-y-[7%] right-0 ${
            isSorted && !isAscending ? "text-white" : "text-card"
          }`}
        />
      </div>
    </div>
  );
};

const ExchangesTable = ({ data }) => {
  const headers = [
    "Exchange",
    "Pair",
    "Price",
    "24h Volume",
    // "24h Change",
    "24h High",
    "24h Low",
  ];
  return (
    <div className="w-full overflow-y-auto no-scrollbar">
      <table className="w-full min-w-[720px] overflow-hidden rounded-lg">
        <thead className="w-full relative !text-white">
          <tr className="tablerow">
            <th className="!text-center relative th">
              #<SortIcon />
            </th>
            {headers.map((header, index) => (
              <th key={index} className="text-left relative th">
                {header} <SortIcon />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full border-t divide-y divide-card/50 border-card/50">
          {data.map((datum, i) => (
            <tr
              onClick={() => navigateTo(datum.url)}
              key={i}
              className="tablerow"
            >
              <td className="!text-center">{i + 1}</td>
              <td className="">{datum.name}</td>
              <td className="">{datum.symbol}</td>
              <td className="">
                {datum.price ? `$${Number(datum.price).toFixed(2)}` : "-"}
              </td>
              <td className="">
                {datum.volume24h
                  ? `$${Number(datum.volume24h).toFixed(2)}`
                  : "-"}
              </td>
              {/* <td className="">
                  {datum.change24h
                    ? `$${Number(datum.change24h).toFixed(2)}`
                    : "-"}
                </td> */}
              <td className="">
                {datum.high24h ? `$${Number(datum.high24h).toFixed(2)}` : "-"}
              </td>
              <td className="">
                {datum.low24h ? `$${Number(datum.low24h).toFixed(2)}` : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangesTable;
