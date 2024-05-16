import React from "react";
import "./style.css";
import i18next from "i18next";
import { Link } from "react-router-dom";
import Finance from "../../images/finance.png";
import Experienced from "../../images/experienced.png";
import Decent from "../../images/decentralized.png";
import Rotate from "../../images/rotate.png";
import Loader from "../../images/loader.gif";
import Cost from "../../images/cost-efficiency.png";
import World from "../../images/worldcoverage.png";
import Strong from "../../images/strong-security.png";
import High from "../../images/high-liquidity.png";
import Security from "../../images/security.png";
import Fast from "../../images/fast-payment.png";
import { FaArrowRight } from "react-icons/fa";
import CustomerImg from "../../images/customer.png";
import ClientsData from "../../components/json/clients.json";
import ReactStars from "react-rating-stars-component";
import { Carousel } from "react-bootstrap";
import { MarketOverview } from "react-ts-tradingview-widgets";
import DocumentTitle from "react-document-title";
import { Tabs } from "antd";
import { Col, Row } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppNotifications from "../../components/toast/AppNotification";

const TabPane = Tabs.TabPane;

const Home = () => {
  const tabs = [
    {
      title: "Cryptocurrencies",
      symbols: [
        {
          s: "BINANCE:BTCUSDT",
        },
        {
          s: "BITSTAMP:BTCUSD",
        },
        {
          s: "BINANCE:ETHUSDT",
        },
        {
          s: "BINANCE:SOLUSDT",
        },
        {
          s: "BINANCE:EOSUSDT",
        },
        {
          s: "BINANCE:ADAUSDT",
        },
        {
          s: "BINANCE:FTMUSDT",
        },
        {
          s: "BINANCE:AVAXUSDT",
        },
        {
          s: "BINANCE:BNBUSDT",
        },
        {
          s: "BINANCE:MATICUSDT",
        },
        {
          s: "BINANCE:SHIBUSDT",
        },
        {
          s: "BINANCE:RUNEUSDT",
        },
        {
          s: "BINANCE:CRVUSDT",
        },
        {
          s: "BINANCE:OPUSDT",
        },
      ],
    },
    {
      title: "Stocks",
      symbols: [
        {
          s: "NYSE:JPM",
          d: "Jpmorgan Chase & Co",
        },
        {
          s: "NYSE:WFC",
          d: "Wells Fargo Co New",
        },
        {
          s: "NYSE:BAC",
          d: "Bank Amer Corp",
        },
        {
          s: "NYSE:HSBC",
          d: "Hsbc Hldgs Plc",
        },
        {
          s: "NYSE:C",
          d: "Citigroup Inc",
        },
        {
          s: "NYSE:MA",
          d: "Mastercard Incorporated",
        },
        {
          s: "NASDAQ:AAPL",
          d: "Apple",
        },
        {
          s: "NASDAQ:GOOGL",
          d: "Google Inc",
        },
        {
          s: "NASDAQ:MSFT",
          d: "Microsoft Corp",
        },
        {
          s: "NASDAQ:FB",
          d: "Meta Platforms, Inc",
        },
        {
          s: "NYSE:ORCL",
          d: "Oracle Corp",
        },
        {
          s: "NASDAQ:INTC",
          d: "Intel Corp",
        },

        {
          s: "NASDAQ:AMZN",
          d: "Amazon Com Inc",
        },
        {
          s: "NYSE:BABA",
          d: "Alibaba Group Hldg Ltd",
        },
        {
          s: "NYSE:T",
          d: "At&t Inc",
        },
        {
          s: "NYSE:WMT",
          d: "Wal-mart Stores Inc",
        },
        {
          s: "NYSE:V",
          d: "Visa Inc",
        },
      ],
    },
    {
      title: "Indices",
      symbols: [
        {
          s: "FOREXCOM:SPXUSD",
          d: "S&P 500",
        },
        {
          s: "FOREXCOM:NSXUSD",
          d: "US 100",
        },
        {
          s: "FOREXCOM:DJI",
          d: "Dow 30",
        },
        {
          s: "INDEX:NKY",
          d: "Nikkei 225",
        },
        {
          s: "INDEX:DEU40",
          d: "DAX Index",
        },
        {
          s: "FOREXCOM:UKXGBP",
          d: "UK 100",
        },
      ],
      originalTitle: "Indices",
    },
    {
      title: "Futures",
      symbols: [
        {
          s: "CME_MINI:ES1!",
          d: "S&P 500",
        },
        {
          s: "CME:6E1!",
          d: "Euro",
        },
        {
          s: "COMEX:GC1!",
          d: "Gold",
        },
        {
          s: "NYMEX:CL1!",
          d: "Crude Oil",
        },
        {
          s: "NYMEX:NG1!",
          d: "Natural Gas",
        },
        {
          s: "CBOT:ZC1!",
          d: "Corn",
        },
      ],
      originalTitle: "Futures",
    },
    {
      title: "Bonds",
      symbols: [
        {
          s: "CME:GE1!",
          d: "Eurodollar",
        },
        {
          s: "CBOT:ZB1!",
          d: "T-Bond",
        },
        {
          s: "CBOT:UB1!",
          d: "Ultra T-Bond",
        },
        {
          s: "EUREX:FGBL1!",
          d: "Euro Bund",
        },
        {
          s: "EUREX:FBTP1!",
          d: "Euro BTP",
        },
        {
          s: "EUREX:FGBM1!",
          d: "Euro BOBL",
        },
      ],
      originalTitle: "Bonds",
    },
    {
      title: "Forex",
      symbols: [
        {
          s: "FX:EURUSD",
          d: "EUR/USD",
        },
        {
          s: "FX:GBPUSD",
          d: "GBP/USD",
        },
        {
          s: "FX:USDJPY",
          d: "USD/JPY",
        },
        {
          s: "FX:USDCHF",
          d: "USD/CHF",
        },
        {
          s: "FX:AUDUSD",
          d: "AUD/USD",
        },
        {
          s: "FX:USDCAD",
          d: "USD/CAD",
        },
      ],
      originalTitle: "Forex",
    },
  ];

  return (
    <DocumentTitle title="Home | Payeer Pty Limited">
      <div className="home-main">
        <div className="home-main-1">
          <div className="home-main-1-1">
            <h1>{i18next.t("tnhome1")}</h1>
            <div className="hr"></div>
          </div>
          <div className="home-main-1-2">
            <p>{i18next.t("tnhome2")}</p>
          </div>
          <div className="home-main-1-3">
            <button>
              <Link to="/register">
                {i18next.t("tnhome3")}
                <FaArrowRight />
              </Link>
            </button>
          </div>

          <div className="home-main-1-2"></div>
        </div>
        <div className="home-main-2">
          <div>
            <div className="home-main-2-1">
              <img src={Decent} alt="decentralized" />

              <div className="home-main-2-1-1">
                <h2>{i18next.t("tnhome4")}</h2>
                <p>{i18next.t("tnhome5")}</p>
              </div>
            </div>
            <div className="home-main-2-1">
              <img src={Experienced} alt="experienced" />

              <div className="home-main-2-1-1">
                <h2>{i18next.t("tnhome6")}</h2>
                <p>{i18next.t("tnhome7")}</p>
              </div>
            </div>
            <div className="home-main-2-1">
              <img src={Finance} alt="financial proficient" />
              <div className="home-main-2-1-1">
                <h2>{i18next.t("tnhome8")}</h2>
                <p>{i18next.t("tnhome9")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-main-3">
          <h2>
            {i18next.t("tnhome10")} <span>{i18next.t("tnhome11")}</span>
          </h2>
          <div className="home-main-3-a">
            <div className="home-main-3-1">
              <img
                className="home-main-img-1"
                src={Rotate}
                alt="rotating animation"
              />
              <img className="home-main-img-2" src={Loader} alt="bitcoin" />
            </div>
            <div className="home-main-3-2">
              <h3>{i18next.t("tnhome12")}</h3>
              <div className="home-main-3-2-1">
                <p>{i18next.t("tnhome13")}</p>
                <p>{i18next.t("tnhome14")}</p>
              </div>

              <Tabs
                className="home-main-3-2-2"
                type="card"
                defaultActiveKey={1}
              >
                <TabPane
                  className="home-main-3-2-cont"
                  tab={i18next.t("tnhome68")}
                  key="1"
                >
                  <p className="tab-text">{i18next.t("tnhome15")}</p>
                  <Link className="tab-link" to="/about">
                    {" "}
                    {i18next.t("tnhome16")}
                  </Link>
                </TabPane>
                <TabPane
                  id="tab-md"
                  className="home-main-3-2-cont"
                  tab={i18next.t("tnhome69")}
                  key="2"
                >
                  <p className="tab-text">{i18next.t("tnhome17")}</p>
                  <Link className="tab-link" to="/about">
                    {" "}
                    {i18next.t("tnhome70")}
                  </Link>
                </TabPane>
                <TabPane
                  className="home-main-3-2-cont"
                  tab="OUR GUARANTEES"
                  key="3"
                >
                  <p className="tab-text">{i18next.t("tnhome18")}</p>
                  <Link className="tab-link" to="/about">
                    {" "}
                    {i18next.t("tnhome16")}
                  </Link>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="home-main-4">
          <div className="home-main-4-1">
            <h6>{i18next.t("tnhome19")}</h6>
            <h2>
              {i18next.t("tnhome20")} <span>Payeer Pty Limited</span>
            </h2>
            <div className="hr-1"></div>
            <p>{i18next.t("tnhome21")}</p>
          </div>
          <div className="home-main-4-2">
            <div className="home-main-4-2-1">
              <Row
                className="home-main-4-row"
                gutter={{
                  xs: 6,
                  sm: 18,
                  md: 24,
                  lg: 32,
                }}
              >
                <Col className="home-main-4-col">
                  <img src={Cost} alt="cost efficiency" />
                  <h3>{i18next.t("tnhome22")}</h3>
                  <p>{i18next.t("tnhome23")}</p>
                </Col>
                <Col className="home-main-4-col">
                  <img src={World} alt="regulations" />
                  <h3>{i18next.t("tnhome24")}</h3>
                  <p>{i18next.t("tnhome25")}</p>
                </Col>
                <Col className="home-main-4-col">
                  <img src={Strong} alt="protection" />
                  <h3>{i18next.t("tnhome26")}</h3>
                  <p>{i18next.t("tnhome27")}</p>
                </Col>
                <Col className="home-main-4-col">
                  <img src={High} alt="high liquidity" />
                  <h3>{i18next.t("tnhome28")}</h3>
                  <p>{i18next.t("tnhome29")}</p>
                </Col>
                <Col className="home-main-4-col">
                  <img src={Security} alt="security" />
                  <h3>{i18next.t("tnhome30")}</h3>
                  <p>{i18next.t("tnhome31")}</p>
                </Col>
                <Col className="home-main-4-col">
                  <img src={Fast} alt="payments" />
                  <h3>{i18next.t("tnhome32")}</h3>
                  <p>{i18next.t("tnhome33")}</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="home-main-5">
          <div className="home-main-5-1">
            <h2>
              {i18next.t("tnhome34")} <span>{i18next.t("tnhome35")}</span>
            </h2>
            <div className="home-main-5-1-1">
              <p>{i18next.t("tnhome36")}</p>
            </div>
          </div>
          <div className="home-main-5-2">
            <Row
              className="home-main-5-row"
              gutter={{
                xs: 6,
                sm: 18,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="home-main-5-col">
                <h3>{i18next.t("tnhome37")}</h3>
                <h5>{i18next.t("tnhome38")}</h5>
                <h5>{i18next.t("tnhome39")}</h5>
                <h5>{i18next.t("tnhome40")}</h5>
                <h4>{i18next.t("tnhome41")}</h4>
                <Link to="/register">{i18next.t("tnhome42")}</Link>
              </Col>
              <Col className="home-main-5-col">
                <h3>{i18next.t("tnhome43")}</h3>
                <h5>{i18next.t("tnhome44")}</h5>
                <h5>{i18next.t("tnhome45")}</h5>
                <h5>{i18next.t("tnhome46")}</h5>
                <h4>{i18next.t("tnhome47")}</h4>
                <Link to="/register">{i18next.t("tnhome42")}</Link>
              </Col>
              <Col className="home-main-5-col">
                <h3>{i18next.t("tnhome48")}</h3>
                <h5>{i18next.t("tnhome49")}</h5>
                <h5>{i18next.t("tnhome50")}</h5>
                <h5>{i18next.t("tnhome51")}</h5>
                <h4>{i18next.t("tnhome52")}</h4>
                <Link to="/register">{i18next.t("tnhome42")}</Link>
              </Col>
            </Row>
          </div>
        </div>
        <div className="home-main-6">
          <div className="home-main-6-1">
            <h6>{i18next.t("tnhome53")}</h6>
            <h2>{i18next.t("tnhome54")}</h2>
            <div className="hr-3"></div>
            <h5>{i18next.t("tnhome55")}</h5>
            <p>{i18next.t("tnhome56")}</p>
            <h5>{i18next.t("tnhome57")}</h5>
            <p>{i18next.t("tnhome58")}</p>
            <h5>{i18next.t("tnhome59")}</h5>
            <p>{i18next.t("tnhome60")}</p>
            <div className="home-main-6-link-cont">
              <Link to="/about">{i18next.t("tnhome61")}</Link>
              <Link to="/contact-us">{i18next.t("tnhome62")}</Link>
            </div>
          </div>

          <div className="market-home-6-2">
            <div>
              <MarketOverview
                autosize={true}
                colorTheme="dark"
                dateRange="1D"
                showChart={true}
                locale="en"
                isTransparent={false}
                showSymbolLogo={true}
                showFloatingTooltip={true}
                plotLineColorGrowing="rgba(41, 98, 255, 1)"
                plotLineColorFalling="rgba(41, 98, 255, 1)"
                gridLineColor="rgba(255, 255, 255, 0)"
                scaleFontColor="rgba(120, 123, 134, 1)"
                belowLineFillColorGrowing="rgba(41, 98, 255, 0.12)"
                belowLineFillColorFalling="rgba(41, 98, 255, 0.12)"
                belowLineFillColorGrowingBottom="rgba(41, 98, 255, 0)"
                belowLineFillColorFallingBotto="rgba(41, 98, 255, 0)"
                symbolActiveColor="rgba(41, 98, 255, 0.12)"
                tabs={tabs}
              ></MarketOverview>
            </div>
          </div>
        </div>
        <div className="home-main-7">
          <div className="home-main-7-1">
            <img src={CustomerImg} alt="customer service" />
          </div>
          <div className="home-main-7-2">
            <h2>
              {i18next.t("thome32")}
              <span> {i18next.t("thome33")}</span>
            </h2>
            <div>
              <p>{i18next.t("thome34")}</p>
              <p>{i18next.t("thome35")}</p>

              <p> {i18next.t("thome36")} </p>
            </div>
          </div>
        </div>
        <div className="home-main-8">
          <h2>
            {i18next.t("tnhome63")} <span>{i18next.t("tnhome64")}</span>
          </h2>
          <Carousel
            fade
            controls={true}
            indicators={false}
            pause="hover"
            className="home-carousel"
          >
            {ClientsData.map((data, i) => {
              return (
                <Carousel.Item key={i} className="carousel-item">
                  <div className="carousel-img-cont">
                    <img className="carousel-img" src={data.image} alt="user" />
                  </div>

                  <p className="carousel-comment">{data.comment}</p>
                  <h4 className="carousel-name">{data.name}</h4>
                  <ReactStars
                    count={5}
                    value={parseInt(data.rating)}
                    size={24}
                    edit={false}
                    isHalf={true}
                    activeColor="#ffd700"
                    className="carousel-rating"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>

        <div className="home-main-9">
          <h2>
            {i18next.t("tnhome63")} <span>{i18next.t("tnhome65")}</span>
          </h2>
          <div>
            <div className="col-md-6">
              <div className="card card-nav-tabs">
                <div className="alert alert-success">
                  <h3>
                    <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                    {i18next.t("tnhome66")}
                  </h3>
                </div>
                <div className="card-content">
                  <div className="tab-content text-center">
                    <div className="tab-pane active" id="deposit">
                      <div
                        className="table-responsive"
                        style={{
                          height: "500px",
                          overflowY: "auto",
                          overflowX: "auto",
                        }}
                      >
                        <div className="home-main-9-marg">
                          <table
                            className="table"
                            style={{ backgroundColor: "wheat" }}
                          >
                            <thead>
                              <tr>
                                <th className="text-center">Status</th>
                                <th className="text-center">Amount(USD)</th>
                                <th className="text-center">Wallet</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$10,000.00</td>
                                <td className="text-center">
                                  3a17c5984af22cd7a443f14457841b3b19a51ea75a30e18bc6a82e4f8732dbca
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$51,000.00</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$24,100.00</td>
                                <td className="text-center">
                                  f007e92cc9f82ba9c8c40c481eec7315fa9abcd85e7249a6cb57e38a2cf22d3e
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-success btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$4,000.00</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$500</td>
                                <td className="text-center">
                                  00db85ef40da34f3ea76aa60f0b2053eec2d90121e450791c18d8edbfedde6f1
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$240,000</td>
                                <td className="text-center">
                                  b21a418a44ed8b56118facefe7aa8d26541dff811b8a8ca65cfa1346d62c5c48
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$17,000</td>
                                <td className="text-center">
                                  1e652d2899a1d058a20041a9faaeb5dc009101ca412ff09c387e6b281bd1db8b
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$51,000</td>
                                <td className="text-center">
                                  6a49e66a66f75e72e6bd383ac798792af204a6693708912ad0d48e363a2ab7a7
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$21,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$6,000</td>
                                <td className="text-center">
                                  797ba039291417fdbdb411ea0a102d23090cde9ac7799ff605f40b5db484891d
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$9,000</td>
                                <td className="text-center">
                                  f0b66ce7a33bbc63bf50050beaf52be71709c359aa1d344bb90f943690485661
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$23,000</td>
                                <td className="text-center">
                                  2083e95ada3c584471ba5982e16c5dc2a6e464d3c170555ea8c708668be9383b
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$51,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$5,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">5,000</td>
                                <td className="text-center">
                                  15c3a97edbd606bd1e455aa2875677f5c6cd2b804e9054e898f640d313e39781
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$18,000</td>
                                <td className="text-center">
                                  66c13496e9d53a2402fd49bbe91df298164472679cc868bbfebbabb4844d784c
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$2,500</td>
                                <td className="text-center">
                                  ce972a6b82135fcba0890ea0c8668bdddf782fd580672daa6616c3b1af40ca9f
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$9,000</td>
                                <td className="text-center">
                                  376e809b02e6ef044f6d5cf5b72111f25f3c3e16a93dce865a178e2e0f5c484c
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$43,000</td>
                                <td className="text-center">
                                  aa14458f8082d9c4265ef491ca0b5d4801c16bbf7a4aece7b70a0b4824ffdfea
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$10,000.00</td>
                                <td className="text-center">
                                  3a17c5984af22cd7a443f14457841b3b19a51ea75a30e18bc6a82e4f8732dbca
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$51,000.00</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$24,100.00</td>
                                <td className="text-center">
                                  f007e92cc9f82ba9c8c40c481eec7315fa9abcd85e7249a6cb57e38a2cf22d3e
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-success btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$4,000.00</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$500</td>
                                <td className="text-center">
                                  00db85ef40da34f3ea76aa60f0b2053eec2d90121e450791c18d8edbfedde6f1
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$240,000</td>
                                <td className="text-center">
                                  b21a418a44ed8b56118facefe7aa8d26541dff811b8a8ca65cfa1346d62c5c48
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$17,000</td>
                                <td className="text-center">
                                  1e652d2899a1d058a20041a9faaeb5dc009101ca412ff09c387e6b281bd1db8b
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$51,000</td>
                                <td className="text-center">
                                  6a49e66a66f75e72e6bd383ac798792af204a6693708912ad0d48e363a2ab7a7
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$21,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$6,000</td>
                                <td className="text-center">
                                  797ba039291417fdbdb411ea0a102d23090cde9ac7799ff605f40b5db484891d
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$9,000</td>
                                <td className="text-center">
                                  f0b66ce7a33bbc63bf50050beaf52be71709c359aa1d344bb90f943690485661
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$23,000</td>
                                <td className="text-center">
                                  2083e95ada3c584471ba5982e16c5dc2a6e464d3c170555ea8c708668be9383b
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$51,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$5,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">5,000</td>
                                <td className="text-center">
                                  15c3a97edbd606bd1e455aa2875677f5c6cd2b804e9054e898f640d313e39781
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$18,000</td>
                                <td className="text-center">
                                  66c13496e9d53a2402fd49bbe91df298164472679cc868bbfebbabb4844d784c
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$2,500</td>
                                <td className="text-center">
                                  ce972a6b82135fcba0890ea0c8668bdddf782fd580672daa6616c3b1af40ca9f
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$9,000</td>
                                <td className="text-center">
                                  376e809b02e6ef044f6d5cf5b72111f25f3c3e16a93dce865a178e2e0f5c484c
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$43,000</td>
                                <td className="text-center">
                                  aa14458f8082d9c4265ef491ca0b5d4801c16bbf7a4aece7b70a0b4824ffdfea
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-nav-tabs">
                <div className="alert alert-danger">
                  <h3>
                    <i className="fa fa-minus" aria-hidden="true"></i>{" "}
                    {i18next.t("tnhome67")}
                  </h3>
                </div>
                <div className="card-content">
                  <div className="tab-content text-center">
                    <div className="tab-pane active" id="deposit">
                      <div
                        className="table-responsive"
                        style={{
                          height: "500px",
                          overflowY: "auto",
                          overflowX: "auto",
                        }}
                      >
                        <div className="home-main-9-marg">
                          <table
                            className="table"
                            style={{ width: "100%", backgroundColor: "#wheat" }}
                          >
                            <thead>
                              <tr>
                                <th className="text-center">Status</th>
                                <th className="text-center">Amount(USD)</th>
                                <th className="text-center">Wallet</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$10,000.00</td>
                                <td className="text-center">
                                  3a17c5984af22cd7a443f14457841b3b19a51ea75a30e18bc6a82e4f8732dbca
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$51,000.00</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$24,100.00</td>
                                <td className="text-center">
                                  f007e92cc9f82ba9c8c40c481eec7315fa9abcd85e7249a6cb57e38a2cf22d3e
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-success btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$4,000.00</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$500</td>
                                <td className="text-center">
                                  00db85ef40da34f3ea76aa60f0b2053eec2d90121e450791c18d8edbfedde6f1
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$240,000</td>
                                <td className="text-center">
                                  b21a418a44ed8b56118facefe7aa8d26541dff811b8a8ca65cfa1346d62c5c48
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$17,000</td>
                                <td className="text-center">
                                  1e652d2899a1d058a20041a9faaeb5dc009101ca412ff09c387e6b281bd1db8b
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$51,000</td>
                                <td className="text-center">
                                  6a49e66a66f75e72e6bd383ac798792af204a6693708912ad0d48e363a2ab7a7
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$21,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$6,000</td>
                                <td className="text-center">
                                  797ba039291417fdbdb411ea0a102d23090cde9ac7799ff605f40b5db484891d
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$9,000</td>
                                <td className="text-center">
                                  f0b66ce7a33bbc63bf50050beaf52be71709c359aa1d344bb90f943690485661
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$23,000</td>
                                <td className="text-center">
                                  2083e95ada3c584471ba5982e16c5dc2a6e464d3c170555ea8c708668be9383b
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$51,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$5,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">5,000</td>
                                <td className="text-center">
                                  15c3a97edbd606bd1e455aa2875677f5c6cd2b804e9054e898f640d313e39781
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$18,000</td>
                                <td className="text-center">
                                  66c13496e9d53a2402fd49bbe91df298164472679cc868bbfebbabb4844d784c
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$2,500</td>
                                <td className="text-center">
                                  ce972a6b82135fcba0890ea0c8668bdddf782fd580672daa6616c3b1af40ca9f
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$9,000</td>
                                <td className="text-center">
                                  376e809b02e6ef044f6d5cf5b72111f25f3c3e16a93dce865a178e2e0f5c484c
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$43,000</td>
                                <td className="text-center">
                                  aa14458f8082d9c4265ef491ca0b5d4801c16bbf7a4aece7b70a0b4824ffdfea
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$10,000.00</td>
                                <td className="text-center">
                                  3a17c5984af22cd7a443f14457841b3b19a51ea75a30e18bc6a82e4f8732dbca
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$51,000.00</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$24,100.00</td>
                                <td className="text-center">
                                  f007e92cc9f82ba9c8c40c481eec7315fa9abcd85e7249a6cb57e38a2cf22d3e
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-success btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$4,000.00</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$500</td>
                                <td className="text-center">
                                  00db85ef40da34f3ea76aa60f0b2053eec2d90121e450791c18d8edbfedde6f1
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$240,000</td>
                                <td className="text-center">
                                  b21a418a44ed8b56118facefe7aa8d26541dff811b8a8ca65cfa1346d62c5c48
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$17,000</td>
                                <td className="text-center">
                                  1e652d2899a1d058a20041a9faaeb5dc009101ca412ff09c387e6b281bd1db8b
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$51,000</td>
                                <td className="text-center">
                                  6a49e66a66f75e72e6bd383ac798792af204a6693708912ad0d48e363a2ab7a7
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$21,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$6,000</td>
                                <td className="text-center">
                                  797ba039291417fdbdb411ea0a102d23090cde9ac7799ff605f40b5db484891d
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$9,000</td>
                                <td className="text-center">
                                  f0b66ce7a33bbc63bf50050beaf52be71709c359aa1d344bb90f943690485661
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$23,000</td>
                                <td className="text-center">
                                  2083e95ada3c584471ba5982e16c5dc2a6e464d3c170555ea8c708668be9383b
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$51,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$5,000</td>
                                <td className="text-center">
                                  8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">5,000</td>
                                <td className="text-center">
                                  15c3a97edbd606bd1e455aa2875677f5c6cd2b804e9054e898f640d313e39781
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$18,000</td>
                                <td className="text-center">
                                  66c13496e9d53a2402fd49bbe91df298164472679cc868bbfebbabb4844d784c
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$2,500</td>
                                <td className="text-center">
                                  ce972a6b82135fcba0890ea0c8668bdddf782fd580672daa6616c3b1af40ca9f
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button
                                    className="btn
                                    btn-success btn-sm"
                                  >
                                    <span className="btn-label">
                                      <i
                                        className="fa
                                    fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Confirmed
                                  </button>
                                </td>
                                <td className="text-center">$9,000</td>
                                <td className="text-center">
                                  376e809b02e6ef044f6d5cf5b72111f25f3c3e16a93dce865a178e2e0f5c484c
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <button className="btn btn-warning btn-sm">
                                    <span className="btn-label">
                                      <i
                                        className="fa fa-warning"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Pending
                                  </button>
                                </td>
                                <td className="text-center">$43,000</td>
                                <td className="text-center">
                                  aa14458f8082d9c4265ef491ca0b5d4801c16bbf7a4aece7b70a0b4824ffdfea
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-left"
          className="toast-position"
          hideProgressBar
          limit={1}
        />
        <AppNotifications containerId="app-notifications" />
      </div>
    </DocumentTitle>
  );
};

export default Home;
