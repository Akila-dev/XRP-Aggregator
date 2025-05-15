"use client";

import { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";

const SortIcon = ({ isSorting, isAscending, className }) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 right-3 ${
        className ? className : ""
      }`}
    >
      <div className="flex-center !flex-col !gap-0 h-4 lg:h-5 w-fit relative">
        <BiCaretUp
          className={`text-base absolute top-0 -translate-y-[7%] right-0 ${
            isSorting && isAscending ? "text-white" : "text-card"
          }`}
        />
        <BiCaretDown
          className={`text-base absolute bottom-0 translate-y-[7%] right-0 ${
            isSorting && !isAscending ? "text-white" : "text-card"
          }`}
        />
      </div>
    </div>
  );
};

const ExchangesTable = ({ data }) => {
  const [sortedData, setSortedData] = useState([...data]);
  const [activeType, setActiveType] = useState("sn");
  const [sortDirection, setSortDirection] = useState(0);
  // const [updateSorting, setUpdateSorting] = useState({
  //   sn:
  // })

  const headers = [
    "Exchange",
    "Pair",
    "Price",
    "24h Volume",
    // "24h Change",
    "24h High",
    "24h Low",
  ];

  const navigateTo = (e, url) => {
    e.preventDefault(); // Prevents default link behavior if needed
    window.open(url, "_blank");
  };

  const handleSort = (type) => {
    if (type !== headers[0] && type !== headers[1]) {
      // if (activeType === type){
      //   setSortDirection((prev) => (prev === 0 ? 1 : 0)); // Sort in descending order
      // }

      setSortDirection((prev) => (prev === 0 ? 1 : 0)); // Sort in descending order
      setActiveType(type); // Sort in ascending order

      let prevData = [...data];

      // IF PRICE IS BEING SORTED
      if (type === "sn") {
        if (sortDirection === 0) {
          prevData.sort((a, b) => a.id - b.id);
        } else {
          prevData.sort((a, b) => b.id - a.id);
        }
      } else if (type === headers[2]) {
        if (sortDirection === 0) {
          prevData.sort((a, b) => a.price - b.price);
        } else {
          prevData.sort((a, b) => b.price - a.price);
        }
      } else if (type === headers[3]) {
        if (sortDirection === 0) {
          prevData.sort((a, b) => a.volume24h - b.volume24h);
        } else {
          prevData.sort((a, b) => b.volume24h - a.volume24h);
        }
      } else if (type === headers[4]) {
        if (sortDirection === 0) {
          prevData.sort((a, b) => a.high24h - b.high24h);
        } else {
          prevData.sort((a, b) => b.high24h - a.high24h);
        }
      } else if (type === headers[5]) {
        if (sortDirection === 0) {
          prevData.sort((a, b) => a.low24h - b.low24h);
        } else {
          prevData.sort((a, b) => b.low24h - a.low24h);
        }
      } else {
        prevData = [...data];
      }

      setSortedData(prevData);
    }
  };

  const currencyFormat = { style: "currency", currency: "USD" };

  return (
    <div className="w-full overflow-y-auto no-scrollbar">
      <table className="w-full min-w-[720px] overflow-hidden rounded-lg">
        <thead className="w-full relative !text-white">
          <tr className="tablerow">
            <th
              onClick={() => handleSort("sn")}
              className="!text-left relative th !min-w-10 lg:!max-w-10"
            >
              #
              <SortIcon
                isSorting={activeType === "sn"}
                isAscending={sortDirection === 0}
              />
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                onClick={() => handleSort(header)}
                className="text-left relative th"
              >
                {header}
                <SortIcon
                  isSorting={activeType === header}
                  isAscending={sortDirection === 0}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full border-t divide-y divide-card/50 border-card/50">
          {sortedData.map((datum, i) => (
            <tr
              onClick={(e) => navigateTo(e, datum.url)}
              key={i}
              className="tablerow"
            >
              <td className="!text-center !min-w-10 lg:!max-w-10">
                {datum.id}
              </td>
              <td className="">{datum.name}</td>
              <td className="">{datum.symbol}</td>
              <td className="">
                {new Intl.NumberFormat("en-US", currencyFormat).format(
                  Number(datum.price).toFixed(2)
                )}
              </td>
              <td className="">
                {new Intl.NumberFormat("en-US", currencyFormat).format(
                  Number(datum.volume24h).toFixed(2)
                )}
              </td>
              <td className="">
                {new Intl.NumberFormat("en-US", currencyFormat).format(
                  Number(datum.high24h).toFixed(2)
                )}
              </td>
              <td className="">
                {new Intl.NumberFormat("en-US", currencyFormat).format(
                  Number(datum.low24h).toFixed(2)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangesTable;
