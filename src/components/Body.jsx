import { useContext } from "react";
import { ApiContext, DataContext } from "../App.jsx";
import Wow from "./Wow.jsx";

function Body() {
  const [apiData, setApiData] = useContext(ApiContext);
  const [loading, setLoading, error, setError] = useContext(DataContext);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!error && !loading && apiData && (
        <>
          {apiData.map((wow) => {
            return <Wow key={wow.id} wow={wow} />;
          })}
        </>
      )}
    </>
  );
}

export default Body;
