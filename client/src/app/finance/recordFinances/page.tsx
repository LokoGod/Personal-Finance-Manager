import React from "react";

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
import { DataTable } from "@/components/tables/dataTables/finance/incomeTable/incomeDataTable";
import {
  incomeColumn,
  IncomeColumnType,
} from "@/components/tables/dataTables/finance/incomeTable/incomeColumn";

async function getData(): Promise<IncomeColumnType[]> {
  return [
    {
      id: "12Abc3F4e5D",
      title: "Intern",
      frequency: "Monthly Compensation",
      employees: 20,
    },
    {
      id: "12Abc3F4e5C",
      title: "Temp",
      frequency: "Weekly Compensation",
      employees: 52,
    },
    {
      id: "12Abc3F4e5A",
      title: "Permenant",
      frequency: "Monthly Compensation",
      employees: 100,
    },
  ];
}

const RecordFinances = async () => {
  const data = await getData();

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
            <BreadcrumbLink href="/finances">Finances</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-blue-600">
            <BreadcrumbLink href="/finances/Record Finances">
              Record Finances
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h2 className="text-3xl font-bold tracking-tight mb-2">Record</h2>
      <Tabs defaultValue="expenses">
        <Card className="w-fit mb-2">
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

          <div className="flex justify-center gap-12">
            <div className="">
              <Card>
                <CardHeader className="text-2xl font-semibold">
                    Recurring Income
                </CardHeader>
                <CardContent>
                  <DataTable columns={incomeColumn} data={data} />
                </CardContent>
              </Card>
            </div>

            <div className="">
              <Card>
              <CardHeader className="text-2xl font-semibold">
                    Reported Income
                </CardHeader>
                <CardContent>
                  <DataTable columns={incomeColumn} data={data} />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="receivables"></TabsContent>

        <TabsContent value="payables"></TabsContent>
      </Tabs>
    </div>
  );
};

export default RecordFinances;
