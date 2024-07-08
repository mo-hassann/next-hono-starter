import { pgTable, uuid, text, varchar, date, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  userName: varchar("user_name", { length: 256 }).notNull().unique(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: text("password"),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  bio: text("bio"),
  image: text("image"),
  dateOfBirth: date("date_of_birth", { mode: "string" }),
});
