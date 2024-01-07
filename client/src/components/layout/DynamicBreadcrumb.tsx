import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/react";
  import { IoChevronForward } from "react-icons/io5";
  import { FaHouseChimney } from "react-icons/fa6";

const DynamicBreadcrumb = () => {
  return (
    <div>
        <div className="text-xs m-2">
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
              <BreadcrumbLink href="/dashboard/Home">Human Resource</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="">Ticket Management</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
    </div>
  )
}

export default DynamicBreadcrumb