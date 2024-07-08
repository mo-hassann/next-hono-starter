import { NextAuthConfig } from "next-auth";
import getUserWithEmailAndPassword from "./client/auth/libs/get-user-with-email-and-password";

import Credentials from "next-auth/providers/credentials";
import { signInFormSchema } from "./validators";

import bcrypt from "bcryptjs";
import { getUserWithEmail } from "./client/auth/libs/get-user-with-email";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        const validatedFields = signInFormSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          // check email exist before sign in with data
          const user = await getUserWithEmail(email);

          if (!user || !user.password) return null;

          const isPasswordMatch = bcrypt.compareSync(password, user.password);

          if (!isPasswordMatch) {
            return null;
          }

          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        // Your sign-in logic here
        return true; // Allow sign-in
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false; // Deny sign-in
      }
    },
  },
} satisfies NextAuthConfig;
