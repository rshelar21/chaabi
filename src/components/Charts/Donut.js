import React, { useState } from "react";
import Chart from "react-apexcharts";

const Donut = () => {
  const [options, setOptions] = useState({
    series: [30, 70],
    options: {
      chart: {
        type: "donut",
        width: 200,
        height: 200,
      },
      labels: ["failed", "passed"],
      colors: ["#ED1C24", "#018E42"],
      label: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    },
  });
  return (
    <>
      <div>
        <Chart
          options={options.options}
          series={options.series}
          type="donut"
          height={230}
          width={200}
        />
      </div>
    </>
  );
};

export default Donut;
