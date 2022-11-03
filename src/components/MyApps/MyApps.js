import React, { useEffect,useState } from 'react'
import './MyApps.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsToDot, faListCheck, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

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
            strArray={['M', 'y', ' ', 'p', 'r', 'a', 'c','t','i','c','e',' ','projects']}
            idx={15}/>
        </h1>
      </div>
      <ul className={'links-list'}>
        <li>
          <a href={'https://novohudo.github.io/posts'} target={'_blank'} rel={'noreferrer'}><FontAwesomeIcon
            icon={faUserFriends} color={'#4d4d4e'} /> </a>
        </li>
        <li>
          <a href={'https://novohudo.github.io/posts'} target={'_blank'} rel={'noreferrer'}> <FontAwesomeIcon
            icon={faListCheck} color={'#4d4d4e'} /></a>
        </li>
        <li>
          <a href={'https://novohudo.github.io/posts'} target={'_blank'} rel={'noreferrer'}><FontAwesomeIcon
            icon={faArrowsToDot} color={'#4d4d4e'} /></a>
        </li>
        <li>
          <a href={'https://novohudo.github.io/posts'} target={'_blank'} rel={'noreferrer'}><FontAwesomeIcon
            icon={faArrowsToDot} color={'#4d4d4e'} /></a>
        </li>
      </ul>
    </div>

  <Loader type={'pacman'}/>
  </>
  )
}

export default MyApps