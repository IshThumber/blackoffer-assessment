import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import data from "../data/jsondata.json";

const BarChart = (props) => {
  let label = data.map((item) => item.end_year);
  // sort label
  label.sort();
  // remove duplicate
  // label = Array.from(new Set(label));
  // console.log(label);
  // remove empty string
  label = label.filter((item) => item !== "");
  let dat = data.map((item) => item.intensity);
  // const labels = ;
  const datass = {
    labels: label,
    datasets: [
      {
        label: "Intensity",
        data: dat,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          // "rgba(255, 205, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          // "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          // "rgb(255, 205, 86)",
          // "rgb(75, 192, 192)",
          // "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          // "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //   },
  // };
  return (
    <>
      <div>Bar Chart</div>
      <div>
        <Bar data={datass} />
      </div>
    </>
  );
};

export default BarChart;
