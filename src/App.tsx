import React, { useEffect, useState } from "react";
import "./App.scss";
import { Container } from "./components/Container/Container";
import Header from "./components/header/Header";
import { Coordinates } from "./interface/Coordinates";
import OneDay from "./pages/OneDay/OneDay";
import Loader from "./UI/Loader/Loader";

function App() {
  const [coordinate, setCoordinates] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });

  const [isLoading, setIsLoading] = useState<Boolean>(true); //поискать как сделать с false

  function displayLocation(position: any) {
    setCoordinates(position.coords);
    setIsLoading(false);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(displayLocation); //добавить коллбек для случая, когда геолокация отключаена
  }, []);

  return (
    <div className="App">
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        <OneDay
          latitude={coordinate.latitude}
          longitude={coordinate.longitude}
        />
      )}
    </div>
  );
}

export default App;
