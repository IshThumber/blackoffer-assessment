import data from "../data/jsondata.json";

const Temp = () => {
  // let uni = data.filter((item, i, ar) => ar.indexOf(item) === i)

  // const uniqueTopics = Array.from(new Set(data.map(item => item.topic)));
  // const occurrences = data.reduce((acc, { intensity, end_year }) => {
  //   // acc[item.topic] = (acc[item.topic] || 0) + 1;
  //   acc[intensity] = (acc[intensity] || 0) + 1;
  //   // acc[item.source] = (acc[item.source] || 0) + 1;
  //   acc[end_year] = (acc[end_year] || 0) + 1;
  //   return acc;
  // }, {});

  const calculateOccurrences = (data, fields) => {
    return data.reduce((acc, item) => {
      const key = fields.map((field) => item[field]).join("------");
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  };
  const fieldsToCalculate = ["", "topic"];
  const occurrences = calculateOccurrences(data, fieldsToCalculate);

  return (
    <>
      <div className="">
        <h2>Multi-Field Occurrences</h2>
        <ul>
          {Object.entries(occurrences).map(([key, count]) => (
            <li key={key}>
              {`${key}: ${count} occurrence${count !== 1 ? "s" : ""}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Temp;
