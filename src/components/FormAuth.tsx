import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Register from "./Register";

type FormAuthType = {
  defaultValue: "login" | "register";
};

export const FormAuth = ({ defaultValue }: FormAuthType) => {
  return (
    <Tabs defaultValue={defaultValue} className="max-w-2xl">
      <TabsList>
        <TabsTrigger value="login">Signin</TabsTrigger>
        <TabsTrigger value="register">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="register">
        <Register />
      </TabsContent>
    </Tabs>
  );
};
