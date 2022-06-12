import * as React from 'react'
import { Link } from 'react-router-dom'

export const HeaderNav = ({ title }) => {
  return (
    <header>
      <nav>
        <h1>{title || 'You forgot the title, dawg'}</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/nonav'>No Nav</Link>
          </li>
          <li>
            <Link to='/oops'>Oops, bad link</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export const PrimaryLayout = ({ title, children }) => {
  return (
    <>
      <HeaderNav title={title} />
      <main>{children}</main>
    </>
  )
}
