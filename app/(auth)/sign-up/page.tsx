"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import SignUpForm from "@/client/auth/components/sign-up-form";
import useSignUp from "@/client/auth/api/use-sign-up";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUpPage() {
  const singUpMutation = useSignUp();

  const isPending = singUpMutation.isPending;
  return (
    <Card className="w-96 pt-5 pb-8">
      <CardHeader>
        <CardTitle>Sing Up</CardTitle>
        <CardDescription>this is sign up page</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm defaultValues={{ name: "", email: "", password: "", confirmPassword: "" }} disabled={isPending} onSubmit={(values) => singUpMutation.mutate(values)} />
      </CardContent>
      <CardFooter>
        <Button variant={"link"} asChild>
          <Link href="/sign-in">Already have an account? sign in</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
