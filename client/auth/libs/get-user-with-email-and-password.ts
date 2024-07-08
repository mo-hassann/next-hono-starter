"use server";

import db from "@/db";
import { userTable } from "@/db/schemas/user";
import { eq, and } from "drizzle-orm";
import { signInSchemaType } from "../schemas";

export default async function getUserWithEmailAndPassword(data: signInSchemaType) {
  try {
    const user = await db
      .select({
        id: userTable.id,
        name: userTable.name,
        email: userTable.email,
        img: userTable.image,
      })
      .from(userTable)
      .where(and(eq(userTable.email, data.email), eq(userTable.password, data.password)))
      .then((table) => table[0]);

    return user;
  } catch (error) {
    console.log("ERROR: ", error);
    return null;
  }
}
