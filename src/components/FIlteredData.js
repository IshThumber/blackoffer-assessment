import { useState } from 'react';
import jsonData from "../data/jsondata.json"

const Dashboard = () => {
  const [selectedEndYear, setSelectedEndYear] = useState('');

  // Filter data based on selected end year
  const filteredData = jsonData.filter(item => {
    return selectedEndYear === '' || item.end_year === selectedEndYear;
  });

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Dropdown for selecting end year */}
      <label htmlFor="endYearFilter">Select End Year:</label>
      <select
        id="endYearFilter"
        onChange={(e) => setSelectedEndYear(e.target.value)}
        value={selectedEndYear}
      >
        <option value="">All</option>
        {/* You can dynamically generate options based on available end years */}
        {Array.from(new Set(jsonData.map(item => item.end_year))).map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {/* Display filtered data */}
      <div>
        <h3>Filtered Data</h3>
        <ul>
          {filteredData.map(item => (
            <li key={item.topic}>
              {`${item.topic} - End Year: ${item.end_year}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
