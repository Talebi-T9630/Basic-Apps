import calculator from './assets/calculator.png'
import timer from './assets/timer.png'
import alarm from './assets/alarm.png'
import notes from './assets/notes.png'
import weather from './assets/weather.png'
import horoscope from './assets/horoscope.png'
import magicball from './assets/magicball.png'
import top_10 from './assets/top_10.png'




function Home() {

  return (
    <>

      <h1 className="text-3xl font-bold underline">
        BASIC APP HOUSE!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {/* first row of apps */}
        <div className=" p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl">
            <img src={calculator} ></img>
            <p className='text-center'><a href='/calcultor'>Calculator</a></p>
        </div>
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={timer} ></img>
            <p className='text-center'><a href='/timer'>Timer</a></p>
        </div>
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={alarm} ></img>
            <p className='text-center'><a href='/clock'>Clock</a></p>
        </div>
        {/* second row of apps */}
        <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={notes} ></img>
            <p className='text-center'><a href='/notes'>Notes</a></p>
        </div>
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={weather} ></img>
            <p className='text-center'><a href='/weather-app'>Weather app</a></p>
        </div>
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={horoscope} className="p-4"></img>
            <p className='text-center'><a href='/horosccope'>Horoscope</a></p>
        </div>
        {/* third row of apps */}
        <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={magicball} ></img>
            <p className='text-center'><a href='/magic-8-ball'>Magic 8 ball</a></p>
        </div>
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={top_10} ></img>
            <p className='text-center'><a href='/top-10'>Todays top 10 hit songs</a></p>
        </div>
     </div>

    </>
  )
}

export default Home
