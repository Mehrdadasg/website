import { getTestimonials } from "@/service/getTestimonials";
import { QueryClient } from "@tanstack/react-query";

export const ssrTestimonials = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/testimonials"],
    queryFn: getTestimonials,
  });
  return { testimonialsData: Data };
};
