import AddressTracker from "./AddressTracker";
import MapComponent from "./MapComponent";
import DataContext from "./Context";
import { useState } from "react";

function App() {
  const [sharedData, setSharedData] = useState(null);
  return (
    <>
      <DataContext.Provider value={sharedData}>
        <div className=" h-screen bg-gray-300">
          <AddressTracker setSharedData={setSharedData} />
          <MapComponent />
        </div>
      </DataContext.Provider>
    </>
  );
}

export default App;
