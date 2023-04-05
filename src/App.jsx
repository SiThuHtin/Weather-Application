import { useEffect, useState } from "react";
import { API } from "./api/weatherApi";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = async () => {
    const response = await fetch(
      `${API.baseurl}weather?q=${search}&units=metric&APPID=${API.key}`
    );
    const data = await response.json();
    console.log(data);
    setWeather(data);
  };

  return (
    <>
      <input
        name="search"
        type="text"
        placeholder="search"
        onChange={handleChange}
      />
      <button onClick={onSearch}>Search</button>
      {typeof weather.main !== "undefined" ? (
        <>
          <div>{weather.name}</div>

          <div>{weather.main.humidity}</div>
          <div>{weather.main.temp}</div>
        </>
      ) : null}
    </>
  );
}

export default App;
