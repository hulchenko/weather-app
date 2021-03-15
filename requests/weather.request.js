const rp = require('request-promise');

module.exports = async function (city = '') {
  if (!city) {
    throw new Error('City name cannot be empty!');
    return;
  }

  const KEY = 'f257d63f5f395853b5ef1b11c3efc6b3';
  const uri = 'http://api.openweathermap.org/data/2.5/weather';

  const options = {
    uri: uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'imperial',
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
