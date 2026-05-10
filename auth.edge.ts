import NextAuth, { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },
} satisfies NextAuthConfig;

export const { auth } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
});
