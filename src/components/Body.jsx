import { useContext } from "react";
import { ApiContext, DataContext } from "../App";
import Wow from "./Wow";

function Body() {
  const [apiData, setApiData] = useContext(ApiContext);
  const [loading, setLoading, error, setError] = useContext(DataContext);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!error && !loading && apiData && (
        <div>
          <p>Loaded</p>
          {/* {apiData.results.map((wow) => {
            return <Wow key={wow.id} wow={wow} />;
          })} */}
        </div>
      )}
    </>
  );
}

export default Body;
