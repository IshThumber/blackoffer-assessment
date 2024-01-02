import React, { useState } from "react";
import Charts from "./Charts";
// import Dashboard from "./FIlteredData";

const KeyFilters = (props) => {
  const [selectedKeyX, setSelectedKeyX] = useState("");
  const [selectedKeyY, setSelectedKeyY] = useState("");
  let key1 = props.key1;
  let wholeData = props.wholeData;

  function getValuesByKey(key) {
    if (!key1.includes(key)) {
      return [];
    }
    return wholeData.map((entry) => entry[key]);
  }

  const handleChangeX = (e) => {
    setSelectedKeyX(e.target.value);
  };
  const handleChangeY = (e) => {
    setSelectedKeyY(e.target.value);
  };
  const filteredDataX = getValuesByKey(selectedKeyX);
  const filteredDataY = getValuesByKey(selectedKeyY);

  function removeDupAndEmpty(anything) {
    let arr = anything;
    arr.filter((item, index) => arr.indexOf(item) === index);
    arr.splice(arr.indexOf(""), 1);
    arr.sort();
    return arr;
  }
  const processedX = removeDupAndEmpty(filteredDataX);
  const processedY = removeDupAndEmpty(filteredDataY);

  return (
    <>
      <div className="flex flex-row gap-16 mb-4">
        <div>
          Labels:
          <select
            name="Key filter X"
            onChange={handleChangeX}
            className="ml-5 px-10 p-2 rounded-lg border-2 border-gray-800"
          >
            <option>All</option>
            {key1.map((item) => {
              return (
                <>
                  <option value={item} onChange={handleChangeX}>
                    {item}
                  </option>
                </>
              );
            })}
          </select>
        </div>

        <div>
          Data:
          <select
            name="Key filter Y"
            onChange={handleChangeY}
            className="ml-5 px-10 p-2 rounded-lg border-2 border-gray-800"
          >
            <option>All</option>
            {key1
              .filter((item) => {
                return item !== selectedKeyX;
              })
              .map((item) => {
                return (
                  <>
                    <option value={item} onChange={handleChangeY}>
                      {item}
                    </option>
                  </>
                );
              })}
          </select>
        </div>
      </div>

      <div>
        <Charts label={processedX} data={processedY} />
      </div>
    </>
  );
};

export default KeyFilters;
