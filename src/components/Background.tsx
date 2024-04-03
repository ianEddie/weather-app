import { useColors } from '@/hooks/useColors'

export default function Background() {
  const { color } = useColors()
  return (
    <div
      className={`absolute inset-0 -z-10 h-full w-full bg-neutral-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]`}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          background: `radial-gradient(circle at 50% 200px, ${color}, transparent)`
        }}
      ></div>
    </div>
  )
}
