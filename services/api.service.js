import https from "https";
import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getIcon = (icon) => {
  switch (icon) {
    case "01d":
      return "🌞";
    case "02d":
      return "🌤️";
    case "03d":
      return "☁️";
    case "04d":
      return "☁️";
    case "09d":
      return "🌧️";
    case "10d":
      return "🌦️";
    case "11d":
      return "🌩️";
    case "13d":
      return "❄️";
    case "50d":
      return "🌫️";
    default:
      return "🔥";
  }
};

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));
  if (!token) {
    throw new Error(
      "Не задан ключ API, задайте его через комманду -t [API_KEY]"
    );
  }
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  return data;
};

export { getWeather, getIcon };
