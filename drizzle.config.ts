import type { Config } from "drizzle-kit";
import { env } from "env";

export default {
  schema: "./src/lib/db/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL
  },
  verbose: true,
  strict: true,
} satisfies Config;
