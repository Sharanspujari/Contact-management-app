import React from 'react'
import { MapContainer, TileLayer, Marker, Popup ,useMap} from 'react-leaflet';
import { useQuery } from 'react-query';

// const fetchCovidData = async () => {
//   const response = await fetch('https://disease.sh/v3/covid-19/countries');
//   const data = await response.json();
//   return data;
// };
function Country() {

  // const { data:countryData, isLoading, error} = useQuery('countryData', fetchCovidData);
  // console.log('countryData:',countryData);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const position = [51.505, -0.09];

  return (

   <div className='w-screen h-64'>
       <MapContainer className='border border-red-700 h-auto w-auto flex flex-wrap' center={position} zoom={13}  scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

     
        <Marker position={position}>
          <Popup>
            <h3></h3>
            <p>Cases: </p>
            <p>Case:</p>
            <p>Deaths:</p>
          </Popup>
        </Marker>
        
   

  
    </MapContainer>
    </div>
  )
}

export default Country