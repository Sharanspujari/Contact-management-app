import React from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import Country from "../CountryData.jsx/Country";
import { Chart as ChartJS, registerables } from "chart.js";
import DateCases from "../CasesWithDate/DateCases";
import DeathWithDate from "../CasesWithDate/DeathWithDate";
import DateWithRecovered from "../CasesWithDate/DateWithRecovered";
ChartJS.register(...registerables);
const fetchCovidData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  const data = await response.json();
  return data;
};
function ChatAndMap() {
  const { data, isLoading, error } = useQuery("covidData", fetchCovidData);
  // console.log(data);

  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const chartData = {
    labels: Object.keys(data)
      .filter((i) => i !== "updated")
      .map((key) => {
        return key;
      }),

    datasets: [
      {
        label: "COVID-19 Cases",
        data: Object.keys(data)
          .filter((i) => i !== "updated")
          .map((info) => {
            console.log(data[info]);
            return data[info];
          }),

        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
       
      <div className=" w-full  bg-gray-100  overflow-x-hidden ">
        <Line data={chartData} />
      </div>
     
      <DateCases />
      <DeathWithDate />
      <DateWithRecovered />
   
    
    </>
  );
}

export default ChatAndMap;
