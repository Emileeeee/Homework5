import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <h1>I am Header</h1>
      <div>
        <ul>
          <li>
          <Link to={'/'}>Главная страница</Link>
          </li>
          <li>
          <Link to={'/Basket'}>Kopзина</Link>
          </li>
          </ul>
        
        
      </div>
    </div>
  )
}
