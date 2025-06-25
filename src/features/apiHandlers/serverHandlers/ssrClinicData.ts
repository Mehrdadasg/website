import { getClinicData } from "@/service/getClinicData";
import { QueryClient } from "@tanstack/react-query";

export const ssrClinicData = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/clinic"],
    queryFn: getClinicData,
  });
  return { clinicData: Data };
};
