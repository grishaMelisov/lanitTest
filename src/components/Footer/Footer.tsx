import { About } from './About/About'
import { Contacts } from './Contacts/Contacts'
import { Copyright } from './Copyright/Copyright'
import { Courses } from './Courses/Courses'
import s from './Footer.module.css'
import { Signup } from './Signup/Signup'
import { Sitemap } from './Sitemap/Sitemap'

export function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer_wrapper}>
        <About />
        <Sitemap />
        <Courses />
        <Contacts />
        <Signup />
      </div>
      <Copyright />
    </div>
  )
}
