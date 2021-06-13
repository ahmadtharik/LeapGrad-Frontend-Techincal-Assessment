import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayResultItem from "./DisplayResultItem.jsx";
import regeneratorRuntime from "regenerator-runtime";

const Display = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios(
        "https://aircall-job.herokuapp.com/activities"
      );
      setResults(data);
    };

    search();
  }, []);

  const renderedResults = results.map((result) => {
    return <DisplayResultItem result={result} key={result.id} />;
  });

  return (
    <div>
      <div>{renderedResults}</div>
    </div>
  );
};

export default Display;
