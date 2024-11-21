import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "12h", average: 1.1 },
  { name: "13h", average: 1.2 },
  { name: "14h", average: 1.4 },
  { name: "15h", average: 1.6 },
  { name: "16h", average: 1.8 },
  { name: "17h", average: 1.9 },
  { name: "18h", average: 2 },
];

export default function Lgraph() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[var(--gray1)] dark:bg-[var(--gray3)] rounded-lg shadow-md">
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="bg-[var(--gray1)] dark:bg-[var(--gray3)] rounded-lg shadow-lg"
      >
        <CartesianGrid strokeDasharray="5 5" stroke="green" />
        <XAxis dataKey="name" stroke="green" />
        <YAxis stroke="green" />

        <Tooltip wrapperStyle={{ backgroundColor: "#f3f4f6", borderRadius: "0.375rem" }} />

        <Legend wrapperStyle={{ color: "#4B5563", fontSize: "0.875rem" }} />

        <Line
          type="monotone"
          dataKey="average"
          stroke="var(--yellow1)"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
}
