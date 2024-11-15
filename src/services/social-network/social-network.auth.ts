"use client";

import { z } from "zod";
import backend from "./social-network.base";
import { loginSchema } from "@/validator/login.validator";
import handleStatusToaster from "@/utils/handleStatusToaster";

export const handleAuth = {
  register: async (data: unknown) => {
    const response = backend.post("/auth/register", data);
    handleStatusToaster(response, "Register");
    return response;
  },
  login: async (data: z.infer<typeof loginSchema>) => {
    const response = backend.post("/auth/login", data);
    handleStatusToaster(response, "Login");
    return response;
  },
};
