import { Hono } from "hono";

import test from "./test";
import post from "./post";
import auth from "./auth";

const app = new Hono();

const routes = app /*  */
  .route("/test", test)
  .route("/post", post)
  .route("/auth", auth);

export default routes;
