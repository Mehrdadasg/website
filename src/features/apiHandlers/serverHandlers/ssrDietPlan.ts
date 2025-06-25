import { getClinicData } from "@/service/getClinicData";
import { QueryClient } from "@tanstack/react-query";

export const ssrDietPlan = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/diet"],
    queryFn: getClinicData,
  });
  return { dietPlan: Data };
};
