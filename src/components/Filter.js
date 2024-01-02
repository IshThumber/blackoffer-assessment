// import React from "react";
// import data from "../data/jsondata.json";
// const Filter = () => {
//   const filterBasedOnRegion = data
//     .filter((item) => item.region)
//     .map((item) => return item.region);

//   console.log(filterBasedOnRegion);
//   return (
//     <>
//       <div>Filter</div>
//       {/* {filterBasedOnRegion} */}
//     </>
//   );
// };

// export default Filter;

import React, { useState } from "react";
import jsonData from "../data/jsondata.json";

const RegionFilter = () => {
  const uniqueRegions = Array.from(
    new Set(jsonData.map((item) => item.region))
  );
  uniqueRegions.splice(uniqueRegions.indexOf(""), 1);
  uniqueRegions.sort();

  const uniqueTopics = Array.from(new Set(jsonData.map((item) => item.topic)));
  uniqueTopics.sort();
  uniqueTopics.splice(uniqueTopics.indexOf(""), 1);
  // const [selectedRegion, setSelectedRegion] = useState("");

  // const filteredData = jsonData.filter((item) => {
  //   return selectedRegion === "" || item.region === selectedRegion;
  // });

  return (
    <div>
      <h2>Region Filter</h2>
      {/* <label htmlFor="regionFilter">Select Region:</label>
      <select
        id="regionFilter"
        onChange={(e) => setSelectedRegion(e.target.value)}
        value={selectedRegion}
      >
        <option value="">All</option>
        {uniqueRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select> */}
      {uniqueRegions.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
      <h2>Topic Filter</h2>
      {uniqueTopics.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
      {/* <div>
        <h3>Filtered Data</h3>
        <ul>
          {filteredData.map((item) => (
            <li key={item.topic}>{`${item.topic} - Region: ${item.region}`}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default RegionFilter;
