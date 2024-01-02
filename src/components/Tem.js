import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar, Scatter, Line, Pie } from "react-chartjs-2";
import data from "../data/jsondata.json";
const Visualizations = () => {
  // const handleHistogram = () => {
  //   const intensityValues = data.map((item) => item.intensity);
  //   const histogramData = {
  //     labels: Array.from({ length: 11 }, (_, i) => i + 1).map(
  //       (x) => `Intensity ${x}`
  //     ), // Assuming intensity values range from 1 to 10
  //     datasets: [
  //       {
  //         label: "Intensity Distribution",
  //         data: intensityValues.reduce(
  //           (acc, value) => ({
  //             ...acc,
  //             [value]: (acc[value] || 0) + 1,
  //           }),
  //           {}
  //         ),
  //         backgroundColor: "rgba(255, 99, 132, 0.2)",
  //         borderColor: "rgba(255, 99, 132, 1)",
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  //   return <Histogram data={histogramData} />;
  // };

  const handleBarChart = () => {
    const topicCounts = {};
    data.forEach((item) => {
      topicCounts[item.topic] = (topicCounts[item.topic] || 0) + 1;
    });
    const barChartData = {
      labels: Object.keys(topicCounts), // Use topic names as labels
      datasets: [
        {
          label: "Topic Frequency",
          data: Object.values(topicCounts),
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    return <Bar data={barChartData} />;
  };

  const BarChart = () => {
    // Assuming data is an array of objects with topic and likelihood properties
    const barChartData = {
      labels: data.map((item) => item.topic),
      datasets: [
        {
          label: "Likelihood",
          data: data.map((item) => item.likelihood),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };

    return <Bar data={barChartData} horizontal={true} />;
  };

  const handleScatterPlot = () => {
    const scatterChartData = {
      labels: ["Likelihood"],
      datasets: [
        {
          label: "Intensity",
          data: data.map((item) => ({ x: item.likelihood, y: item.intensity })),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          pointRadius: 5,
        },
      ],
    };

    return <Scatter data={scatterChartData} />;
  };

  const lineChartData = () => {
    // Assuming data is an array of objects with year, intensity, and topic properties
    const lineChartData = {
      labels: data.map((item) => item.year),
      datasets: [
        {
          label: "Topic 1",
          data: data
            .filter((item) => item.topic === "Topic 1")
            .map((item) => item.intensity),
          borderColor: "blue",
          backgroundColor: "rgba(0, 128, 255, 0.2)",
          fill: true,
        },
        // Add more datasets for other topics with different colors
      ],
    };

    return <Line data={lineChartData} />;
  };

  const pieChartData = () => {
    // Assuming data is an array of objects with source and count properties
    const pieChartData = {
      labels: data.map((item) => item.source),
      datasets: [
        {
          label: "Source Composition",
          data: data.map((item) => item.count),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#990099",
          ], // Example colors
        },
      ],
    };

    return <Pie data={pieChartData} />;
  };

  const stackedBarChartData = () => {
    const stackedBarChartData = {
      labels: [
        "Political",
        "Economic",
        "Social",
        "Technical",
        "Legal",
        "Environmental",
      ],
      datasets: [
        {
          label: "PESTLE Categories",
          data: data.map((item) => item.count),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    return (
      <Chart
        type="bar"
        data={stackedBarChartData}
        options={{ scales: { x: { stacked: true } } }}
      />
    );
  };

  return (
    <div>
      {/* Render charts based on user selection or logic */}
      {/* Example: Render histogram by default */}
      {/* {handleBarChart()} */}
      {/* {handleHistogram()} */}
      {/* {handleScatterPlot()} */}
      {BarChart()}
      {lineChartData()}
      {pieChartData()}
      {/* {stackedBarChartData()} */}
    </div>
  );
};

export default Visualizations;
