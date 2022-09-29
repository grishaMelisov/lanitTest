import s from './About.module.css'
import logo from '../../../assets/images/logoWhite.svg'
import { Socials } from './Socials/Socials'

export function About() {
  return (
    <div className={s.about}>
      <img className={s.logo} src={logo} alt='logo' />
      <p>
        Createx Online School is a leader in online studying. We have lots of courses
        and programs from the main market experts. We provide relevant approaches
        to online learning, internships and employment in the largest companies
        in the country.{' '}
      </p>
      <Socials />
    </div>
  )
}
