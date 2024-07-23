"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import SignUpForm from "@/client/auth/components/sign-up-form";
import useSignUp from "@/client/auth/api/use-sign-up";
import Link from "next/link";

export default function SignUpPage() {
  const singUpMutation = useSignUp();

  const isPending = singUpMutation.isPending;
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Sing Up</CardTitle>
        <CardDescription>this is sign up page</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm defaultValues={{ name: "", email: "", password: "", confirmPassword: "" }} disabled={isPending} onSubmit={(values) => singUpMutation.mutate(values)} />
      </CardContent>
      <CardFooter>
        <p className="w-full text-sm text-center">
          Already have an account?&nbsp;
          <Link className="hover:underline hover:text-primary" href="/sign-in">
            sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
