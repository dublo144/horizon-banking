"use client";
import React from "react";
import CountUp from "react-countup";

type Props = { amount: number };

export default function AnimatedCounter({ amount }: Props) {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        decimal=","
        prefix="$"
        duration={2.75}
        decimals={2}
      />
    </div>
  );
}
