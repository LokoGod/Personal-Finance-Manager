import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";

const Payroll = () => {
  return (
    <div className="text-xs mt-1">
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
          <BreadcrumbLink href="/humanResource">Human Resource</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/humanResource/payroll">Payroll</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Payroll;
