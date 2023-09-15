import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IPData } from "./Interfaces";

interface MapComponentProps {
  ipData: IPData | null; // Specify the type for the ipData prop
}

const MapComponent: React.FC<MapComponentProps> = ({ ipData, }) => {
  const position: [number, number] = ipData?.location
    ? [ipData.location.lat, ipData.location.lng]
    : [51.505, -0.09]; 

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[300px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
    </MapContainer>
  );
};

export default MapComponent;
