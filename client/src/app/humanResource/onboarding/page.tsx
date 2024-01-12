import { DataTable } from "@/components/tables/dataTables/data-table";
import {
  Payment,
  columns,
} from "@/components/tables/dataTables/overViewTable/columns";

import { BsThreeDots } from "react-icons/bs";
import React from "react";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const Onboarding = async () => {
  const data = await getData();
  return (
    <div>
      <div className="flex justify-end">
        <Button>Onboard new employee</Button>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Onboarding;
