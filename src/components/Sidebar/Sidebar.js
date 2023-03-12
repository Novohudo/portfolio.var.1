import './Sidebar.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className={'nav-bar'}>
      <nav>
        <NavLink activeclassname={'active'} to={'/'}>
          <FontAwesomeIcon icon={faHome} color={'#070000'} />
        </NavLink>

        <NavLink activeclassname={'active'} className={'about-link'} to={'/about'}>
          <FontAwesomeIcon icon={faUser} color={'#070000'} />
        </NavLink>

        <NavLink activeclassname={'active'} className={'contact-link'} to={'/contact'}>
          <FontAwesomeIcon icon={faEnvelope} color={'#070000'} />
        </NavLink>
        <NavLink activeclassname={'active'} className={'myapps-link'} to={'/myapps'}>
          <FontAwesomeIcon icon={faReact} color={'#070000'} />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target={'_blank'} rel={'noreferrer'} href={'https://www.facebook.com/alex.umrikhin.3/'}>
            <FontAwesomeIcon icon={faFacebook} color={'#070000'} />
          </a>
        </li>
        <li>
          <a target={'_blank'} rel={'noreferrer'} href={'https://github.com/Novohudo'}>
            <FontAwesomeIcon icon={faGithub} color={'#070000'} />
          </a>
        </li>
      </ul>
    </div>
  )
}


export default Sidebar