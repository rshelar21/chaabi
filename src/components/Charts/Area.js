import React, { useState } from "react";
import Chart from "react-apexcharts";

const Area = ({ profit }) => {
  const color = profit ? "#018E42" : "#FF0000";
  const [options, setOptions] = useState({
    series: [
      {
        name: "North",
        data: [0, 10, 7, 7, 12, 8, 0],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
      },
      colors: [color],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 0,
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 1,
          opacityTo: 0.6,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
        labels: {
          style: {
            fontSize: "8px",
          },
        },
      },
      yaxis: {
        show: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  });
  return (
    <>
      <div style={{}}>
        <Chart
          options={options.options}
          series={options.series}
          type="area"
          height={100}
          // width={120}
        />
      </div>
    </>
  );
};

export default Area;
