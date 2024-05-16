import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./header";
import Footer from "./footer";
import { TickerTape } from "react-ts-tradingview-widgets";

const MajorLayout = () => {
  const symbol = [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR/USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      description: "US DOLLAR CURRENCY INDEX",
      proName: "TVC:DXY",
    },
    {
      description: "",
      proName: "AMEX:SPY",
    },
    {
      description: "",
      proName: "NASDAQ:AAPL",
    },
    {
      description: "",
      proName: "SP:SPX",
    },
    {
      description: "",
      proName: "NASDAQ:TSLA",
    },
    {
      description: "",
      proName: "CME_MINI:ES1!",
    },
    {
      description: "",
      proName: "NASDAQ:QQQ",
    },
    {
      description: "",
      proName: "CURRENCYCOM:US30",
    },
    {
      description: "",
      proName: "CME_MINI:NQ1!",
    },
    {
      description: "",
      proName: "CURRENCYCOM:US100",
    },
    {
      description: "",
      proName: "NASDAQ:TLT",
    },
    {
      description: "",
      proName: "NASDAQ:MARA",
    },
    {
      description: "",
      proName: "NASDAQ:PYPL",
    },
    {
      description: "",
      proName: "CAPITALCOM:US100",
    },
    {
      description: "",
      proName: "AMEX:SOXL",
    },
    {
      description: "",
      proName: "AMEX:IWM",
    },
    {
      description: "",
      proName: "NASDAQ:SQQQ",
    },
    {
      description: "",
      proName: "NYSE:SHOP",
    },
    {
      description: "",
      proName: "NYSE:TWTR",
    },
    {
      description: "",
      proName: "CBOT_MINI:YM1!",
    },
    {
      description: "",
      proName: "NASDAQ:IXIC",
    },
    {
      description: "",
      proName: "COMEX:GC1!",
    },
    {
      description: "",
      proName: "CAPITALCOM:DXY",
    },
    {
      description: "",
      proName: "CAPITALCOM:US30",
    },
    {
      description: "",
      proName: "NASDAQ:META",
    },
    {
      description: "",
      proName: "NASDAQ:COIN",
    },
    {
      description: "",
      proName: "NYSE:BABA",
    },
    {
      description: "",
      proName: "CBOE:VIX",
    },
    {
      description: "",
      proName: "CME:BTC1!",
    },
    {
      description: "",
      proName: "NASDAQ:GOOG",
    },
    {
      description: "",
      proName: "NASDAQ:MSFT",
    },
    {
      description: "",
      proName: "TVC:US10Y",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="major-layout">
        <Outlet />
        <Footer />
      </div>
      <div className="tape-ticker">
        <TickerTape
          colorTheme="light"
          isTransparent="false"
          showSymbolLogo="true"
          locale="en"
          symbols={symbol}
        ></TickerTape>
      </div>
    </>
  );
};

export default MajorLayout;
