import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignOutBtn() {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signOut();
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <Button>sign out</Button>
    </form>
  );
}
