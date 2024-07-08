import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { DEFAULT_AUTH_ERROR_REDIRECT, DEFAULT_SIGN_IN_REDIRECT, DEFAULT_SIGN_OUT_REDIRECT } from "./routes";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: DEFAULT_SIGN_IN_REDIRECT,
    error: DEFAULT_AUTH_ERROR_REDIRECT,
    signOut: DEFAULT_SIGN_OUT_REDIRECT,
  },
  ...authConfig,
});
