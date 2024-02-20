import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <div
      className="bg-rose-500 uppercase
    "
    >
      <Link
        to="/"
        className="tracking-[10px] font-bold
"
      >
        Pizza store
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}
