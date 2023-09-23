"use client";

import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IIrrigations } from "../../templates/Charts";

const data = [
  {
    name: "Janeiro",
    ml: 4000,
  },
  {
    name: "Fevereiro",
    ml: 3000,
  },
  {
    name: "Março",
    ml: 2000,
  },
  {
    name: "Abril",
    ml: 2780,
  },
  {
    name: "Maio",
    ml: 1890,
  },
  {
    name: "Junho",
    ml: 2390,
  },
  {
    name: "Julho",
    ml: 3490,
  },
  {
    name: "Agosto",
    ml: 1520,
  },
  {
    name: "Setembro",
    ml: 9820,
  },
  {
    name: "Outubro",
    ml: 5630,
  },
  {
    name: "Novembro",
    ml: 1889,
  },
  {
    name: "Dezembro",
    ml: 7562,
  },
];

export const LineChart = () => {
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

        <Line type="monotone" dataKey="ml" stroke="#4504f3" />
      </Chart>
    </ResponsiveContainer>
  );
};
