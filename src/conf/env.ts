import "dotenv/config";
import { z } from "zod";

const zodObject = {
  PORT: z.coerce.number().default(8000),
  ENVIRONMENT: z
    .enum(["development", "production", "test"])
    .default("development"),
  HTTP_SECURE_OPTION: z.string(),
  ACCESS_CONTROL_ORIGIN: z.string(),
  GMAIL_USER: z.string(),
  GMAIL_APP_PASSWORD: z.string(),
  MAILTRAP_HOST: z.string(),
  MAILTRAP_PORT: z.string(),
  MAILTRAP_USER: z.string(),
  MAILTRAP_PASS: z.string(),
  API_ACCESS_TOKEN: z.string(),
};

const envSchema = z.object(zodObject);
export const env = envSchema.parse(process.env);
