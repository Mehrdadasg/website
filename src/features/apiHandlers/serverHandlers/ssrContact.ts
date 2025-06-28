import { getContact } from "@/service/getContact";
import { QueryClient } from "@tanstack/react-query";

export const ssrContact = async (queryClient: QueryClient) => {
  const {Data} = await queryClient.fetchQuery({
    queryKey: [`/page/contact`],
    queryFn: getContact,
  });

  return { contactData: Data };
};