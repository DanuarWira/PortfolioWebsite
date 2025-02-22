import React from 'react'
import { MenuItem } from '../../data/MenuItem'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex justify-center gap-12 py-6 text-sm text-neutral-50'>
            {MenuItem.map((item) => (
                <li key={item.id}>
                    <a href={item.url} className='hover:text-blue-500'>{item.title}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar