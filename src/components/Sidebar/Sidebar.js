import './Sidebar.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.svg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn, faReact, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className={'nav-bar'}>


      <nav>
        <NavLink  activeclassname={"active"} to={'/'}>
          <FontAwesomeIcon icon={faHome} color={"#4d4d4e"}/>
        </NavLink>

        <NavLink  activeclassname={"active"} className={"about-link"} to={'/about'}>
          <FontAwesomeIcon icon={faUser} color={"#4d4d4e"}/>
        </NavLink>

        <NavLink  activeclassname={"active"} className={"contact-link"} to={'/contact'}>
          <FontAwesomeIcon icon={faEnvelope} color={"#4d4d4e"}/>
        </NavLink>
        <NavLink activeclassname={"active"} className={"myapps-link"} to={'/myapps'}>
          <FontAwesomeIcon icon={faReact} color={"#4d4d4e"}/>
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target={'_blank'} rel={'noreferrer'} href={'https://www.facebook.com/alex.umrikhin.3/'}>
            <FontAwesomeIcon icon={faFacebook} color={"#4d4d4e"}/>
          </a>
        </li>
        <li>
          <a target={'_blank'} rel={'noreferrer'} href={'https://github.com/Novohudo'}>
            <FontAwesomeIcon icon={faGithub} color={"#4d4d4e"}/>
          </a>
        </li>
      </ul>
    </div>
)
}




export default Sidebar