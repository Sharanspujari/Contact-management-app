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
function DateWithRecovered() {
  const { data, isLoading, error } = useQuery("covidData", fetchCData);
  console.log(data);
  



  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const chartData = {
    labels: Object.keys(data.recovered).map((key) => {
      return key;
    }),

    datasets: [
      {
        label: "COVID-19 Recovered with date",
        data: Object.keys(data.recovered).map((info) => {
         
          return data.recovered[info];
         
        }),
        barPercentage: 0.5,
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
    <div className=" w-full border border-blue-400 bg-gray-100 mt-8 mb-20 w-fit overflow-x-hidden ">
     
      <Bar className="bg-green-300 " data={chartData} />
     
    </div>
 
    </>
  );
}

export default DateWithRecovered;
