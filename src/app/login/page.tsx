"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  telephoneNumber: z.string().min(10, {
    message: "Telephone number must be at least 10 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      telephoneNumber: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    router.push("/home");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 h-screen"
      >
        <h1 className="text-xl font-semibold">Login</h1>
        <FormField
          control={form.control}
          name="telephoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="0712345678"
                  {...field}
                  type="tel"
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="********" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
}
