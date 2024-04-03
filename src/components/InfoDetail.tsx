import { useTemperature } from '@/hooks/useTemperature'
import InfoDetailCard from './InfoDetailCard'
import MinTemp from '@/icons/MinTemp'
import MaxTemp from '@/icons/MaxTemp'
import HumidityIcon from '@/icons/HumidityIcon'
import WindIcon from '@/icons/WindIcon'

export default function InfoDetail() {
  const { humidityValue, maxTemp, minTemp, windSpeed } = useTemperature()
  return (
    <article className='flex gap-x-10 h-full'>
      {/* Min */}
      <InfoDetailCard>
        <MinTemp />
        <span>{minTemp}°</span>
      </InfoDetailCard>
      {/* Max */}
      <InfoDetailCard>
        <MaxTemp />
        <span>{maxTemp}°</span>
      </InfoDetailCard>
      {/* Wind */}
      <InfoDetailCard>
        <HumidityIcon />
        <span>{`${humidityValue} %`}</span>
      </InfoDetailCard>
      {/* Humidity */}
      <InfoDetailCard>
        <WindIcon />
        <span>{`${windSpeed} km`}</span>
      </InfoDetailCard>
    </article>
  )
}
