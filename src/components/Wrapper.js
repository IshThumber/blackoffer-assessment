import React, { useState } from "react";
import jsonData from "../data/jsondata.json";
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

  //   { firstName: "John", lastName: "Doe", age: 50 },
  //   { firstName: "John", lastName: "Doe", age: 50 },
  //   { firstName: "John", lastName: "Doe", age: 50 },
  //   { firstName: "John", lastName: "Doe", age: 50 },
  //   { firstName: "John", lastName: "Doe", age: 50 },
  //   { firstName: "John", lastName: "Doe", age: 50 },
  //   { firstName: "John", lastName: "Doe", age: 50 },
  //   { firstName: "John", lastName: "Doe", age: 50 },
  //   { firstName: "John", age: 50, lastName: "Doe" },
  // ];

  // const keysArray = ["firstName", "lastName", "age"];

  // function getValuesByKey(key) {
  //   if (!keysArray.includes(key)) {
  //     return "Invalid key";
  //   }

  //   return jsonData2.map((entry) => entry[key]);
  // }

  // // Example usage:
  // const firstNameValues = getValuesByKey("age");
  // console.log(firstNameValues); // Array containing all "firstName" values in the JSON data

  return (
    <>
      <div className="bg-red-500 text-2xl items-center flex flex-col justify-items-start">
        <h2>Want to view charts for Occurrences of a key?</h2>
        <div className="bg-pink-400 p-3 w-fit">
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
