import React from 'react'
import './MyApps.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons'

const MyApps = () => {
  return (
    <div className={"myapps"}>
      <ul className={"link-wrap"}>
        <li className={"link-item"}>
          <a href={"https://novohudo.github.io/posts"} target={'_blank'} rel={'noreferrer'}><FontAwesomeIcon icon={faArrowsToDot}/> </a>
        </li>
        <li className={"link-item"}>
          <a href={"https://novohudo.github.io/posts"} target={'_blank'} rel={'noreferrer'}> {' '}</a>
        </li>
        <li className={"link-item"}>
          <a href={"https://novohudo.github.io/posts"} target={'_blank'} rel={'noreferrer'}> {' '}</a>
        </li>
        <li className={"link-item"}>
          <a href={"https://novohudo.github.io/posts"} target={'_blank'} rel={'noreferrer'}>{' '}</a>
        </li>
      </ul>
    </div>
  )
}

export default MyApps