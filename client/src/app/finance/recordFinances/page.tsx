import React from "react";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

import { IoIosAdd } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";

import RecurringIncome from "@/components/tables/normalTables/finance/income/RecurringIncome";
import ReportedIncome from "@/components/tables/normalTables/finance/income/ReportedIncome";
import { DataTable } from "@/components/tables/dataTables/finance/incomeTable/incomeDataTable";
import { IncomeColumnType, incomeColumn } from "@/components/tables/dataTables/finance/incomeTable/incomeColumn";

async function getIncomeData(): Promise<IncomeColumnType[]> {
  return [
    {
      id: "12Abc3F4e5D",
      title: "Intern Allowance",
      category: "Day Job Allowance",
      receivingDate: "2023/09/01",
      amount: 20500,
    },
    {
      id: "12Abc3F4e5C",
      title: "Family Allowance",
      category: "Family Pocket Money",
      receivingDate: "2024/04/02",
      amount: 52510,
    },
    {
      id: "12Abc3F4e5A",
      title: "Side Project",
      category: "PearlWave Labs SideGig",
      receivingDate: "2025/10/11",
      amount: 100000,
    },
  ];
}

const RecordFinances = async () => {

  const incomeData = await getIncomeData();

  return (
    <div>
      <div className="text-xs mb-2">
        <Breadcrumb
          spacing="8px"
          separator={<IoChevronForward color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <FaHouseChimney />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/finance">Finances</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-blue-600">
            <BreadcrumbLink href="/finance/recordFinances">
              Record Finances
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h2 className="text-3xl font-bold tracking-tight mb-2">Record</h2>
      <Tabs defaultValue="expenses">
        <Card className="w-fit mb-5">
          <TabsList>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="receivables" disabled>
              Receivables
            </TabsTrigger>
            <TabsTrigger value="payables" disabled>
              Payables
            </TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="expenses"></TabsContent>

        <TabsContent value="income">
          <div className="flex justify-end mb-5">
            <Button className="" asChild>
                <Link href={"/finance/recordFinances/incomeSource"}>
                <IoIosAdd />
                Add income source
                </Link>
                </Button>
          </div>
         

          <DataTable columns={incomeColumn} data={incomeData} />

        </TabsContent>

        <TabsContent value="receivables"></TabsContent>

        <TabsContent value="payables"></TabsContent>
      </Tabs>
    </div>
  );
};

export default RecordFinances;
