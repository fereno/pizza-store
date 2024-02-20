/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();
  console.log("menu", menu);

  return (
    <>
      <h1>Menu</h1>
      {menu.map((m) => (
        <MenuItem key={m.id} pizza={m} />
      ))}
    </>
  );
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
