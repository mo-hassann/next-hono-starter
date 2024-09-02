"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { providerAuth } from "@/lib/auth/providers";
import { toast } from "sonner";

export default function GoogleBtn() {
  return (
    <form action={() => providerAuth("google").then((res) => res?.status === 400 && toast.error(res?.message))}>
      <Button type="submit" variant="outline" className="w-full">
        <FcGoogle className="mx-2" />
        Continue with google
      </Button>
    </form>
  );
}
