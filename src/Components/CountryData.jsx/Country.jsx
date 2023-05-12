import React from 'react'

import { useQuery } from "react-query";
const fetchCountries = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await response.json();
    return data;
  };
function Country() {

    const { data, isLoading, error } = useQuery("countries", fetchCountries);
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
  return (
    <div className='mt-8'>
    <h2 className='text-2xl'>Country Specific data of cases:</h2>
        <ul>
      {data.map((country) => (
        <li className='m-8 text-xl' key={country.country}>{country.country}
        <li className='text-sm'>{country.countryInfo.iso2}</li>
        <li className='text-sm'>{country.countryInfo.iso3}</li>
        <li className='text-sm'>{country.countryInfo.lat}</li>
        <li className='text-sm'>{country.countryInfo.long}</li>
        <li className='text-sm'><img className='w-8 h-8 ' src={country.countryInfo.flag}/></li>
        <li className='text-sm'>{country.countryInfo.cases}</li>
        <li className='text-sm'>{country.countryInfo.todayCases}</li>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Country