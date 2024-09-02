"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import useSignIn from "@/query-hooks/auth/use-sign-in";
import SignInForm from "@/components/auth/sign-in-form";
import Link from "next/link";
import SocialAuthSection from "@/components/auth/providers-auth-section";

export default function SignInPage() {
  const singInMutation = useSignIn();

  const { isPending, isSuccess } = singInMutation;

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm defaultValues={{ email: "", password: "" }} isPending={isPending || isSuccess} onSubmit={(values) => singInMutation.mutate(values)} />
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="w-full text-sm text-center">
          Don&apos;t have an account?&nbsp;
          <Link className="hover:underline hover:text-primary" href="/sign-up">
            sign up
          </Link>
        </p>
        <SocialAuthSection />
      </CardFooter>
    </Card>
  );
}
