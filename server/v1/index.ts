import { Hono } from "hono";

import test from "./test";
import auth from "./auth";

const app = new Hono();

const routes = app /*  */
  .route("/test", test)
  .route("/auth", auth);

export default routes;
