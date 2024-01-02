import React from "react";
import { Bar } from "react-chartjs-2";
import data from "../data/jsondata.json";
const ChartComponent = () => {
  // Extract relevant data for visualization
  const titles = data.map((entry) => entry.topic);
  const intensities = data.map((entry) => entry.intensity);
  const likelihoods = data.map((entry) => entry.likelihood);
  const relevances = data.map((entry) => entry.relevance);

  // Bar chart data
  const intensityData = {
    labels: titles,
    datasets: [
      {
        label: "Intensity",
        data: intensities,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const likelihoodData = {
    labels: titles,
    datasets: [
      {
        label: "Likelihood",
        data: likelihoods,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  const relevanceData = {
    labels: titles,
    datasets: [
      {
        label: "Relevance",
        data: relevances,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div>
        <h2>Intensity Chart</h2>
        <Bar data={intensityData} />
      </div>
      <div>
        <h2>Likelihood Chart</h2>
        <Bar data={likelihoodData} />
      </div>
      <div>
        <h2>Relevance Chart</h2>
        <Bar data={relevanceData} />
      </div>
    </div>
  );
};

export default ChartComponent;
