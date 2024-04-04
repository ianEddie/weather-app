import { useState } from 'react'
import { useGetWeather } from '../hooks/useGetWeatherData'
import SearchIcon from '../icons/SearchIcon'

export default function Form() {
  const [city, setCity] = useState('')
  const { getWeatherData } = useGetWeather()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getWeatherData(city)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex sm:justify-end justify-center items-center gap-x-2 px-10'
    >
      <input
        className='font-primary sm:w-[12%] w-[50%] bg-transparent text-center py-2 border-2 border-neutral-900 rounded-full'
        type='text'
        placeholder='Type a city'
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button className='hover:scale-110 transition-transform duration-300'>
        <SearchIcon />
      </button>
    </form>
  )
}
