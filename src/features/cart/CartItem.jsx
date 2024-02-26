/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  // eslint-disable-next-line no-unused-vars
  const { id, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const handelRemoveItem = () => {
    console.log("idddd", id)
    dispatch(deleteItem(id));

  };
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="items-center justify-between sm:flex sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
      
        <DeleteItem pizzaId={id} />
      </div>
    </li>
  );
}

export default CartItem;
