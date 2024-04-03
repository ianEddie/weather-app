import { useGetWeather } from '@/hooks/useGetWeatherData'
import InfoDetail from './InfoDetail'
import { useTemperature } from '@/hooks/useTemperature'

export default function Info() {
  const { weatherData } = useGetWeather()
  const { temperature } = useTemperature()
  return (
    <section className='w-full h-full flex flex-col justify-between font-primary px-10 pb-14'>
      <h1 className='text-9xl'>{`It's ${weatherData.status} .`}</h1>
      <div className='flex justify-between'>
        <InfoDetail />
        <aside>
          <h2 className='text-9xl'>{temperature}°</h2>
        </aside>
      </div>
    </section>
  )
}
