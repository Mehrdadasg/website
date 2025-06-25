import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MainHeader from "./components/MainHeader";
import { ssrHeader } from "../apiHandlers/serverHandlers/ssrHeader";

async function Header() {
  const queryClient = new QueryClient();
  const {headerData}=await ssrHeader(queryClient);
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <header
        className="fixed w-full px-3 sm:px-5 lg:px-10 xl:px-14 top-2 md:top-2 z-50"
        role="banner"
      >
        <MainHeader headerData={headerData}/>
      </header>
    </HydrationBoundary>
  );
}

export default Header;
