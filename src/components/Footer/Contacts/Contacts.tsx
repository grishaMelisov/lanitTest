import s from './Contacts.module.css'
import mobile from '../../../assets/images/iPhone.svg'
import mail from '../../../assets/images/Mail.svg'

export function Contacts() {
  return (
    <div className={s.contacts}>
      <h2>contact us</h2>
      <ul>
        <li>
          <a href='#'>
            <img src={mobile} alt='mobile' />
            (405) 555-0128
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={mail} alt='email' />
            hello@createx.com
          </a>
        </li>
      </ul>
    </div>
  )
}
