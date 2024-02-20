import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
export default function AppLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </>
  );
}
