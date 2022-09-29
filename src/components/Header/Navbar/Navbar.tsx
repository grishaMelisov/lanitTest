import s from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={s.navbar}>
      <a href='#'>About us</a>
      <a href='#'>Courses</a>
      <a href='#'>Events</a>
      <a href='#'>Blog</a>
      <a href='#'>Contacts</a>
    </div>
  )
}
