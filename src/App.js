import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ip, setIp] = useState("");
  const [ipInfo, setIpInfo] = useState([]);

  const handleSetIpAddress = (event) => {
    setIp(event.target.value);
  };

  const APIKEY = process.env.APIKEY;
  const url = `https://geo.ipify.org/api/v2/country?apiKey=at_xRU4enUiVh9CbTnuTCvIdJXLbcbCJ&ipAddress=${ip}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setIpInfo(response.data);
    });
  }, []);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(ipInfo);
  };

  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={ip} onChange={handleSetIpAddress} />
        <button type="submit">GO!</button>
      </form>

      <div className="ipInfo">
        <div className="part">
          <p>ip address</p>
          <h3>{ipInfo.ip}</h3>
        </div>

        <div className="part">
          <p>ISP</p>
          <h3>{ipInfo.isp}</h3>
        </div>
        <div className="part">
          <p>ISP</p>
          <h3>{ipInfo.location.region}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
