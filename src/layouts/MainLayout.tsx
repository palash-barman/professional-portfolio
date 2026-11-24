import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, type PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { Atmosphere } from '../components/Atmosphere'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export function MainLayout({ children }: PropsWithChildren) {
  const { pathname, hash } = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    let firstFrame = 0
    let secondFrame = 0

    const scrollToRoutePosition = () => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'auto', block: 'start' })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      root.scrollTop = 0
      document.body.scrollTop = 0
    }

    firstFrame = window.requestAnimationFrame(() => {
      scrollToRoutePosition()
      secondFrame = window.requestAnimationFrame(scrollToRoutePosition)
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(secondFrame)
      window.history.scrollRestoration = previousRestoration
      root.style.scrollBehavior = previousBehavior
    }
  }, [pathname, hash])

  return (
    <>
      <Atmosphere />
      <a className="skip-link" href="#content">Skip to content</a>
      <Navbar />
      <AnimatePresence initial={false} mode="wait">
        <motion.main
          id="content"
          className="site-main"
          key={pathname}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
