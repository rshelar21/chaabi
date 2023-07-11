import React, { useState } from "react";
import Chart from "react-apexcharts";

const Pie = () => {
  const [options, setChart] = useState({
    series: [34, 22, 20, 7, 22],
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#999", "#B4CEFF", "#999", "#999", "#999", "#999"],
      plotOptions: {
        pie: {
          expandOnClick: true,
          donut: {
            size: "50%",
            labels: {
              show: true,
              name: {
                show: true,
                formatter: function (val) {
                  return "";
                },
              },
              value: {
                show: false,
              },
            },
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        // enabled: false,
      },
      responsive: [
        {
          breakpoint: 1160,
          options: {},
        },
      ],
    },
  });

  return (
    <>
      <div>
        <Chart
          options={options.options}
          series={options.series}
          type="donut"
          height={220}
        />
      </div>
    </>
  );
};

export default Pie;
