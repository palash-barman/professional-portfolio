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
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <Atmosphere />
      <a className="skip-link" href="#content">Skip to content</a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="content"
          className="site-main"
          key={pathname}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
