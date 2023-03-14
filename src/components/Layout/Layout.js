import React from 'react'
import './Layout.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'


const Layout = () => {

  return (
    <div className={'App'}>
      <Sidebar />
      <div className={'page'}>
        <Outlet/>
      </div>
      <div className={'my-links'}>
        <a target={'_blank'} rel={'noreferrer'} href={'https://www.facebook.com/alex.umrikhin.3/'}>
          <FontAwesomeIcon icon={faFacebook} color={'#070000'} />
        </a>
        <a target={'_blank'} rel={'noreferrer'} href={'https://github.com/Novohudo'}>
          <FontAwesomeIcon icon={faGithub} color={'#070000'} />
        </a>
      </div>
    </div>
  )
}

export default Layout