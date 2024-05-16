import React, { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./components/PublicRoute";
import MajorLayout from "./components/MajorLayout";
import MinorLayout from "./components/MinorLayout";
import UserLayout from "./components/UserLayout";
import AdminLayout from "./components/AdminLayout";
import AdminRoute from "./components/AdminRoute";

const Contact = lazy(() => import("./pages/contact"));
const FAQ = lazy(() => import("./pages/faq"));
const Policy = lazy(() => import("./pages/policy"));
const Login = lazy(() => import("./pages/login"));
const Refer = lazy(() => import("./pages/refer"));
const Market = lazy(() => import("./pages/marketing"));
const Terms = lazy(() => import("./pages/terms"));
const ForgotPassword = lazy(() => import("./pages/forgotpassword"));
const PasswordLinkSent = lazy(() => import("./pages/passwordlinksent"));
const RegisterSuccessSuccess = lazy(() => import("./pages/registersuccess"));
const ResetPassword = lazy(() => import("./pages/resetpassword"));
const Resetsuccess = lazy(() => import("./pages/resetsuccess"));
const ResendConfirmation = lazy(() => import("./pages/resendconfirmation"));
const Deposit = lazy(() => import("./pages/deposit"));
const Wallet = lazy(() => import("./pages/wallet"));
const Exchange = lazy(() => import("./pages/exchange"));
const Funds = lazy(() => import("./pages/fund"));
const KYC = lazy(() => import("./pages/kyc"));
const Withdraw = lazy(() => import("./pages/withdraw"));
const CompleteWithdrawal = lazy(() => import("./pages/withdraw-2"));
const User = lazy(() => import("./pages/user"));
// const Transact = lazy(() => import("./pages/transact"));
const Help = lazy(() => import("./pages/help"));
const SentEmails = lazy(() => import("./pages/sentmails"));
// const ReceivedEmails = lazy(() => import("./pages/receivemails"));
const SendMail = lazy(() => import("./pages/sendmail"));
const Sent = lazy(() => import("./pages/sent"));
// const Received = lazy(() => import("./pages/inboxed"));
const Verified = lazy(() => import("./components/Verified"));
const AdminRegister = lazy(() => import("./pages/adminpage/adminregister"));
const AdminLogin = lazy(() => import("./pages/adminpage/adminlogin"));
const AdminUserLayout = lazy(() => import("./components/AdminUserLayout"));
const AdminDashboard = lazy(() => import("./pages/adminpage/admindashboard"));
const AdminUser = lazy(() => import("./pages/adminpage/adminuser"));
const AdminEdit = lazy(() => import("./pages/adminpage/adminedit"));
const BTC = lazy(() => import("./pages/adminpage/adminbtc"));
const ETH = lazy(() => import("./pages/adminpage/admineth"));
const BNB = lazy(() => import("./pages/adminpage/adminbnb"));
const USDT = lazy(() => import("./pages/adminpage/adminusdt"));
const LTC = lazy(() => import("./pages/adminpage/adminltc"));
const BCH = lazy(() => import("./pages/adminpage/adminbch"));
// const USDC = lazy(() => import("./pages/adminpage/adminusdc"));
// const SOL = lazy(() => import("./pages/adminpage/adminsol"));
// const DOGE = lazy(() => import("./pages/adminpage/admindoge"));
// const ADA = lazy(() => import("./pages/adminpage/adminada"));

const AdminUserDeposit = lazy(() =>
  import("./pages/adminpage/adminuserdeposit")
);
const AdminUserWithdraw = lazy(() =>
  import("./pages/adminpage/adminuserwithdrawal")
);
const AdminUserTransfer = lazy(() =>
  import("./pages/adminpage/adminusertransfer")
);
const AdminUserMessages = lazy(() =>
  import("./pages/adminpage/adminuserissues")
);
const AdminNewMessage = lazy(() => import("./pages/adminpage/adminnewmessage"));

const AdminSentMessage = lazy(() =>
  import("./pages/adminpage/adminsentmessage")
);
const AdminDeposits = lazy(() => import("./pages/adminpage/adminalldeposits"));

const AdminWithdrawals = lazy(() =>
  import("./pages/adminpage/adminallwithdrawals")
);
// const AdminTransfers = lazy(() =>
//   import("./pages/adminpage/adminalltransfers")
// );

const AdminIssues = lazy(() => import("./pages/adminpage/adminallissues"));
const AdminReceivedMessage = lazy(() =>
  import("./pages/adminpage/adminreceivedmessage")
);
const Register = lazy(() => import("./pages/register"));
const About = lazy(() => import("./pages/about"));
const Home = lazy(() => import("./pages/home"));
const UserRoute = lazy(() => import("./components/UserRoute"));
const UserDetails = lazy(() => import("./components/UserDetails"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const AdminMessages = lazy(() => import("./pages/adminpage/adminallmessages"));
const ChangePassword = lazy(() => import("./pages/changepassword"));
const RefTeam = lazy(() => import("./pages/refteam"));

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route>
            <Route
              exact
              path="/maintenance-in-progress"
              element={<Navigate to="/" />}
            ></Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route element={<MajorLayout />}>
              <Route exact path="/" index element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact-us" element={<Contact />} />
              <Route exact path="/refer-and-earn" element={<Refer />} />
              <Route exact path="/marketing-policy" element={<Market />} />
              <Route exact path="/privacy-policy" element={<Policy />} />
              <Route exact path="/terms-and-conditions" element={<Terms />} />
              <Route exact path="/faq" element={<FAQ />} />
            </Route>
            <Route element={<MinorLayout />}>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                exact
                path="/reset-link-sent"
                element={<PasswordLinkSent />}
              />
              <Route
                exact
                path="/resend-confirmation-email"
                element={<ResendConfirmation />}
              />
              <Route element={<Verified />}>
                <Route
                  exact
                  path="/registration-successful"
                  element={<RegisterSuccessSuccess />}
                />
              </Route>

              <Route exact path="/reset-password" element={<ResetPassword />} />
              <Route exact path="/reset-success" element={<Resetsuccess />} />
            </Route>
          </Route>
          <Route element={<UserRoute />}>
            <Route element={<UserDetails />}>
              <Route element={<UserLayout />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/wallet" element={<Wallet />} />
                <Route exact path="/convert" element={<Exchange />} />
                <Route
                  exact
                  path="/user-reset-password"
                  element={<ChangePassword />}
                />
                <Route exact path="/referral" element={<RefTeam />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/kyc" element={<KYC />} />
                <Route exact path="/funds" element={<Funds />}>
                  <Route index element={<Deposit />} />
                  <Route exact path="deposit" index element={<Deposit />} />
                  <Route exact path="withdraw" element={<Withdraw />} />
                  <Route
                    exact
                    path="complete-withdrawal"
                    element={<CompleteWithdrawal />}
                  />
                </Route>
                <Route exact path="/help" element={<Help />}>
                  <Route index element={<SendMail />} />
                  <Route exact path="send-mail" element={<SendMail />} />
                  <Route exact path="sent-emails" element={<SentEmails />} />
                  <Route
                    exact
                    path="sent-emails/:messageID"
                    element={<Sent />}
                  />
                  {/* <Route
                    exact
                    path="inbox"
                    element={
                   
                        <ReceivedEmails />
                      )
                    }
                  />
                  <Route
                    exact
                    path="inbox/:messageID"
                    element={
                   
                        <Received />
                      
                    }
                  /> */}
                </Route>
              </Route>
            </Route>
          </Route>
          <Route element={<AdminLayout />}>
            <Route exact path="/admin/register" element={<AdminRegister />} />
            <Route exact path="/admin/login" element={<AdminLogin />} />
          </Route>
          <Route element={<AdminUserLayout />}>
            <Route element={<AdminRoute />}>
              <Route
                exact
                path="/admin/dashboard"
                element={<AdminDashboard />}
              />
              <Route exact path="/admin/deposits" element={<AdminDeposits />} />
              <Route
                exact
                path="/admin/withdrawals"
                element={<AdminWithdrawals />}
              />
              {/* <Route
                exact
                path="/admin/transfers"
                element={<AdminTransfers />}
              /> */}
              <Route exact path="/admin/messages" element={<AdminMessages />} />
              <Route exact path="/admin/issues" element={<AdminIssues />} />

              <Route exact path="/admin/user/:userId" element={<AdminUser />}>
                <Route index element={<AdminUserDeposit />} />
                <Route exact path="deposits" element={<AdminUserDeposit />} />
                <Route
                  exact
                  path="withdrawals"
                  element={<AdminUserWithdraw />}
                />
                <Route exact path="transfers" element={<AdminUserTransfer />} />
                <Route exact path="messages" element={<AdminUserMessages />}>
                  <Route index element={<AdminNewMessage />} />
                  <Route exact path="send" element={<AdminNewMessage />} />
                  <Route exact path="sent" element={<AdminSentMessage />} />
                  <Route
                    exact
                    path="inbox"
                    element={<AdminReceivedMessage />}
                  />
                </Route>
              </Route>
              <Route
                exact
                path="/admin/edit-user/:userId"
                element={<AdminEdit />}
              >
                <Route index element={<BTC />} />
                <Route exact path="btc" element={<BTC />} />
                <Route exact path="eth" element={<ETH />} />
                <Route exact path="bnb" element={<BNB />} />
                <Route exact path="usdt" element={<USDT />} />
                <Route exact path="ltc" element={<LTC />} />
                <Route exact path="bch" element={<BCH />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
