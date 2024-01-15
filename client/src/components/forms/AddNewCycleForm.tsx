"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      <Tabs defaultValue="employeeBasic">
        <Card className="w-fit mb-2">
          <TabsList>
            <TabsTrigger value="employeeBasic">Basic Details</TabsTrigger>
            <TabsTrigger value="compensation">Compensation</TabsTrigger>
            <TabsTrigger value="timeoff" disabled>
              Time off
            </TabsTrigger>
            <TabsTrigger value="documents" disabled>
              Documents
            </TabsTrigger>
          </TabsList>
        </Card>
        <TabsContent value="employeeBasic">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="">
              <Card className="w-[50rem]">
                <CardHeader>
                  <CardTitle>Basic details</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="">Payroll cycle title</FormLabel>
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
                  <Button variant={"accentBlue"} type="submit">Submit</Button>
                </CardFooter>
              </Card>
              </div>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="compensation">
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
        </TabsContent>
        <TabsContent value="timeoff">This is Time off</TabsContent>
        <TabsContent value="documents">This isDocuments</TabsContent>
      </Tabs>
    </div>
  );
}
