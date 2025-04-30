import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation();
  return (
    <div>
        <nav>
          <Link className={`linktags a ${location.pathname.replace('/', '')}`} to={'/about'}>About</Link>
          <Link className={`linktags b ${location.pathname.replace('/', '')}`} to={'/skills'}>Skills</Link>
          <Link className={`linktags c ${location.pathname.replace('/', '')}`} to={'/hobbies'}>Hobbies and Interests</Link>
          <Link className={`linktags d ${location.pathname.replace('/', '')}`} to={'/academicbackground'}>Aacdemic background</Link>
          <Link className={`linktags e ${location.pathname.replace('/', '')}`} to={'/passion'}>Passion</Link>
          <Link className={`linktags f ${location.pathname.replace('/', '')}`} to={'/certifications'}>Certifications</Link>
        </nav>
    </div>
  )
}
