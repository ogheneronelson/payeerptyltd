import React, { useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import Topbar from "../../components/usertopbar/Topbar";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Col, Row } from "antd";
import UserFooter from "../../components/minorfooter";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const Dashboard = () => {
  const { user, isError } = useSelector((state) => state.auth);
  const userCurrency = user?.user?.currency;

  const { exchangeData } = useSelector((state) => state.exchange);

  const curr = exchangeData?.rates[userCurrency];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser());
    if (isError) {
      navigate("/login");
    }
  }, [dispatch, navigate, isError]);

  const { BTC, ETH, BNB, USDT, LTC, BCH } = user?.user;

  const deposited = (
    BTC?.deposit +
    ETH?.deposit +
    BNB?.deposit +
    USDT?.deposit +
    LTC?.deposit +
    BCH?.deposit
  ).toFixed(2);
  const pending = (
    BTC?.pending +
    ETH?.pending +
    BNB?.pending +
    USDT?.pending +
    LTC?.pending +
    BCH?.pending
  ).toFixed(2);
  const profit =
    BTC?.profit +
    ETH?.profit +
    BNB?.profit +
    USDT?.profit +
    LTC?.profit +
    BCH?.profit;

  const bonus =
    BTC?.bonus +
    ETH?.bonus +
    BNB?.bonus +
    USDT?.bonus +
    LTC?.bonus +
    BCH?.bonus;
  const total = (profit + bonus).toFixed(2);

  const withdrawn = user?.user?.withdrawnbalance
    ? (user?.user?.withdrawnbalance).toFixed(2)
    : (0).toFixed(2);

  return (
    <DocumentTitle title="Dashboard | Payeer Pty Limited">
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-main-1">
          <div className="dashboard-main-1-1">
            <div className="dashboard-main-1-1-1">
              <h6>{i18next.t("tnew15")}</h6>
              <h2>{user?.user?.firstname}</h2>
              <p>{i18next.t("tnew16")}</p>
            </div>
            <div className="dashboard-main-1-1-2">
              <Link to="/funds/deposit">
                {i18next.t("tnew17")}{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </Link>
              <Link to="/funds/withdraw">
                {i18next.t("tnew18")}{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="dashboard-main-1-2">
            <div>
              <p>
                {" "}
                <span>
                  <FaInfoCircle />
                </span>{" "}
                {i18next.t("tnew20")}
              </p>
            </div>
            <div>
              <Link to="/user">{i18next.t("tnew10")}</Link>
            </div>
          </div>
          <Row
            className="dashboard-main-1-3"
            gutter={{
              xs: 6,
              sm: 18,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="dashboard-sub-1">
              <div className="dashboard-sub-1-1">
                <h6>{i18next.t("tnew21")}</h6>
                <AiOutlineInfoCircle />
              </div>
              <div className="dashboard-sub-1-2">
                <h5>
                  {deposited} <span>USD</span>
                </h5>
              </div>
              {userCurrency !== "USD" && (
                <div className="dashboard-sub-1-3">
                  <h5>
                    {(deposited * curr).toFixed(2)} <span>{userCurrency}</span>
                  </h5>
                </div>
              )}
              <div className="dashboard-sub-1-4">
                <h6>{i18next.t("tnew22")}</h6>
                <div>
                  <p>0.00 USD</p>
                  <strong>
                    <span>
                      <HiOutlineArrowNarrowDown />
                    </span>
                    100%
                  </strong>
                </div>
              </div>
            </Col>
            <Col className="dashboard-sub-1">
              <div className="dashboard-sub-1-1">
                <h6>{i18next.t("tnew23")}</h6>
                <AiOutlineInfoCircle />
              </div>

              <div className="dashboard-sub-1-2">
                <h5>
                  {pending} <span>USD</span>
                </h5>
              </div>
              {userCurrency !== "USD" && (
                <div className="dashboard-sub-1-3">
                  <h5>
                    {(pending * curr).toFixed(2)} <span>{userCurrency}</span>
                  </h5>
                </div>
              )}
              <div className="dashboard-sub-1-4">
                <h6>{i18next.t("tnew22")}</h6>
                <div>
                  <p>0.00 USD</p>
                  <strong>
                    <span>
                      <HiOutlineArrowNarrowDown />
                    </span>
                    100%
                  </strong>
                </div>
              </div>
            </Col>

            <Col className="dashboard-sub-1">
              <div className="dashboard-sub-1-1">
                <h6>{i18next.t("tnew24")}</h6>
                <AiOutlineInfoCircle />
              </div>
              <div className="dashboard-sub-1-2">
                <h5>
                  {bonus} <span>USD</span>
                </h5>
              </div>
              {userCurrency !== "USD" && (
                <div className="dashboard-sub-1-3">
                  <h5>
                    {(bonus * curr).toFixed(2)} <span>{userCurrency}</span>
                  </h5>
                </div>
              )}
              <div className="dashboard-sub-1-4">
                <h6>{i18next.t("tnew22")}</h6>
                <div>
                  <p>0.00 USD</p>
                  <strong>
                    <span>
                      <HiOutlineArrowNarrowDown />
                    </span>
                    100%
                  </strong>
                </div>
              </div>
            </Col>
            <Col className="dashboard-sub-1">
              <div className="dashboard-sub-1-1">
                <h6>{i18next.t("tnew25")}</h6>
                <AiOutlineInfoCircle />
              </div>
              <div className="dashboard-sub-1-2">
                <h5>
                  {total} <span>USD</span>
                </h5>
              </div>
              {userCurrency !== "USD" && (
                <div className="dashboard-sub-1-3">
                  <h5>
                    {(total * curr).toFixed(2)} <span>{userCurrency}</span>
                  </h5>
                </div>
              )}
              <div className="dashboard-sub-1-4">
                <h6>{i18next.t("tnew22")}</h6>
                <div>
                  <p>0.00 USD</p>
                  <strong>
                    <span>
                      <HiOutlineArrowNarrowDown />
                    </span>
                    100%
                  </strong>
                </div>
              </div>
            </Col>
            <Col className="dashboard-sub-1">
              <div className="dashboard-sub-1-1">
                <h6>{i18next.t("tnew26")}</h6>
                <AiOutlineInfoCircle />
              </div>
              <div className="dashboard-sub-1-2">
                <h5>
                  {withdrawn} <span>USD</span>
                </h5>
              </div>
              {userCurrency !== "USD" && (
                <div className="dashboard-sub-1-3">
                  <h5>
                    {(withdrawn * curr).toFixed(2)} <span>{userCurrency}</span>
                  </h5>
                </div>
              )}
              <div className="dashboard-sub-1-4">
                <h6>{i18next.t("tnew22")}</h6>
                <div>
                  <p>0.00 USD</p>
                  <strong>
                    <span>
                      <HiOutlineArrowNarrowDown />
                    </span>
                    100%
                  </strong>
                </div>
              </div>
            </Col>
            {/* <Col className="dashboard-sub-1">
              <div className="dashboard-sub-1-1">
                <h6>{i18next.t("tnew27")}</h6>
                <AiOutlineInfoCircle />
              </div>
              <div className="dashboard-sub-1-2">
                <h5>
                  {transfers} <span>USD</span>
                </h5>
              </div>
              <div className="dashboard-sub-1-3">
                <h5>
                  {transfersEur} <span>EUR</span>
                </h5>
              </div>
              <div className="dashboard-sub-1-4">
                <h6>{i18next.t("tnew22")}</h6>
                <div>
                  <p>0.00 USD</p>
                  <strong>
                    <span>
                      <HiOutlineArrowNarrowDown />
                    </span>
                    100%
                  </strong>
                </div>
              </div>
            </Col> */}
          </Row>
          <div className="dashboard-widget">
            <h4>{i18next.t("tdashboard23")}</h4>
            <AdvancedRealTimeChart
              theme="dark"
              symbol="BINANCE:BTCUSDT"
              autosize="true"
              timezone="Etc/UTC"
              locale="en"
              toolbar_bg="#f1f3f6"
              withdateranges="true"
              range="1D"
              hide_side_toolbar="false"
              allow_symbol_change="true"
              details="true"
              hotlist="true"
              calendar="true"
              show_popup_button="true"
              popup_width="1000"
              popup_height="650"
              container_id="tradingview_b320e"
            ></AdvancedRealTimeChart>
          </div>
        </div>
        <UserFooter />
      </div>
    </DocumentTitle>
  );
};

export default Dashboard;
