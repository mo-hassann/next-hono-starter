import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import client from "@/server/client";
import { InferRequestType, InferResponseType } from "hono";
import { handleErrors } from "@/lib/server/errors";

const { $post } = client.api.v1.test;

type resT = InferResponseType<typeof $post>;
type reqT = InferRequestType<typeof $post>["json"];

export default function usePostTest() {
  const mutation = useMutation<resT, Error, reqT>({
    mutationFn: async (values) => {
      const res = await $post({ json: { ...values } });

      // handle throw the error response
      if (!res.ok) throw await handleErrors(res);

      return await res.json();
    },
    onSuccess: (res: any) => {
      toast.success(res.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}
