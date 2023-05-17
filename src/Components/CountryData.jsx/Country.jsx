import React from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useQuery } from "react-query";

const fetchData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries"); // Replace with your API endpoint
  const data = await response.json();
  return data;
};

function Country() {
  const position = [33, 65];

  const { data, isLoading, isError } = useQuery("mapData", fetchData);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  console.log("Datainfo:", data);

  return (
    <div  className=" w-full border border-blue-400 bg-gray-100 mt-8 mb-20 w-fit overflow-x-hidden">
      <div className="h-full w-full flex flex-row items-center justify-center ">
        <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((covidInfo) => {
            return (
              <Marker
                key={covidInfo._id}
                position={[
                  covidInfo.countryInfo.lat,
                  covidInfo.countryInfo.long,
                ]}
              >
                <Popup>
                  {covidInfo.country}
                  <p>Cases:{covidInfo.cases}</p>
                  <p>Recovered:{covidInfo.recovered}</p>
                  <p>Deaths:{covidInfo.deaths}</p>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default Country;
