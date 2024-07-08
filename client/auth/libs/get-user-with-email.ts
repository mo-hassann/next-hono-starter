import db from "@/db";
import { userTable } from "@/db/schemas/user";
import { eq } from "drizzle-orm";

export const getUserWithEmail = async (email: string) => {
  try {
    const user = await db
      .select({ id: userTable.id, name: userTable.name, image: userTable.image, email: userTable.email, password: userTable.password })
      .from(userTable)
      .where(eq(userTable.email, email))
      .then((table) => table[0]);

    return user;
  } catch (error) {
    console.log("ERROR: ", error);
    return null;
  }
};
