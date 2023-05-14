import { info } from "autoprefixer";
import React from "react";

import { useQuery } from "react-query";
const fetchCountries = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await response.json();
 
  return data;
};
function Country() {
  const { data, isLoading, error } = useQuery("countries", fetchCountries);

  console.log("Data:",data)

  
 
    
   
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
  {
    
  data.map(info=>{
    return(
      <div className="rounded overflow-hidden shadow-lg">
  <a href="#"><div className="relative">
    <img className="w-full" src={info.countryInfo.flag} alt="Sunset in the mountains"/>
  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
  
    </div></a>
  <div className="px-6 py-4 ">

   <h3 className="text-xl bold">{info.country}</h3>
    <ul>
    
     <li className="text-red-600">Cases: {info.cases}</li>
     <li className="text-red-700">Deaths: {info.deaths}</li>
     <li className="text-red-700" >Today Deaths:{info.todayDeaths}</li>
     <li className="text-red-700">TodayRecovered: {info.todayRecovered}</li>
     <li className="text-red-700">Active: {info.active}</li>
     <li className="text-red-700">Critical: {info.critical}</li>
     <li className="text-red-700">CasesPerOneMillion: {info.casesPerOneMillion}</li>
     <li className="text-red-700">DeathsPerOneMillion: {info.deathsPerOneMillion}</li>
     <li className="text-red-700">Tests: {info.tests}</li>
     </ul>
    
  </div>
  <div className="px-6 py-4 ">
   
  </div>

  <div className="px-6 py-4 flex flex-row items-center">
    <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
    Updated:{info.updated}
     </span>
  </div>
</div>
    )
  })
    
   
  }
  </div>
</div>
  );
}

export default Country;

 
