import { useContext } from "react";
import { FetchContext } from "../App.jsx";
import { apiAdress, apiModifier, apiResults } from "../data/api.js";

function Header() {
  const [apiFetch, setApiFetch] = useContext(FetchContext);

  function handleFetch() {
    setApiFetch(null);
    setTimeout(() => {
      setApiFetch(`${apiAdress}`);
    }, 100);
  }

  return (
    <div>
      <button onClick={() => handleFetch()}>Fetch Random Wow</button>
    </div>
  );
}

export default Header;
