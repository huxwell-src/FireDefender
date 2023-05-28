import { } from 'react';
import PropTypes from 'prop-types';

function WeatherCard({ weatherDescription, location, temperature, feelsLike, humidity, hasGas, windSpeed }) {
  return (
    <div className="mt-4 w-full rounded-2xl bg-stone-50 p-3 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
            <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027" fill="#85C1E9" />
            <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" fill="#F7DC6F" />
          </svg>
          <div className="pl-3">
            <p className="text-xl font-semibold text-[#252525]">{weatherDescription}</p>
            <p className="text-sm text-[#191919]">{location}</p>
          </div>
        </div>
        <h2 className="text-[40px]">{temperature}°</h2>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[#191919]">{feelsLike}°</span>
          <p className="text-center text-sm text-gray-600">Sensación</p>
          <p className="text-center text-sm text-gray-600">Térmica</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[#191919]">{humidity}%</span>
          <p className="text-sm text-gray-600">Humedad</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[#191919]">{hasGas ? 'Sí' : 'No'}</span>
          <p className="text-center text-sm text-gray-600">Gas</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[#191919]">{windSpeed} km/h</span>
          <p className="text-sm text-gray-600">Viento</p>
        </div>
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  weatherDescription: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  hasGas: PropTypes.bool.isRequired,
  windSpeed: PropTypes.number.isRequired,
};

export default WeatherCard;
