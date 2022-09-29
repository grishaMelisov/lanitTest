import { OrangeButton } from '../../ui/OrangeButton/OrangeButton'
import s from './Header.module.css'
import { Logo } from './Logo/Logo'
import { Navbar } from './Navbar/Navbar'
import { Registration } from './Registration/Registration'

export function Header() {
  return (
    <div className={s.header}>
      <div className={s.header_wrapper}>
        <Logo />
        <Navbar />
        <OrangeButton buttonText='Get consultation' header={true} />
        <Registration />
      </div>
    </div>
  )
}
