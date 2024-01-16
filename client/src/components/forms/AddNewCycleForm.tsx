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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
});

export function AddNewCycleForm() {
  const [tabIndex, setTabIndex] = useState(0);

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
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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

        <TabPanels>
          <TabPanel>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                        disabled={
                          !form.formState.isDirty || !form.formState.isValid
                        }
                      >
                        Submit & Continue
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </form>
            </Form>
          </TabPanel>

          <TabPanel>
            <Card>
              <CardHeader>
                <CardTitle>Hello there</CardTitle>
                <CardDescription>This is the description</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>This is the body of the card</CardDescription>
              </CardContent>
              <CardFooter>
                <CardDescription>This is the footer</CardDescription>
              </CardFooter>
            </Card>
          </TabPanel>
          
          <TabPanel>This is Time off</TabPanel>
          <TabPanel>This isDocuments</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
