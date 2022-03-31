import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const data = {
  labels: ["TypeScript", "JavaScript", "C++", "NextJS"],
  datasets: [
    {
      label: "Skills",
      data: [15, 35, 30, 20],
      backgroundColor: ["#F7522F", "#2FD1F7", "#F7E72F", "#63F72F"],
    },
  ],
};

export const data1 = {
  labels: ["TypeScript", "JavaScript", "C++", "NextJS"],
  datasets: [
    {
      label: "Skills",
      data: [15, 35, 30, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

const GraphCard1 = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="md:w-1/2 p-2">
          <div className="h-full p-4 border shadow-2xl bg-white rounded-xl">
            <p className="text-center font-bold">Skills</p>
            <Doughnut data={data} />
          </div>
        </div>

        <div className="md:w-1/2 p-2">
          <div className="p-4 h-full border shadow-2xl bg-white rounded-xl flex flex-col justify-center items-center">
            <p className="text-center font-bold">Skills</p>
            <Bar data={data1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphCard1;
