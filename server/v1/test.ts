import { getAuthUser, verifyAuth } from "@hono/auth-js";
import { Hono } from "hono";

const app = new Hono()
  .get("/auth-needed", verifyAuth(), async (c) => {
    const auth = c.get("authUser");
    return c.json({ auth, data: "some other data" });
  })
  .get("/public", (c) => c.json("this is public route!"));

export default app;
