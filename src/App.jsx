import { useState } from "react"
import axios from 'axios'
import weather_image from './images/weather.jpg'


function App() {

  const [serach, setSearch] = useState('')
  const [data, setData] = useState(null)

  const handleSerach = async () => {
    const wether = await axios.get(`${api.baseUrl}weather?q=${serach}&units=metric&&APPID=${api.key}`)
    if (wether.status == 200) {
      console.log(wether.data)
      setData(wether.data)
    } else {
      alert("Something is wrong with the network please try again after some time")
    }
  }

  const api = {
    key: import.meta.env.VITE_API_KEY,
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
  }

  return (
    <>
      <div className="flex items-center justify-center z-30 h-[100vh]">
        <div className="mockup-phone border-primary z-30">
          <div className="camera"></div>
          <div className="display relative">
            <img className="h-[550px] w-[300px] rounded-lg relative z-10" src={weather_image} alt="" />
            <div>
              <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Enter Location" className="input border-0 mx-10 opacity-50 bg-[#e4e3e3] input-sm input-bordered input-info w-full absolute top-10 z-20 max-w-[230px]" />
              <button onClick={handleSerach} className="btn btn-xs absolute top-[44px] right-[40px] w-[40px] text-[8px] z-20 btn-outline">
                search
              </button>
            </div>
            <div className="z-50 absolute top-32 ">
              <p className="font-extrabold text-2xl text-white mx-5">{data?.name ? data?.name : "London"}</p>
              <p className="font-extrabold text-5xl text-white mx-5">{data?.main?.temp ? data?.main?.temp : '60'}°F</p>
              <p className="font-extrabold text-xl text-white mx-5">{data?.weather[0]?.description ? data?.weather[0]?.description : 'Clouds'}</p>
            </div>
            <div>
              <div className="join absolute z-50 bottom-7 right-2  opacity-30 bg-[#e4e3e3]">
                <button className="btn join-item z-30">
                  <div className="opacity-100">
                    <div>{data?.main?.feels_like ? data?.main?.feels_like : '60'}°F</div>
                    <div>Feels like</div>
                  </div>
                </button>
                <button className="btn join-item z-30">
                  <div className="opacity-100">
                    <div>{data?.main?.humidity ? data?.main?.humidity : 0}%</div>
                    <div>Humidity</div>
                  </div>
                </button>
                <button className="btn join-item z-30">
                  <div className="opacity-100">
                    <div>{data?.wind?.speed ? data?.wind?.speed : 12 }MPH</div>
                    <div>Wind Speed</div>
                  </div>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
