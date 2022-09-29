import React from 'react'
import s from './Logo.module.css'
import logo from '../../../assets/images/logo.svg'

export function Logo() {
  return <img className={s.logo} src={logo} alt='logo' />
}
