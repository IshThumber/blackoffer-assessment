import React, { useState } from "react";
import jsonData from "../data/data.json";
import Charts from "./Charts";
import KeyFilters from "./KeyFilters";
import Occurrence from "./Occurrence";

const Wrapper = () => {
  const [occurrence, setOccurrence] = useState("Yes");
  const keys = Object.keys(jsonData[0]);
  let key = keys.map((key) => {
    return key;
  });
  let wholeData = jsonData.map((item) => {
    return item;
  });

  return (
    <>
      <div className="bg-green-200 text-2xl items-center flex flex-col justify-items-start mb-3">
        <h2>Want to view charts for Occurrences of a key?</h2>
        <div className="p-3 w-fit">
          <ul className="flex gap-5">
            <label className="">
              <input
                type="radio"
                value="Yes"
                checked={occurrence === "Yes"}
                onChange={(e) => setOccurrence(e.target.value)}
              />
              Yes
            </label>
            <label className="">
              <input
                type="radio"
                value="No"
                checked={occurrence === "No"}
                onChange={(e) => setOccurrence(e.target.value)}
              />
              No
            </label>
          </ul>
        </div>
      </div>

      {occurrence === "Yes" ? (
        <Occurrence key1={key} wholeData={wholeData} />
      ) : (
        <KeyFilters key1={key} wholeData={wholeData} />
      )}
    </>
  );
};

export default Wrapper;
