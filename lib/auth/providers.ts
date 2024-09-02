"use server";

import { signIn } from "@/auth";
import { BuiltInProviderType } from "@auth/core/providers";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export const providerAuth = async (provider: BuiltInProviderType) => {
  try {
    await signIn(provider);
  } catch (error: any) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { message: "something went wrong.", cause: error?.message, status: 400 };
  }
};
