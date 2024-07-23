import SignOutBtn from "@/client/auth/components/sign-out-btn";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      starting page
      {JSON.stringify(user)}
      <SignOutBtn>
        <Button>sign out</Button>
      </SignOutBtn>
    </div>
  );
}
