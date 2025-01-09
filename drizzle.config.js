import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url: 'postgresql://neondb_owner:WKlm9kDSMZO1@ep-dry-math-a4j6qh4c.us-east-1.aws.neon.tech/short-ai-video-generator?sslmode=require',
  }
});
