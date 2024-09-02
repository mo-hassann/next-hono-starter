import React from "react";
import { Separator } from "../ui/separator";
import GoogleBtn from "./google-btn";

export default function ProvidersAuthSection() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center overflow-hidden my-3 justify-center">
        <Separator />
        <span className="block mx-3 text-muted-foreground text-sm">or</span>
        <Separator />
      </div>
      <GoogleBtn />
    </div>
  );
}
