import SignOutBtn from "@/client/auth/components/sign-out-btn";
import { currentUser } from "@/lib/auth";

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      {JSON.stringify(user)}
      <SignOutBtn />
    </div>
  );
}
