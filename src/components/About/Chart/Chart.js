import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import classes from "./Chart.module.css";

function Chart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["HTML5", "CSS3", "JS", "React", "Redux", "Material UI"],
      datasets: [
        {
          label: "Skill Level %",
          data: [99, 89, 74, 80, 70, 54],
          backgroundColor: [
            "#98ded9",
            "#98ded9",
            "#98ded9",
            "#98ded9",
            "#98ded9",
            "#98ded9",
          ],
          borderColor: [
            "#3fc1c9",
            "#3fc1c9",
            "#3fc1c9",
            "#3fc1c9",
            "#3fc1c9",
            "#3fc1c9",
          ],
          borderWidth: 1,
        },
      ],
    };
    setChartData(data);
  }, []);

  useEffect(() => {
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              lineHeight: 2,
              fontColor: "#364f6b",
              fontSize: 15,
              fontStyle: "italic",
              padding: 12,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: "#364f6b",
              fontSize: 15,
              fontStyle: "italic",
              padding: 5,
            },
          },
        ],
      },
    };
    setChartOptions(options);
  }, []);

  return (
    <div>
      <div className={classes.Bar}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Chart;
