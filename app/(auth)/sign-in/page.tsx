"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import useSignIn from "@/client/auth/api/use-sign-in";
import SignInForm from "@/client/auth/components/sign-in-form";
import Link from "next/link";

export default function SignInPage() {
  const singInMutation = useSignIn();

  const isPending = singInMutation.isPending;
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm defaultValues={{ email: "", password: "" }} disabled={isPending} onSubmit={(values) => singInMutation.mutate(values)} />
      </CardContent>
      <CardFooter>
        <p className="w-full text-sm text-center">
          Don&apos;t have an account?&nbsp;
          <Link className="hover:underline hover:text-primary" href="/sign-up">
            sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
