import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const app = new Hono()
  .get("/", async (c) => {})
  .post("/", (c) => c.json("create a book", 201))
  .get("/:id", zValidator("param", z.object({ id: z.string() })), (c) => c.json(`get ${c.req.param("id")}`));

export default app;
