import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handlerSubmit}>
      <input
        className="w-28 rounded-full bg-rose-200 px-4 py-2 text-sm transition-all duration-300
         placeholder:text-rose-700  focus:outline-none  focus:ring focus:ring-rose-200 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="search order"
      />
    </form>
  );
}

export default SearchOrder;
