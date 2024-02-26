import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const userName = useSelector((state) => state.user.userName);
  const navigate = useNavigate();
  console.log("username", userName);
  return (
    <div className="  sm:my-30 my-10  mb-1 text-center ">
      <h1 className="mb-8 px-4 py-3 text-xl font-semibold text-stone-500 sm:px-6 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-rose-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to='/menu'>continue ordering, {userName}</Button>
      )}
    </div>
  );
}

export default Home;
