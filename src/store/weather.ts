import { create } from 'zustand'
import type { Data, BgImage } from '../types'

const initialState = {
  id: 0,
  city: 'London',
  country: 'GB',
  wind: 6,
  day: 0,
  status: 'Clear',
  description: '',
  temp: 17,
  temp_min: 13,
  temp_max: 20,
  humidity: 50
}

interface WheatherState {
  weatherData: Data
  bgImage: BgImage
  setWeatherData: (data: any) => void
  setBgImage: (image: any) => void
}

const useWeatherStore = create<WheatherState>((set) => ({
  weatherData: initialState,
  bgImage: { image: '' },
  setWeatherData: (data) => set({ weatherData: data }),
  setBgImage: (image) => set({ bgImage: image })
}))

export default useWeatherStore
