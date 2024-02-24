import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="  text-center sm:my-30  mb-1 my-10 ">
      <h1 className="md:text-3xl mb-8 text-xl text-stone-500 font-semibold px-4 py-3 sm:px-6">
        The best pizza.
        <br />
        <span className="text-rose-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
