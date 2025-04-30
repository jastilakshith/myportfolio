import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <nav>
          <Link className='linktag' to={'/about'}>About</Link>
          <Link className='linktag' to={'/skills'}>Skills</Link>
          <Link className='linktag' to={'/hobbies'}>Hobbies and Interests</Link>
          <Link className='linktag' to={'/academicbackground'}>Aacdemic background</Link>
          <Link className='linktag' to={'/passion'}>Passion</Link>
          <Link className='linktag' to={'/certifications'}>Certifications</Link>
        </nav>
    </div>
  )
}
