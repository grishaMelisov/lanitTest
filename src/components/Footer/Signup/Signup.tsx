import { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './Signup.module.css'

export function Signup() {
  const [inputText, setInputText] = useState('')
  console.log(inputText)
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setInputText(event.currentTarget.value)

  const buttonHandler = () => {
    alert(inputText)
    setInputText('')
  }

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      buttonHandler()
    }
  }

  return (
    <div className={s.signup}>
      <h2>SIGN UP TO OUR NEWSLETTER</h2>
      <label className={s.label}>
        <input
          placeholder='Email address'
          type='email'
          value={inputText}
          onChange={inputHandler}
          onKeyDown={keyDownHandler}
        />
        <button className={s.input_button} onClick={buttonHandler} />
      </label>
      <p>
        *Subscribe to our newsletter to receive communications and early updates from
        Createx SEO Agency.
      </p>
    </div>
  )
}
