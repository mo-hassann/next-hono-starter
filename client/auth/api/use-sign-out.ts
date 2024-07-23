import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import client from "@/server/client";
import { InferRequestType, InferResponseType } from "hono";
import { handleErrors } from "@/lib/errors";
import { DEFAULT_SIGN_OUT_REDIRECT } from "@/routes";

const $post = client.api.v1["auth"]["sign-out"].$post;

type resT = InferResponseType<typeof $post>;
type reqT = InferRequestType<typeof $post>;

export default function useSignOut() {
  const router = useRouter();
  const mutation = useMutation<resT, Error, reqT>({
    mutationFn: async () => {
      const res = await $post();

      // handle throw the error response
      if (!res.ok) {
        throw await handleErrors(res);
      }

      return await res.json();
    },
    onSuccess: ({ message }) => {
      toast.success(message);
      router.push(DEFAULT_SIGN_OUT_REDIRECT);
    },
    onError: (error) => {
      console.log(error);

      toast.error(error.message);
    },
  });

  return mutation;
}
