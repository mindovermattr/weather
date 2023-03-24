export interface IWeatherRespone {
  //    alerts:{
  //todo
  //    },
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: IForecast[];
  };
}

export interface IForecast {
  date: Date;
  day: {
    avgtemp_c: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: IHour[];
}

export interface IHour {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  temp_f: number;
  chance_of_rain: number;
  chance_of_snow: number;
}
