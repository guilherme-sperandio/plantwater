"use client";

import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Manhã",
    ml: 600,
  },
  {
    name: "Tarde",
    ml: 8560,
  },
  {
    name: "Noite",
    ml: 1865,
  },
];
export const BarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Chart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ml" fill="#4504f3" />
      </Chart>
    </ResponsiveContainer>
  );
};
