import React, { useEffect, useState } from 'react'
import './MyApps.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsToDot, faListCheck, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { Audio } from 'react-loader-spinner'
import Loader from '../../loader'


const MyApps = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className={'container apps-page'}>
        <div className={'text-zone'}>
          <h1>
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={['M', 'y', ' ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', ' ', 'projects']}
              idx={15} />
          </h1>
        </div>
        <div className={'links-list'}>
          <div className={'links-row'}>
            <a href={'https://novohudo.github.io/Social-Network/'} target={'_blank'} rel={'noreferrer'}><FontAwesomeIcon
              icon={faUserFriends} color={'#4d4d4e'} /><p>"Social-Network"- with:
              React-Redux<br />React-Router<br />Redux-Form<br />Redux-Thunk<br />Sass<br />My first steps and practice
              :)</p></a>
            <a href={'https://novohudo.github.io/ToDo.colorfull/'} target={'_blank'} rel={'noreferrer'}>
              <FontAwesomeIcon
                icon={faListCheck} color={'#4d4d4e'} /><p>"ToDo-list"- work on mistakes and improved code style..</p>
            </a>
          </div>
        </div>
      </div>
      <Loader />
    </>
  )
}

export default MyApps