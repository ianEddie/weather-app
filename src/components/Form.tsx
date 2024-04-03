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
      className='w-full flex justify-end items-center gap-x-2 px-10'
    >
      <input
        className='font-primary w-[12%] bg-transparent text-center py-2 border-2 border-neutral-900 rounded-full'
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
