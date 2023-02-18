import axios from "axios";
import { IWeatherRespone } from "../interface/IWeatherResponse";
const API_KEY = "8fa638a639374ea483171544230602";

export default class ApiCall {
  static async getWeatherData(
    latitude: number,
    longitude: number,
    days: number
  ) {
    const response = await axios.get<IWeatherRespone>(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no&days=${days}&alerts=yes&lang=ru`
    );

    return response;
  }
}
