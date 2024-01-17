"use client";
import React from "react";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { RxPlusCircled, RxMinusCircled } from "react-icons/rx";
import { LuBadgePercent } from "react-icons/lu";
import { InputWithAddon } from "../ui/inputWithAddon";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "title must be at least 2 characters.",
    })
    .max(50, {
      message: "title must be less than 50 characters.",
    }),
  baseSalaryType: z.enum(["fixed", "hourly"], {
    required_error: "You need to select a base salary type.",
  }),
  description: z
    .string()
    .min(10, { message: "description must have 10 characters at least." }),
  test: z
    .string()
    .min(2, {
      message: "test must be at least 2 characters.",
    })
    .max(50, {
      message: "test must be less than 50 characters.",
    }),
});

export function AddNewCycleForm() {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedRadioAdditionOption, setSelectedRadioAdditionOption] =
    useState("");

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const handleNextButtonClick = () => {
    const nextIndex = (tabIndex + 1) % 3; // Assuming there are 3 tabs
    setTabIndex(nextIndex);
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      baseSalaryType: "fixed",
      description: "",
      test: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleRadioButton = (event: any) => {
    setSelectedRadioAdditionOption(event.target.value);
  };

  return (
    <div className="">
      <Tabs
        isFitted
        variant="enclosed"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList mb="1em">
          <Tab>General</Tab>
          <Tab>Pay</Tab>
          <Tab>Three</Tab>
          <Tab>4</Tab>
        </TabList>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <TabPanels>
              <TabPanel>
                <div className="">
                  <Card className="w-[50rem]">
                    <CardHeader>
                      <CardTitle>General details</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      <div>
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="">
                                Payroll cycle title
                              </FormLabel>
                              <FormControl>
                                <Input className="" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="baseSalaryType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Base salary</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="fixed" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Fixed
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="hourly" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Hourly
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div>
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea className="" {...field} />
                              </FormControl>
                              <FormDescription>
                                Enter a small description about the cycle
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant={"accentBlue"}
                        onClick={handleNextButtonClick}
                      >
                        Continue
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="">
                  <Card className="w-[50rem]">
                    <CardHeader>
                      <CardTitle>Pay adjustments</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      <Card>
                        <CardHeader className="space-y-1">
                          <CardDescription>
                            Configure the additions and deductions to the
                            employee base salary
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                          <div className="grid grid-cols-2 gap-6">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline">
                                  <RxPlusCircled className="mr-2 h-4 w-4" />
                                  Additions
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Additions</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-2 gap-5">
                                  <div>
                                    <Select>
                                      <SelectTrigger className="">
                                        <SelectValue placeholder="Pay adjustment category" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="light">
                                          Light
                                        </SelectItem>
                                        <SelectItem value="dark">
                                          Dark
                                        </SelectItem>
                                        <SelectItem value="system">
                                          System
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  <div>
                                    <RadioGroup
                                      className="flex flex-col space-y-1"
                                      value={selectedRadioAdditionOption}
                                      onChange={handleRadioButton}
                                    >
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="percentage" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Percentage
                                        </FormLabel>
                                      </FormItem>

                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="amount" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Amount
                                        </FormLabel>
                                      </FormItem>
                                    </RadioGroup>
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    <div className="flex rounded-lg shadow-sm">
                                      <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">
                                        {selectedRadioAdditionOption ===
                                        "percentage"
                                          ? "%"
                                          : "$"}
                                      </span>
                                      <Input />
                                    </div>
                                  </div>
                                </div>

                                <Button>Add</Button>
                              </DialogContent>
                            </Dialog>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline">
                                  <RxMinusCircled className="mr-2 h-4 w-4" />
                                  Deductions
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    Are you absolutely sure?
                                  </DialogTitle>
                                  <DialogDescription>
                                    Deduction Cat: Tax,EPF/401K/Retirment,
                                    Insurance, Comp deduct, unpaid
                                    days,shortleaves,halfdays Choose: rate or %
                                  </DialogDescription>
                                  <DialogDescription>
                                    Step 01: Choose Cat Step 02: Add rate or %
                                    on the basic
                                  </DialogDescription>
                                </DialogHeader>
                                <Button>Hello there</Button>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </CardContent>

                        <CardFooter></CardFooter>
                      </Card>

                      <div></div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant={"accentBlue"}
                        onClick={handleNextButtonClick}
                      >
                        Continue
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabPanel>

              <TabPanel>
                This is Time off
                <Button
                  variant={"accentBlue"}
                  onClick={handleNextButtonClick}
                  disabled={!form.formState.isDirty || !form.formState.isValid}
                >
                  Submit & Continue
                </Button>
              </TabPanel>
              <TabPanel>This isDocuments</TabPanel>
            </TabPanels>
          </form>
        </Form>
      </Tabs>
    </div>
  );
}
