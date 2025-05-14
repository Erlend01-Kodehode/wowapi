import Header from "./components/Header";
import Body from "./components/Body";

import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
export const FetchContext = createContext();
export const DataContext = createContext();

function App() {
  const [apiFetch, setApiFetch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (apiFetch != null) {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(apiFetch);
          if (!response.ok) {
            throw new Error(`HTTP error. Status ${response.status}`);
          }
          const result = await response.json();
          setApiData(result);
          setError(false);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [apiFetch]);

  useEffect(() => {
    console.log("Loading:", loading);
  }, [loading]);

  useEffect(() => {
    console.log("Error:", error);
  }, [error]);

  useEffect(() => {
    console.log("Fetch:", apiFetch);
  }, [apiFetch]);

  useEffect(() => {
    if (apiData != null) {
      console.log("Api:", apiData[0]);
    }
  }, [apiData]);

  return (
    <>
      <FetchContext.Provider value={[apiFetch, setApiFetch]}>
        <ApiContext.Provider value={[apiData, setApiData]}>
          <DataContext.Provider value={[loading, setLoading, error, setError]}>
            <Header />
            <Body />
          </DataContext.Provider>
        </ApiContext.Provider>
      </FetchContext.Provider>
    </>
  );
}

export default App;
