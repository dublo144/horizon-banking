"use client";
import { Account } from "@/types/types";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

type Props = { accounts: Account[] };

export default function DoughnutChart({ accounts }: Props) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Bank 1", "Bank 2", "Bank 3"],
    datasets: [
      {
        label: "Banks",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
