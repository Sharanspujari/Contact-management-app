import React from "react";

import { useQuery } from "react-query";
const fetchCountries = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await response.json();
  return data;
};
function Country() {
  const { data, isLoading, error } = useQuery("countries", fetchCountries);
  console.log('data:',data);
 
const a=data.map(i=>{
  return i.cases
})

console.log(a);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl">Country Specific data of cases:</h2>
      <div class="grid-cols-2">
        { Object.keys(data).map(cinfo => (
          /* <li className='m-8 text-xl' key={country.country}>{country.country}
        <li className='text-sm'>{country.countryInfo.iso2}</li>
        <li className='text-sm'>{country.countryInfo.iso3}</li>
        <li className='text-sm'>{country.countryInfo.lat}</li>
        <li className='text-sm'>{country.countryInfo.long}</li>
        <li className='text-sm'><img className='w-8 h-8 ' src={country.countryInfo.flag}/></li>
        <li className='text-sm'>{country.countryInfo.cases}</li>
        <li className='text-sm'>{country.countryInfo.todayCases}</li>
        </li> */

          <div class="flex flex-col rounded-lg m-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              class="h-32 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div class="flex flex-col justify-start  p-6">
              <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
               {cinfo.country}
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="text-xs text-neutral-500 dark:text-neutral-300">
                Last updated 3 mins ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Country;
