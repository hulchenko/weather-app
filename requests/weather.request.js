const rp = require("request-promise");
require("dotenv").config();

module.exports = async function (city = "") {
  if (!city) {
    throw new Error("City name cannot be empty!");
  }

  const KEY = process.env.API_KEY;
  const uri = "http://api.openweathermap.org/data/2.5/weather";

  const options = {
    uri: uri,
    qs: {
      appid: KEY,
      q: city,
      units: "imperial",
    },
    json: true,
  };

  try {
    const data = await rp(options);
    const celsius = (data.main.temp - 32) * (5 / 9);

    return {
      weather: `${data.name}: ${celsius.toFixed(0)}`,
      error: null,
    };
  } catch (error) {
    return {
      weather: null,
      error: error.error.message,
    };
  }
};
