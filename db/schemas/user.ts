import { pgTable, uuid, text, varchar, date, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  username: varchar("user_name", { length: 256 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password"),
  emailVerified: timestamp("email_verified"),
  bio: text("bio"),
  image: text("image"),
  dateOfBirth: date("date_of_birth"),
});
