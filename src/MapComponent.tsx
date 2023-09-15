import { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DataContext from './Context';
import { IPData } from './Interfaces';

const MapComponent = () => {
  const sharedData = useContext<IPData>(DataContext);
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]);

  useEffect(() => {
    // Check if sharedData exists and has location data
    if (sharedData && sharedData.location && sharedData.location.lat && sharedData.location.lng) {
      setPosition([sharedData.location.lat, sharedData.location.lng]);
    }
  }, [sharedData]);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-[300px] w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapComponent;
