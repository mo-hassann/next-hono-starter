import SignOutBtn from "@/components/auth/sign-out-btn";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth/current-user";

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      starting page
      {JSON.stringify(user)}
      <SignOutBtn>sign out</SignOutBtn>
    </div>
  );
}
