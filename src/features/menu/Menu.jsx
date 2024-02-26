/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((m) => (
        <MenuItem key={m.id} pizza={m} />
      ))}
    </ul>
  );
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
