import Background from './Background'
import Header from './Header'
import Info from './Info'

export default function Main() {
  return (
    <main className='relative text-neutral-800 w-full h-screen flex flex-col items-center'>
      <Background />
      <Header />
      <Info />
    </main>
  )
}
