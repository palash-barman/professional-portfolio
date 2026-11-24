import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { ProjectSlider } from '../components/ProjectSlider'
import { SectionTitle } from '../components/SectionTitle'
import { SkillCard } from '../components/SkillCard'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { expertise, skillGroups } from '../data/skills'

const ticker = ['Flutter', 'Dart', 'BLoC', 'GetX', 'Firebase', 'REST', 'WebSockets', 'Clean Architecture', 'MongoDB', 'Payments', 'Live streaming', 'Play Store']

const ease = [0.22, 1, 0.36, 1] as const

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const word = {
  hidden: { y: '120%' },
  show: { y: '0%', transition: { duration: 0.75, ease } },
}

export function Home() {
  const reduce = useReducedMotion()

  return (
    <>
      <section className="shell hero">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : 'hidden'}
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p className="role-pill" variants={rise}><i /> {profile.role} · {profile.location}</motion.p>
          <motion.h1 variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}>
            <span className="hero-word"><motion.span variants={word}>Palash</motion.span></span>
            <span className="hero-word"><motion.span variants={word}>Chandra</motion.span></span>
            <span className="hero-word"><motion.em variants={word}>Barman</motion.em></span>
          </motion.h1>
          <motion.p className="lede" variants={rise}>{profile.summary}</motion.p>
          <motion.div className="hero-actions" variants={rise}>
            <motion.div whileHover={reduce ? undefined : { y: -4 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
              <Link className="btn btn-primary" to="/projects">View my work <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { y: -4 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
              <a className="btn btn-ghost" href={profile.cv} download>Download CV <ArrowDownToLine size={16} aria-hidden="true" /></a>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { y: -4 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
              <Link className="btn btn-lime" to="/contact">Contact me</Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="hero-visual">
          <motion.div
            className="hero-stage"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={profile.photo}
              alt="Palash Chandra Barman"
              width={900}
              height={1100}
              fetchPriority="high"
              decoding="async"
              initial={reduce ? false : { scale: 1.14 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.3, ease }}
            />
          </motion.div>
          <ul className="hero-facts">
            {[
              [profile.years, 'Years in Flutter'],
              ['Lead', profile.currentCompany],
              ['iOS · Android', profile.location],
            ].map(([value, label], index) => (
              <motion.li
                key={label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.1, duration: 0.5, ease }}
              >
                <strong>{value}</strong><span>{label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, index) => <span key={`${item}-${index}`}>{item} <b>/</b></span>)}
        </div>
      </div>

      <section className="shell section" id="about">
        <SectionTitle eyebrow="About" title="A mobile lead who still writes the feature." lede="Three years of Flutter, from feature work to technical coordination, API integration, architecture, and App Store delivery." />
        <div className="about-copy">
          <p>I build cross-platform applications that stay understandable after the first release.</p>
          <p>Day to day that means Clean Architecture, BLoC or GetX, REST and Firebase, and the debugging that keeps a build stable. At Join Venture AI I also help with planning, coordination, and delivery.</p>
          <Link className="btn btn-ghost" to="/about">More about me</Link>
        </div>
      </section>

      <section className="shell section" id="skills">
        <SectionTitle eyebrow="Skills" title="The toolkit, grouped the way the work actually happens." />
        <div className="skill-board">
          {skillGroups.map((group, index) => <SkillCard key={group.category} group={group} index={index} />)}
        </div>
      </section>

      <section className="shell section" id="experience">
        <SectionTitle eyebrow="Experience" title="Three roles. One craft, with more of the plan in the current seat." />
        <ExperienceTimeline items={experience} />
      </section>

      <section className="shell section" id="work">
        <SectionTitle eyebrow="Selected work" title="Real apps, built for people and published on the App Store." lede="A focused selection of iOS projects and their public App Store listings." />
        <ProjectSlider projects={projects} />
      </section>

      <section className="shell section">
        <SectionTitle eyebrow="Expertise" title="Where the time actually goes." />
        <div className="expertise-grid">
          {expertise.map((item) => (
            <motion.article className="expert" key={item.title} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduce ? undefined : { y: -6 }} viewport={{ once: true }} transition={{ duration: 0.4 }}><h3>{item.title}</h3><p>{item.copy}</p></motion.article>
          ))}
        </div>
      </section>

      <section className="shell section" id="education">
        <SectionTitle eyebrow="Education" title="Study, still in motion." />
        <div className="edu-grid">
          {education.map((item) => (
            <motion.article className="edu-card" key={item.title} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduce ? undefined : { y: -6 }} viewport={{ once: true }}>
              <p className="kicker"><span>{item.kind}</span></p>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <p>{item.status}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="shell section" id="contact">
        <SectionTitle eyebrow="Contact" title="Tell me what the app needs to do." />
        <div className="contact-grid">
          <div>
            <p className="lede">Email, phone, and the profiles I actually use.</p>
            <ul className="contact-list">
              <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a href={profile.phoneHref}>{profile.phone}</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
