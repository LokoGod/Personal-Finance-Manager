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


const RecordFinances = async () => {

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

          <div className="flex flex-col md:flex-row md:justify-center gap-2">
            <div className="mb-4 md:mb-0">
              <Card>
                <CardHeader className="text-xl font-semibold">
                  Reported Income
                </CardHeader>
                <CardContent>
                  <ReportedIncome />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader className="text-xl font-semibold">
                  Recurring Income
                </CardHeader>
                <CardContent>
                  <RecurringIncome />
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
