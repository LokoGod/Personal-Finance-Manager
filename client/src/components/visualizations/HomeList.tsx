'use client'

import { AreaChart, BarChart, Card, Flex, Switch, Title } from "@tremor/react";

  const chartdata = [
    {
      name: "Amphibians",
      "Number of threatened species": 2488,
    },
    {
      name: "Birds",
      "Number of threatened species": 1445,
    },
    {
      name: "Crustaceans",
      "Number of threatened species": 743,
    },
    {
      name: "Ferns",
      "Number of threatened species": 281,
    },
    {
      name: "Arachnids",
      "Number of threatened species": 251,
    },
    {
      name: "Corals",
      "Number of threatened species": 232,
    },
    {
      name: "Algae",
      "Number of threatened species": 98,
    },
  ];


  export default function HomeList() {
    return (
        <Card className="w-[770px]">
        <Title>Chart (2023)</Title>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="name"
          categories={["Number of threatened species"]}
          colors={["indigo"]}
          yAxisWidth={48}
        />
      </Card>
    );
  };
  