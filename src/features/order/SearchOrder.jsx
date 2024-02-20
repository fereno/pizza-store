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
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="search order"
      />
    </form>
  );
}

export default SearchOrder;
