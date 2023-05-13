import React from "react";
import { useQuery } from "react-query";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);
const fetchCData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
  const data = await response.json();
  return data;
};
function DateCases() {
  const { data, isLoading, error } = useQuery("covidData", fetchCData);
  console.log(data);
  



  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const chartData = {
    labels: Object.keys(data.cases).map((key) => {
      return key;
    }),

    datasets: [
      {
        label: "COVID-19 Cases with date",
        data: Object.keys(data.cases).map((info) => {
          console.log(data[info])
          return data.cases[info];
         
        }),
        barPercentage: 0.9,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

 

  return (
   <>
    <div className=" w-full mt-8  bg-gray-100 w-fit h-1/2 overflow-x-hidden ">
     
      <Bar className="bg-blue-300 " data={chartData} />
     
    </div>
 
    </>
  );
}

export default DateCases;
