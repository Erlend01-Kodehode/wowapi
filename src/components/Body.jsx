import { useContext } from "react";
import { ApiContext, DataContext } from "../App.jsx";

function Body() {
  const [apiData, setApiData] = useContext(ApiContext);
  const [loading, setLoading, error, setError] = useContext(DataContext);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!error && !loading && apiData && (
        <div>
          {/* <p>Loaded</p> */}
          <h2>{apiData[0].movie}</h2>
          <p>{apiData[0].full_line}</p>
          <img src={apiData[0].poster} alt="Movie Poster" />
        </div>
      )}
    </>
  );
}

export default Body;
