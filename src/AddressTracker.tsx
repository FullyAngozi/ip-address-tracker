import React, { useState } from "react";
import bgDesktop from "./assets/pattern-bg-desktop.png";
import bgMobile from "./assets/pattern-bg-mobile.png";
import btn from "./assets/icon-arrow.svg";
import { IPData } from "./Interfaces";

const API_KEY: string = "at_qqUBvtCC7uAL4PIY5chA3irpO5DlE";

const AddressTracker: React.FC = ({ setSharedData }) => {
  const [ipData, setIpData] = useState<IPData | null>(null);
  const [inputValue, setInputValue] = useState<string>("")
  const [error, setError] = useState<string | null>(null);

  async function getIP() {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${inputValue}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch IP data");
      }

      const data = await response.json();
      setIpData(data);
      setSharedData(data)
      setError(null);
    } catch (error) {
      setError("Error fetching IP data. Please try again.");
      console.error("Error fetching IP data:", error);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getIP();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="">
        <img src={bgMobile} alt="" className="block md:hidden w-full" />
        <img src={bgDesktop} alt="" className="hidden md:block" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute z-10 top-[25%] left-[25%] w-1/2 shadow-md"
      >
        <p>IP Address Tracker</p>
        <input
          type="text"
          placeholder="Enter IP Address"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button>
          <img src={btn} alt="Search" />
        </button>
      </form>

      {/* Display IP Data */}
      {ipData && (
        <div className="bg-white p-4 shadow-md">
          <p>IP Address: {ipData.ip}</p>
          <p>
            Location: {ipData.location.country}, {ipData.location.region}
          </p>
          <p>Timezone: {ipData.location.timezone}</p>
          <p>ISP: {ipData.isp}</p>
        </div>
      )}

      {/* Display Error */}
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

export default AddressTracker;
