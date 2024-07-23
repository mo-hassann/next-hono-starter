"use client";

import useSignOut from "../api/use-sign-out";

type props = {
  children: React.ReactNode;
};

export default function SignOutBtn({ children }: props) {
  const signOutMutation = useSignOut();
  return (
    <button className="contents" onClick={() => signOutMutation.mutate({})}>
      {children}
    </button>
  );
}
