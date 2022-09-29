import s from './OrangeButton.module.css'

export function OrangeButton(props: any) {
  let buttonStyle
  if (props.header) buttonStyle = s.header_button
  if (props.footer) buttonStyle = s.footer_button
  if (props.card) buttonStyle = s.card_button

  return <button className={buttonStyle}>{props.buttonText}</button>
}
