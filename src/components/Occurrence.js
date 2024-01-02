import React, { useState } from "react";
import Charts from "./Charts";

const Occurrence = (props) => {
  const [selectedKey, setSelectedKey] = useState("");

  let key1 = props.key1;
  let wholeData = props.wholeData;
  const handleChange = (e) => {
    console.log("change");
    setSelectedKey(e.target.value);
  };
  console.log(selectedKey);

  // calculate the number of occurrences of value from the selected key

  const calculateOccurrences = (data, fields) => {
    return data.reduce((acc, item) => {
      const key = fields.map((field) => item[field]).join("------");
      acc[key] = (acc[key] || 0) + 1;
      // acc.sort();
      return acc;
    }, {});
  };
  const fieldsToCalculate = [selectedKey];
  const occurrences = calculateOccurrences(wholeData, fieldsToCalculate);

  console.log(occurrences);

  const occKey = Object.entries(occurrences).map((item) => {
    return item[0];
  });
  const occCount = Object.entries(occurrences).map((item) => {
    return item[1];
  });

  return (
    <>
      <div className="mb-4">
        Key:
        <select
          name="Key filter X"
          onChange={handleChange}
          className="ml-5 px-10 p-2 rounded-lg border-2 border-gray-800"
        >
          <option>All</option>
          {key1.map((item) => {
            return (
              <>
                <option
                  value={item}
                  onChange={handleChange}
                >
                  {item}
                </option>
              </>
            );
          })}
        </select>
      </div>

      <Charts label={occKey} data={occCount} isOcc={"Yes"} />
    </>
  );
};

export default Occurrence;
