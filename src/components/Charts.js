import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
// import { useState } from "react";

const Charts = (props) => {
  const barOne = () => {
    const getRandomColor = (num) => {
      let colors = [];
      for (var j = 0; j < num; j++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r}, ${g}, ${b}, 0.4)`;
        colors.push(color);
      }
      return colors;
    };


    let label = props.label;
    let data = props.data;
    const datass = {
      labels: label,
      datasets: [
        {
          // label: label,
          data: data,
          backgroundColor: getRandomColor(10),
          // borderColor: getRandomColor(5),
          borderWidth: 1,
        },
      ],
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    return (
      <>
        <div className="w-11/12 h-[700px]">
          <Bar data={datass} options={options} />
        </div>
      </>
    );
  };

  // const occurrenceChart = () => {
  //   const getRandomColor = (num) => {
  //     let colors = [];
  //     for (var j = 0; j < num; j++) {
  //       let r = Math.floor(Math.random() * 256);
  //       let g = Math.floor(Math.random() * 256);
  //       let b = Math.floor(Math.random() * 256);
  //       let color = `rgb(${r}, ${g}, ${b}, 0.6)`;
  //       colors.push(color);
  //     }
  //     return colors;
  //   };

  //   console.log(props.isOcc);

  //   let label = props.occKey;
  //   let data = props.occCount;
  //   const datass = {
  //     labels: label,
  //     datasets: [
  //       {
  //         // label: label,
  //         data: data,
  //         backgroundColor: getRandomColor(10),
  //         // borderColor: getRandomColor(5),
  //         borderWidth: 1,
  //       },
  //     ],
  //   };
  //   const options = {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //   };

  //   return (
  //     <>
  //       <div className="w-11/12 h-[700px]">
  //         <Bar data={datass} options={options} />
  //       </div>
  //     </>
  //   );
  // };
  return (
    <>
      <div>
        {/* {props.isOcc === "Yes" ? <>{occurrenceChart()}</> : <>{barOne()}</>} */}
        {barOne()}
      </div>
    </>
  );
};

export default Charts;
