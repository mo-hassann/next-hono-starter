"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import useSignIn from "@/client/auth/api/use-sign-in";
import SignInForm from "@/client/auth/components/sign-in-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignInPage() {
  const singInMutation = useSignIn();

  const isPending = singInMutation.isPending;
  return (
    <Card className="w-96 pt-5 pb-8">
      <CardHeader>
        <CardTitle>Sing in</CardTitle>
        <CardDescription>this is sign in page</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm defaultValues={{ email: "", password: "" }} disabled={isPending} onSubmit={(values) => singInMutation.mutate(values)} />
      </CardContent>
      <CardFooter>
        <Button variant={"link"} asChild>
          <Link href="/sign-up">Don&apos;t have an account? sign up</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
