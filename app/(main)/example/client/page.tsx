"use client";

import { Button } from "@/components/ui/button";
import useGetTest from "@/query-hooks/test/use-get-test";
import usePostTest from "@/query-hooks/test/use-post-test";

export default function ClientPage() {
  const testMutation = usePostTest();
  const testRes = useGetTest();
  if (testRes.isPending || testRes.isLoading) return <div>loading...</div>;
  if (testRes.isError) return <div>error.</div>;
  return (
    <div>
      <div>{JSON.stringify(testRes.data)}</div>
      <Button onClick={() => testMutation.mutate({ arg1: false })}>click me</Button>
    </div>
  );
}
