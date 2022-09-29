import s from './Copyright.module.css'
import heart from '../../../assets/images/Heart.svg'

export function Copyright() {
  return (
    <div className={s.copyright}>
      <div className={s.copyright_wrapper}>
        <div className={s.rights_description}>
          <span>© All rights reserved. Made with </span>
          <img src={heart} alt='love' />
          <span> by Createx Studio</span>
        </div>
        <a href='#'>GO TO TOP</a>
      </div>
    </div>
  )
}
