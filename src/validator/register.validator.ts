"use client";

import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({ required_error: "Username or email is required" })
    .min(2, "Username must contain at least 3 characters")
    .max(20, "Username can not contain more than 20 characters"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must contain at least 8 characters")
    .max(50, "Password can not contain more than 50 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character.",
    ),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email")
    .min(5, "Email must contain at least 5 characters")
    .max(50, "Email can not contain more than 50 characters"),
});
