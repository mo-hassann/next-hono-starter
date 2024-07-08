import { Hono } from "hono";

import test from "./test";
import post from "./post";
import user from "./user";

const app = new Hono();

const routes = app /*  */
  .route("/test", test)
  .route("/post", post)
  .route("/user", user);

export default routes;
