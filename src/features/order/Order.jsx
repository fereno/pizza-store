/* eslint-disable no-unused-vars */
// Test ID: IIDSAT

import { useLoaderData, useParams } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = useLoaderData();
  console.log("order", useLoaderData());

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="divide-y border-b border-t px-4 py-3">
      <div className="sm:flex justify-between items-center py-2">
        <h2 className=" text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-600 tracking-wide uppercase py-1 px-2 rounded-full text-sm text-stone-200">Priority</span>}
          <span className="bg-green-600 tracking-wide uppercase py-1 px-2 rounded-full text-stone-200 text-sm">{status} order</span>
        </div>
      </div>

      
      <div className="bg-stone-200 p-3 flex justify-between items-center">
        <p className="font-semibold ">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs ">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y border-b  border-t py-5">
        {cart.map(item => <OrderItem key={item.id} item={item}/>)}
      </ul>

      <div className="bg-stone-200 p-5 ">
        <p className="text-sm">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  //const { orderId } = useParams();
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
