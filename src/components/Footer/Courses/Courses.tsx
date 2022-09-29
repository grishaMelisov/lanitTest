import s from './Courses.module.css'

export function Courses() {
  return (
    <div className={s.courses}>
      <h2>courses</h2>
      <ul>
        <li>
          <a href='#'>Marketing</a>
        </li>
        <li>
          <a href='#'>Management</a>
        </li>
        <li>
          <a href='#'>HR & Recruting</a>
        </li>
        <li>
          <a href='#'>Design</a>
        </li>
        <li>
          <a href='#'>Development</a>
        </li>
      </ul>
    </div>
  )
}
