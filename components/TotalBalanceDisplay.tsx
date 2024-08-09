import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
import { Account } from "@/types/types";

type Props = {
  accounts: Account[];
  totalBanks: number;
  totalBalance: number;
};

export default function TotalBalanceDisplay({
  accounts,
  totalBanks,
  totalBalance,
}: Props) {
  return (
    <section className="account-balance">
      <div className="account-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="account-balance-label">Total balance</p>

          <p className="flex-center gap-2 account-balance-total">
            <AnimatedCounter amount={totalBalance} />
          </p>
        </div>
      </div>
    </section>
  );
}
