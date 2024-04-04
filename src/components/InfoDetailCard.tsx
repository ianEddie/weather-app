export default function InfoDetailCard({ children }: any) {
  return (
    <div className='flex flex-col items-center justify-between sm:py-5 py-6 sm:gap-y-0 gap-y-2 w-[3.5em] text-center rounded-[30px] text-xl border border-neutral-900'>
      {children}
    </div>
  )
}
