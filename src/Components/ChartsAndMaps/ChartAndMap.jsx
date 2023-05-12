import React from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import Country from "../CountryData.jsx/Country";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);
const fetchCovidData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  const data = await response.json();
  return data;
};
function ChatAndMap() {
  const { data, isLoading, error } = useQuery("covidData", fetchCovidData);
  console.log(data);
  

const info=[data];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const chartData = {
    labels: Object.keys(data).map((key) => {
      return key;
    }),

    datasets: [
      {
        label: "COVID-19 Cases",
        data: Object.keys(data).map((info) => {
          console.log(data[info])
          return data[info];
         
        }),
      
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };




  return (
   
    <div className="h-96 w-9/12 m-0 mx-auto bg-gray-100 rounded mt-8">
      <Line  data={chartData} />
      <Country/>
    </div>
  );
}

export default ChatAndMap;
