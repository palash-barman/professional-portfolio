import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function Atmosphere() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)

  useEffect(() => {
    if (reduce) return
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 180)
      y.set(event.clientY - 180)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [reduce, x, y])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {reduce ? null : <motion.div className="cursor-glow" style={{ x, y }} />}
    </>
  )
}
