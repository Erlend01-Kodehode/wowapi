import { useContext } from "react";
import { FetchContext } from "../App";
import { apiAdress, apiModifier, apiResults } from "../data/api";

function Header() {
  const [apiFetch, setApiFetch] = useContext(FetchContext);

  function handleFetch() {
    setApiFetch(`${apiAdress}`);
  }

  return (
    <>
      <h2>Header</h2>
      <div>
        <button onClick={() => handleFetch()}>Random</button>
      </div>
    </>
  );
}

export default Header;
