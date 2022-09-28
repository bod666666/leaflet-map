import React from 'react';
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import './App.css';
import parkData from "./data/holosiivo.json";

var greenIcon = L.icon({
  iconUrl: '/img/maf_logo.svg',

  iconSize:     [60, 36.69], // size of the icon
});


function App() {

  console.log(parkData)

  return (
    <div id="map">
      <MapContainer center={[50.3889732, 30.5019693]} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {parkData.map(park  => (
          <Marker key = {park.id} icon={greenIcon} position={[park.gps.latitude, park.gps.longitude]}>
            <Popup position={[park.gps.latitude, park.gps.longitude]}>
              <div>
                <h2>{"Проблема: " + park.name}</h2>
                <img src="/img/maf_1.jpeg" />
                <h3>{"Коментар: " + park.comments}</h3>
                <a href="https://dengi.informator.ua/2022/07/11/mafi-u-golosiyivskomu-lisi-zvodit-ulyublenij-investor-kiyivradi-shho-pro-nogo-vidomo/"><h2>Детальніше</h2></a>
              </div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>

  );
}

export default App;
