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

export const LineChart = ({ data }: any) => {
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
