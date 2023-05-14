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
function DeathWithDate() {
  const { data, isLoading, error } = useQuery("covidData", fetchCData);
  console.log(data);
  



  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const chartdata = {
    labels: Object.keys(data.deaths).map((key) => {
      return key;
    }),

    datasets: [
      {
        label: "COVID-19 Deaths with date",
        data: Object.keys(data.deaths).map((inf) => {
          // console.log(data[inf])
          return data.deaths[inf];
         
        }),
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        fill: true,
        fill:"blue",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
  };


  return (
   <>
    <div className=" w-full border border-blue-400 bg-gray-100 mt-8 mb-20 w-fit overflow-x-hidden ">
     
      <Bar className="bg-purple-300 h-1/2"  data={chartdata} 


      />
     
    </div>
 
    </>
  );
}

export default DeathWithDate;
