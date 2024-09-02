"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import SignUpForm from "@/components/auth/sign-up-form";
import useSignUp from "@/query-hooks/auth/use-sign-up";
import Link from "next/link";
import SocialAuthSection from "@/components/auth/providers-auth-section";

export default function SignUpPage() {
  const singUpMutation = useSignUp();

  const { isPending, isSuccess } = singUpMutation;
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Sing Up</CardTitle>
        <CardDescription>this is sign up page</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm defaultValues={{ name: "", email: "", password: "", confirmPassword: "" }} isPending={isPending || isSuccess} onSubmit={(values) => singUpMutation.mutate(values)} />
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="w-full text-sm text-center">
          Already have an account?&nbsp;
          <Link className="hover:underline hover:text-primary" href="/sign-in">
            sign in
          </Link>
        </p>
        <SocialAuthSection />
      </CardFooter>
    </Card>
  );
}
