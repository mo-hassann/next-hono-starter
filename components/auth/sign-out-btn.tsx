"use client";

import { Button } from "@/components/ui/button";
import useSignOut from "../../query-hooks/auth/use-sign-out";

type props = {
  children: React.ReactNode;
};

export default function SignOutBtn({ children }: props) {
  const signOutMutation = useSignOut();
  const { isPending, isSuccess } = signOutMutation;
  return (
    <Button state={isPending || isSuccess ? "loading" : "default"} onClick={() => signOutMutation.mutate({})}>
      {children}
    </Button>
  );
}
