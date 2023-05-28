import { } from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import './App.css'

function App() {
  
  const currentDate = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('es-ES', options);


  const temp = "16";

  return (
    <div className='fondo bg-[#FDFDFD]'>
      <Header/>

      <div className='p-4' > 
        <span className="text-sm text-[#666666]">hoy, {formattedDate}</span>
        <WeatherCard
          weatherDescription="Soleado"
          location="Santiago, Chile"
          temperature={temp}
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
