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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { DatePickerDemo } from "../../DatePicker";

const formSchema = z.object({
  incomeTitle: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  incomeCategory: z.string({
    required_error: "Please select a category!",
  }),
  recurringIncome: z.boolean().default(false).optional(),
  setReceivingDate: z.date().optional(),
});

export function AddIncomeForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      incomeTitle: "",
      incomeCategory: "",
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
      <Card>
        <CardHeader>
          <CardDescription>Enter the details of the recieved income</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="">
                <FormField
                  control={form.control}
                  name="incomeTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Shoping discount surplus" {...field} />
                      </FormControl>
                      <FormDescription>
                        Explain the income breifly.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="incomeCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        Categorize the income source
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="">
                <FormField
                  control={form.control}
                  name="recurringIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reccuring ?</FormLabel>
                      <FormControl className="flex">                     
                        <Switch checked={field.value} onCheckedChange={field.onChange} />                  
                      </FormControl>
                      <FormDescription>
                        Tick if the income will keep happening
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="">
                <FormField
                  control={form.control}
                  name="setReceivingDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Set future date ?</FormLabel>
                      <FormControl className="flex">
                        <div>
                        <DatePickerDemo field={field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Add</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
