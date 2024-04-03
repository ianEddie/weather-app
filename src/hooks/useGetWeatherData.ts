
import { searchWheater } from '../services/search-weather'
import useWeatherStore from '../store/weather'

export function useGetWeather() {
  const { weatherData, setWeatherData } = useWeatherStore()
  const getWeatherData = async (city: string) => {
    try {
      const newData = await searchWheater(city)
      setWeatherData(newData)
    } catch (error) {
      throw new Error('Error fetching weather data')
    }
  }
  return { getWeatherData, weatherData }
}
