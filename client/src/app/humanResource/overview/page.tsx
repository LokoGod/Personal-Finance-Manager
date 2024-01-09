import React from "react";

import OverviewTable from "@/components/tables/dataTables/OverviewTable";
import { columns } from "@/components/tables/dataTables/columns"
import { DataTable } from "@/components/tables/dataTables/data-table"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { DataTableDemo } from "@/components/tables/dataTables/tableDemo";


const Overview = () => {
  
  return (
    <div>
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
            <BreadcrumbLink href="/humanResource">
              Human Resource
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/humanResource">Overview</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>


    </div>
  );
};

export default Overview;
