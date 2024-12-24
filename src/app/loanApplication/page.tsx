"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  income: z.string().min(1).max(12),
  amount: z.string().min(1),
});

const LoanApplication = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      income: "",
      amount: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // check if the loan amount is less than 1/3 of the income
    if (Number(values.amount) > Number(values.income) / 3) {
      form.setError("amount", {
        message: "Loan amount cannot be more than 1/3 of your income",
      });
    }

    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 h-screen"
      >
        <h1 className="text-xl font-semibold">Loan Application</h1>
        <FormField
          control={form.control}
          name="income"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Income</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="0.00" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Loan Amount</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="0.00" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoanApplication;
