import { DataTable } from "@/components/tables/dataTables/data-table";
import {
  Payment,
  columns,
} from "@/components/tables/dataTables/overViewTable/columns";

import { IoIosAdd } from "react-icons/io";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";

import React from "react";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 80000,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100000,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      amount: 2000,
      status: "failed",
      email: "b@example.com",
    },
    // ...
  ];
}

const Onboarding = async () => {
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
            <BreadcrumbLink href="/humanResource">
              Human Resource
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="humanResource/onboarding">
              Onboarding
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h2 className="text-3xl font-bold tracking-tight">Onboarding</h2>

      <div className="flex justify-end ">
        <Button size={"sm"}>
          <IoIosAdd className=" mr-0.5 h-6 w-6" /> Onboard new employee
        </Button>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Onboarding;
