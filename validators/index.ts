import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { userTable } from "@/db/schemas/user";

// db tables schemas
export const userSchema = createInsertSchema(userTable, {
  email: (schema) => schema.email.email(),
});

// form schemas
export const signInFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(1, "Password is required").min(8, "Password must be more than 8 characters").max(32, "Password must be less than 32 characters"),
    confirmPassword: z.string(),
  })
  .refine((check) => check.password === check.confirmPassword, { message: "passwords must mach", path: ["confirmPassword"] });
