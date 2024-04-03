export function useTime() {
  const currentTime = new Date()
  const currentDay = currentTime.getDate().toString().padStart(2, '0')
  const currentMonth = currentTime.toLocaleString('en', { month: 'long' })
  const formattedDate = `${currentDay} ${currentMonth}`
  return { formattedDate }
}
