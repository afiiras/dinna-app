import React from "react";
import Activity from "./Activity.log";
import Expenses from "./Expenses";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Transactions from "./Transactions";
import Wallets from "./Wallet";

export default function Dashboard() {
  return (
    <div class="app">
      <Navbar />
      <div className="app__grid">
        <div className="app__grid__1">
          <Wallets />
          <Expenses />
          <Transactions />
        </div>
        <div className="app__grid__2">
          <Overview />
          <Activity />
        </div>
      </div>
    </div>
  );
}
