import s from './Registration.module.css'
import registrationIcon from '../../../assets/images/registrationIcon.svg'

export function Registration() {
  return (
    <div className={s.registration}>
      <img src={registrationIcon} alt='icon' />
      <a href='#'>Log in / Register</a>
    </div>
  )
}
