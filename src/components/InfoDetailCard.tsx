export default function InfoDetailCard({ children }: any) {
  return (
    <div className='h-full flex flex-col items-center justify-between py-5 w-[3.5em] text-center rounded-[30px] text-xl border border-neutral-900'>
      {children}
    </div>
  )
}
