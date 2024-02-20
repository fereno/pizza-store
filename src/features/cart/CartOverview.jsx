import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="text-stone-200 bg-stone-800">
      <p className="text-stone-300 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
