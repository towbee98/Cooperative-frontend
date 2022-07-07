import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./App.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/Home/home.component";
import Modal from "./components/Modal/modal.component";
import Member from "./pages/member/member.component";
import SignUp from "./pages/SignUp/sign-up.component";
import SignIn from "./pages/Sign In/sign-in.component";
import Dashboard from "./pages/Dashboard/dashboard.component";
import Summary from "./components/Summary/summary.component";
// import RecentTransactions from "./components/Recent-Transactions/recent-transactions.component";
import LastTransaction from "./components/Last-Transaction/last-transaction.component";
import AllTransactions from "./components/All-Transactions/all-transactions.component";
import AdminDashboard from "./pages/Admin/admin-dashboard.component";
import Creditors from "./components/Creditors/creditors.compoent";
import Account from "./components/Account/account.component";
import Members from "./components/Members/members.component";
import Registration from "./components/Registration/registration.component";
import AdminSummary from "./components/Admin-summary/summary.component";

const styles = {
  fadeIn: {
    animation: "x 7s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

function App() {
  const [click, setClick] = useState(false);
  const [user, setCurrentUser] = useState({
    name: "Tobi",
    memberId: "",
    phone: "",
    email: ""
  });
  const handleChange = (e) => {
    console.log(e);
    setCurrentUser();
    console.log(user);
  };
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <StyleRoot>
      <div className="App" style={styles.fadeIn}>
        <Header click={click} handleClick={handleClick} />
        <Modal click={click} handleClick={handleClick} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/member"
            element={<Member user={user} handleChange={handleChange} />}
          />
          <Route
            exact
            path="/register"
            element={<SignUp user={user} handleChange={handleChange} />}
          />
          <Route
            exact
            path="/login"
            element={
              <SignIn
                header={"Login"}
                type={"text"}
                name={"Username"}
                placeholder={"Username/Member ID"}
              />
            }
          />
          <Route path="/admin">
            <Route
              path="login"
              element={
                <SignIn
                  header={"Admin Login"}
                  type={"email"}
                  name={"Email"}
                  placeholder={"Admin Email"}
                />
              }
            />
            <Route path={"menu"} element={<AdminDashboard />}>
              <Route path={"creditors"} element={<Creditors />} />
              <Route path={"account"} element={<Account />} />
              <Route path={"members"} element={<Members />} />
              <Route path={"registration"} element={<Registration />} />
              <Route index element={<AdminSummary />} />
            </Route>
          </Route>
          <Route path="/menu" element={<Dashboard />}>
            <Route path="recent" element={<LastTransaction />} />
            <Route path="allTransactions" element={<AllTransactions />} />
            <Route index element={<Summary />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </StyleRoot>
  );
}

export default App;
