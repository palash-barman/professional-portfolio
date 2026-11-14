import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value)
  const target = match ? Number(match[1]) : 0
  const suffix = match?.[2] ?? ''
  const decimals = match?.[1].includes('.') ? 1 : 0
  const motionValue = useMotionValue(reduce || !match ? target : 0)
  const text = useTransform(motionValue, (latest) => (decimals ? latest.toFixed(decimals) : String(Math.round(latest))))

  useEffect(() => {
    if (!match || !inView || reduce) return
    const controls = animate(motionValue, target, { duration: 1.35, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [inView, match, motionValue, reduce, target])

  if (!match) return <strong ref={ref}>{value}</strong>

  return (
    <strong ref={ref}>
      <motion.span>{text}</motion.span>
      {suffix}
    </strong>
  )
}
