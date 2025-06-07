import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string().url(),
  // GITHUB_CLIENT_ID: z.string(),
  // GITHUB_CLIENT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  EMAIL_FROM: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASS: z.string(),

  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export const env = envSchema.parse(process.env);
