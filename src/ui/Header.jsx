import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <div
      className="  flex items-center justify-between border-b border-stone-300 bg-rose-500 px-4
      py-3 uppercase
    "
    >
      <Link
        to="/"
        className="font-bold tracking-[10px]
"
      >
        Pizza store
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}
