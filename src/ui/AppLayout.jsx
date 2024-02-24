import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
export default function AppLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto-1fr-auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="   overflow-scroll">
        <main className="mx-auto max-w-3xl	 ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
