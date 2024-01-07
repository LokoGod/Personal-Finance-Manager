'use client'

import React from "react";

import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Jan",
    Keyboards: 28900,
    "Clothes": 23380,
  },
  {
    date: "Feb",
    Keyboards: 75656,
    "Clothes": 12690,
  },
  {
    date: "Mar",
    Keyboards: 50000,
    "Clothes": 85000,
  },
  {
    date: "Apr",
    Keyboards: 113000,
    "Clothes": 98500,
  },
  {
    date: "May",
    Keyboards: 32600,
    "Clothes": 45800,
  },
  {
    date: "Jun",
    Keyboards: 69000,
    "Clothes": 18000,
  },
];

const valueFormatter = function (number: any) {
  return "Rs " + new Intl.NumberFormat("us").format(number).toString();
};

const AreaSalesChart = () => {
  return (
    <div>
      <Card>
        <Title>All time sales</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="date"
          categories={["Keyboards", "Clothes"]}
          colors={["indigo", "cyan"]}
          valueFormatter={valueFormatter}
        />
      </Card>
    </div>
  );
};

export default AreaSalesChart;
