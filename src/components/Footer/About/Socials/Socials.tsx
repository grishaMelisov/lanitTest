import s from './Socials.module.css'
import facebook from '../../../../assets/images/medias/Facebook.svg'
import insta from '../../../../assets/images/medias/Instagram.svg'
import linkedin from '../../../../assets/images/medias/Linked-In.svg'
import telegram from '../../../../assets/images/medias/telegram.svg'
import twitter from '../../../../assets/images/medias/Twitter.svg'
import youtube from '../../../../assets/images/medias/YouTube.svg'

export function Socials() {
  return (
    <div className={s.socials}>
      <img src={facebook} alt='icon' />
      <img src={twitter} alt='icon' />
      <img src={youtube} alt='icon' />
      <img src={telegram} alt='icon' />
      <img src={insta} alt='icon' />
      <img src={linkedin} alt='icon' />
    </div>
  )
}
