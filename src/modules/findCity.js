import { openModal } from './modal';

const API_KEY = 'a269bfc4e48b9782d95c84cab8fe157d';


const findCity = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });
    const weatherData = await response.json();
    if (weatherData.cod === 200) {
      return weatherData;
    }
    throw new Error();
  } catch (error) {
    // openModal('City not found!');
    return openModal('City not found!');
  }
};

export { findCity, API_KEY };