/* eslint-disable react/prop-types */
import {  useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getQuantityOfCurrentItemById } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  // eslint-disable-next-line no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getQuantityOfCurrentItemById(pizzaId))
 
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="items-center justify-between flex sm:flex sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
      
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
