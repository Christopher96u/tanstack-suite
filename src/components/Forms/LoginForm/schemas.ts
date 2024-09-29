import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password, must contain at least 8 characters")
    .max(12, "Password, must contain at max 12 chars"),
});

export type Login = z.infer<typeof LoginSchema>;
