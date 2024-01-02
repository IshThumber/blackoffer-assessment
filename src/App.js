import React, { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jsonData, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:5001/data");
        const response = await fetch(
          "https://blackcoffer-jj2g.onrender.com/data"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return <>{loading === false && <Wrapper jsonData={jsonData} />}</>;
};

export default App;
