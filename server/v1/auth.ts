import db from "@/db";
import { userTable } from "@/db/schemas/user";
import { signInFormSchema, signUpFormSchema } from "@/validators";
import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { Hono } from "hono";

import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { generateRandomUserName } from "@/lib";
import { isRedirectError } from "next/dist/client/components/redirect";

const app = new Hono()
  .post("/sign-up", zValidator("json", signUpFormSchema), async (c) => {
    try {
      const values = c.req.valid("json");

      // check if the user with this email is already exist
      const [existingUser] = await db.select({ id: userTable.id }).from(userTable).where(eq(userTable.email, values.email));

      if (existingUser) {
        return c.json({ message: "user with this email is already exist" }, 400);
      }

      // create random unique user name because it require in the db and user can change this userName in their profile after registration and login successfully
      const username = generateRandomUserName(values.name);

      // hash the password before send it to the db
      const hashedPassword = bcrypt.hashSync(values.password, 8);

      // add the user to the db
      await db
        .insert(userTable)
        .values({ ...values, username, password: hashedPassword })
        .returning({ name: userTable.name });

      return c.json({ message: "user added successfully" });
    } catch (error: any) {
      console.log(error);
      return c.json({ message: "field to register the user", cause: error?.message }, 400);
    }
  })
  .post("/sign-in", zValidator("json", signInFormSchema), async (c) => {
    try {
      const values = c.req.valid("json");

      // try to sign the user in using Auth js
      await signIn("credentials", { ...values, redirect: false });

      return c.json({ message: "user signed in successfully" });
    } catch (error: any) {
      if (isRedirectError(error)) {
        throw error;
      }
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return c.json({ message: "email or password is not correct", cause: error?.message }, 400);
          case "CallbackRouteError":
            return c.json({ message: "email or password is not correct", cause: error?.message }, 400);

          default:
            return c.json({ message: "something went wrong.", cause: error?.message }, 400);
        }
      }
      return c.json({ message: "unknown error", cause: error?.message }, 400);
    }
  })
  .post("/sign-out", async (c) => {
    try {
      await signOut({ redirect: false });
      return c.json({ message: "user signed out successfully" });
    } catch (error: any) {
      if (isRedirectError(error)) {
        throw error;
      }
      return c.json({ message: "something went wrong" }, 400);
    }
  });

export default app;
