import React, { useState } from "react";
import Chart from "react-apexcharts";

const Bar = ({ series, xaxis, stacked }) => {
  const height = stacked ? 230 : 280;
  const [options, setOptions] = useState({
    series: [
      {
        name: "Servings",
        data: series,
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "bar",
        stacked: stacked,
        // stackType: '100%',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: stacked ? 5 : 10,
          columnWidth: "30%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: xaxis,
        tickPlacement: "on",
      },
      yaxis: {
      },
      tooltip: {
        enabled: false,
      },
      fill: {
        type: "solid",
        color: "#f2f2f2",
      },
      responsive: [
        {
          breakpoint: 1300,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 5,
                columnWidth: "20%",
              },
            },
          },
        },
      ],
    },
  });
  //280
  return (
    <>
      <div>
        <Chart
          options={options.options}
          series={options.series}
          type="bar"
          height={height}
        />
      </div>
    </>
  );
};

export default Bar;
