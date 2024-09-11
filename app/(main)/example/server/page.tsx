import React from "react";
import client from "@/server/client";
import { requestData } from "@/lib/server/request-data";

export default async function TestPage() {
  const res = await requestData(client.api.v1.test, "$get", { query: { test: "test" } });

  if (res.isError) return <div>{res.errorMessage}</div>;

  const myData = res.data;

  return <div>{JSON.stringify(myData)}</div>;
}
