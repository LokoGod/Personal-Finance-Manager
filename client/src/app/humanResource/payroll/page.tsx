import React from "react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

const Payroll = () => {
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
            <BreadcrumbLink href="/humanResource/payroll">
              Payroll
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Payroll cycles</h2>

        <div className="flex justify-end ">
          <Button size={"sm"} asChild>
            <Link href={"/humanResource/payroll/addNewCycle"}>
              <IoIosAdd className=" mr-0.5 h-6 w-6" /> Add new cycle
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
