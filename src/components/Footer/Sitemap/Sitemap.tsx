import s from './Sitemap.module.css'

export function Sitemap() {
  return (
    <div className={s.sitemap}>
      <h2>SITE MAP</h2>
      <ul>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Courses</a>
        </li>
        <li>
          <a href='#'>Events</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
        <li>
          <a href='#'>Contacts</a>
        </li>
      </ul>
    </div>
  )
}
