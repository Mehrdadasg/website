import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MainHeader from "./components/MainHeader";
import { ssrHeader } from "../apiHandlers/serverHandlers/ssrHeader";

async function Header() {
  const queryClient = new QueryClient();
  await ssrHeader(queryClient);
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <header
        className="fixed w-full px-5 lg:px-10 xl:px-16 top-4 z-50"
        role="banner"
      >
        <MainHeader/>
      </header>
    </HydrationBoundary>
  );
}

export default Header;
