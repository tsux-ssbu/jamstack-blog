import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "tsuka6log",
  apiKey: process.env.API_KEY || "",
});
