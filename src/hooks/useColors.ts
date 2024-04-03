import { useGetWeather } from './useGetWeatherData'

export function useColors() {
  const { weatherData } = useGetWeather()
  const { status } = weatherData
  const getColorValue = () => {
    if (status === 'Clouds') {
      return '#78716C'
    }
    if (status === 'Clear') {
      return '#FCD34D'
    }
    if (status === 'Rain') {
      return '#3B82F6'
    }
    if (status === 'Snow') {
        return '#38BDF8'
      }
    return '#FDA4AF'
  }
  const color = getColorValue()
  return { color }
}
