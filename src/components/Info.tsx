import { useGetWeather } from '@/hooks/useGetWeatherData'
import InfoDetail from './InfoDetail'
import { useTemperature } from '@/hooks/useTemperature'

export default function Info() {
  const { weatherData } = useGetWeather()
  const { temperature } = useTemperature()
  return (
    <section className='w-full h-full flex flex-col justify-between font-primary sm:px-10 px-5 pb-14 sm:pt-0 pt-10'>
      <h1 className='sm:text-9xl text-6xl text-wrap sm:text-start text-center '>{`It's ${weatherData.status} .`}</h1>
      <div className='flex sm:flex-row sm:justify-between flex-col justify-between sm:flex-grow-0 flex-grow'>
        <InfoDetail />
        <aside className='sm:order-2 order-1 sm:w-auto w-full flex justify-center items-center sm:flex-grow-0 flex-grow'>
          <h2 className='sm:text-[9rem] text-[12rem]'>{temperature}°</h2>
        </aside>
      </div>
    </section>
  )
}
