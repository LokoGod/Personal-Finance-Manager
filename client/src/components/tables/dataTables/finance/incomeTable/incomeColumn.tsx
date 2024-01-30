"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { RxDotsHorizontal } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type IncomeColumnType = {
  id: string;
  income_title: string;
  income_amount: number;
  receiving_date: string,
  categoryId: number;
  income_cat: string
};

// Defining the clolumns
export const incomeColumn: ColumnDef<IncomeColumnType>[] = [
  {
    accessorKey: "income_title",

    header: ({ column }) => {
      return <div className="text-blue-600">Title</div>;
    },
    cell: ({ row }) => {
      return (
        <a href="#" className="font-medium hover:underline">
          {row.getValue("income_title")}
        </a>
      );
    },
  },
  {
    accessorKey: "categoryId",
    header: ({ column }) => {
      return (
        <div className="">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Category
            <LuArrowUpDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return( 
      <div>
        <div>{row.getValue("categoryId")}</div>
        <div>{row.getValue("category.income_cat")}</div>
      </div>
      )// Display the income category in the cell
    },
  },
  {
    header: "Receiving Date",
    accessorKey: "receiving_date"
  },
  {
    // formated the amount cell to display the dollar amount, also aligned the cell to the right.
    accessorKey: "income_amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("income_amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "LKR",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    // Added dropdown menu to rows
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <RxDotsHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
