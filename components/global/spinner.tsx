import { cn } from "@/lib/utils";
import { Loader2, type LucideProps } from "lucide-react";

export default function Spinner({ className, ...props }: LucideProps) {
  return <Loader2 {...props} className={cn("animate-spin", className)} />;
}
