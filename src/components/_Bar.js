import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import data from "../data/data.json";
import { useState } from "react";

const BarChart = () => {
  const [colorss, setColorss] = useState([]);
  const getRandomColor = (num) => {
    // var letters = "0123456789ABCDEF".split("");
    // var colors = [];
    // for (var j = 0; j < num; j++) {
    //   var color = "#";
    //   for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    //   }
    //   colors.push(color);
    // }
    // return colors;

    let colors = [];
    for (var j = 0; j < num; j++) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let color = `rgb(${r}, ${g}, ${b})`;

      // setColorss(color);
      colors.push(color);
      // setColorss(colors);

      console.log(colors);
    }
    // return colors;
  };

  // function getRandomColorWithOpacity(num, opacity) {
  //   var baseColors = getRandomColor(num);
  //   var colorsWithOpacity = [];

  //   for (var i = 0; i < num; i++) {
  //     var baseColor = baseColors[i];

  //     // Extract RGB values from the base color
  //     var match = baseColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  //     var r = parseInt(match[1]);
  //     var g = parseInt(match[2]);
  //     var b = parseInt(match[3]);

  //     // Create a new color with specified opacity
  //     var colorWithOpacity = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  //     colorsWithOpacity.push(colorWithOpacity);
  //   }

  //   return colorsWithOpacity;
  // }

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
        backgroundColor: getRandomColor(5),
        // borderColor: getRandomColor(5),
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

// // Example usage: generate 5 colors with 0.2 opacity
// var colorsWithOpacity = getRandomColorWithOpacity(5, 0.2);
// console.log(colorsWithOpacity);

// function transparentColor(num) {
//   var color = getRandomColor(num)[0];
//   color = color + "33";
//   return color;
// }

// console.log(getRandomColor(5));
export default BarChart;
