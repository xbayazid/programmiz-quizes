import React from "react";
import { useLoaderData } from "react-router-dom";
import './Statistics.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const datas = useLoaderData();
  const data = datas.data;
  return (
    <div className="static-chart">
        <h2 className="fst-italic">Quiz Marks Analysis</h2>
      <div>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          style={{margin: "0 auto"}}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
