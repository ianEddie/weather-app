const API_KEY = '4a0a8bd3ea239296a9ca3cb52d05a0d4'

export async function searchWheater(city: string) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    const json = await response.json()
    const data = {
      id: json.id,
      city: json.name,
      country: json.sys.country,
      wind: json.wind.speed,
      status: json.weather[0].main,
      description: json.weather[0].description,
      temp: json.main.temp,
      temp_min: json.main.temp_min,
      temp_max: json.main.temp_max,
      humidity: json.main.humidity
    }
    return data
  } catch (error) {
    throw new Error('Error at searching')
  }
}
