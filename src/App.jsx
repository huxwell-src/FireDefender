import { } from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';

function App() {
  
  const currentDate = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('es-ES', options);


  return (
    <div className='h-screen bg-[#FDFDFD]'>
      <Header name="Salo" />

      <div className='p-4' > 
        <span className="text-sm text-[#666666]">hoy, {formattedDate}</span>
        <WeatherCard
          weatherDescription="Soleado"
          location="Santiago, Chile"
          temperature={28}
          feelsLike={31}
          humidity={27}
          hasGas={false}
          windSpeed={12}
        />
      </div>
    </div>
  );
}

export default App;
