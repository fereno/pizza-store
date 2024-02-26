/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const formErrors = useActionData();
  const userName=useSelector(state=> state.user.userName)

  return (
    <div className="px-4 py-6">
      <h2 className="mb-5 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={userName} required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row  sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p className="text-sm text-red-600 px-2 rounded bg-red-200">{formErrors.phone}</p>}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row  sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
            className=" h-6 w-6 accent-rose-400 focus:outline-none focus:ring 
            focus:ring-rose-400 focus:ring-offset-2 "
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <input name="cart" type="hidden" value={JSON.stringify(cart)} />
        <div>
          <Button type="primary" disabled={false}>
            Order now
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); //** Object.fromEntries
  console.log("formData", formData);
  console.log("Data", data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us the correct phone number, we might need it to contact you.";

  if (Object.keys(errors > 0)) return errors; //**  Object.keys

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
