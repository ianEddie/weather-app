import useWeatherStore from '@/store/weather'

export function useTemperature() {
  const { weatherData } = useWeatherStore()
  const { temp, temp_max, temp_min, wind, humidity } = weatherData
  //
  const temperature = Math.round(temp)
  const maxTemp = Math.round(temp_max)
  const minTemp = Math.round(temp_min)
  const windSpeed = Math.round(wind)
  const humidityValue = Math.round(humidity)
  //
  return { temperature, maxTemp, minTemp, windSpeed, humidityValue }
}
