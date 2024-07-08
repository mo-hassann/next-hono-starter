import { handle } from "hono/vercel";
import app from "./server/middleware";

export default handle(app);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
