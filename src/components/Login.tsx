"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/validator/login.validator";
import { z } from "zod";
import { handleAuth } from "@/services/social-network/social-network.auth";
import toast from "react-hot-toast";
import { saveToLocalStorage } from "@/utils/localstorage";

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    handleAuth.login(values).then((res) => {
      saveToLocalStorage("token", res.data.token);
      console.log(res);
    });
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 ">
        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>username</FormLabel>
              <FormControl>
                <Input
                  placeholder="email or username"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <div className=" flex justify-between">
                <FormDescription>email or username</FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="your password"
                  {...field}
                />
              </FormControl>
              <div className=" flex justify-between">
                <FormDescription>password</FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Login;
