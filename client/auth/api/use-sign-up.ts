import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import client from "@/server/client";
import { InferRequestType, InferResponseType } from "hono";
import { handleErrors } from "@/lib/errors";

const $post = client.api.v1["user"]["register"]["$post"];

type resT = InferResponseType<typeof $post>;
type reqT = InferRequestType<typeof $post>["json"];

export default function useSignUp() {
  const router = useRouter();
  const mutation = useMutation<any, Error, reqT>({
    mutationFn: async (values) => {
      const res = await $post({ json: { ...values } });

      // handle throw the error response
      if (!res.ok) {
        throw await handleErrors(res);
      }
    },
    onSuccess: () => {
      router.push("/sign-in");
      toast.success("user signed up successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}
