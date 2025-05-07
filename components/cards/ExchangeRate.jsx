"use client";

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function ExchangeRate() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BINANCE:XRPUSDT|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "headerFontSize": "medium",
          "backgroundColor": "#000000",
          "widgetFontColor": "#dedede",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "#39ff14",
          "topColor": "rgba(57, 255, 20, 0.1)",
          "bottomColor": "#3434340f"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="h-105 w-full p-4 lg:p-6 rounded-lg lg:rounded-3xl bg-lines-2">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        {/* <div className="tradingview-widget-copyright"></div> */}
      </div>
    </div>
  );
}

export default memo(ExchangeRate);
