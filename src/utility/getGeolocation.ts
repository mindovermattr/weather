import { Coordinates } from "../interface/Coordinates";

interface currentPos {
  coords: Coordinates;
}

const result: Coordinates = {
  latitude: 0,
  longitude: 0,
};

function displayLocation(position: currentPos) {
  result.latitude = position.coords.latitude;
  result.longitude = position.coords.longitude;
}

const getGeolocation = (): Coordinates => {
  navigator.geolocation.getCurrentPosition(displayLocation);
  return result;
};

export default getGeolocation;
