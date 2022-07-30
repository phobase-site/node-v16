import { UrqlClient } from "@phobase/client-urql";
import { createClient, fetchExchange } from "@urql/core";

export const getUrqlClient = (url: string): UrqlClient => {
  return new UrqlClient(
    createClient({
      url,
      fetchOptions: {
        credentials: "include",
      },
      exchanges: [fetchExchange],
    })
  );
};
