import { useQuery } from "@tanstack/react-query";

import client from "@/server/client";
import { handleErrors } from "@/lib/server/errors";

export default function useGetTest() {
  const query = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const res = await client.api.v1.test.$get({ query: { test: "12" } });

      // handle throw the error response
      if (!res.ok) throw await handleErrors(res);
      const { data } = await res.json();

      return data;
    },
  });

  return query;
}
