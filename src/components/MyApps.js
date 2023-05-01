import React, { useEffect, useState } from 'react'
import radioApp from '../assets/images/radioApp.svg'
import chessApp from '../assets/images/chessApp.svg'
import todoApp from '../assets/images/toDoApp.svg'
import socialApp from '../assets/images/social.svg'
import Loader from '../loader'

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
        <div className={'links-row'}>
          <a href={'https://novohudo.github.io/Radio-Gaga/'} target={'_blank'} rel={'noreferrer'}><img
            className={'app-icon'} src={radioApp} /><p>RADIO</p></a>
          <a href={'https://react-chess-v-1-qgg8b4cuf-novohudo.vercel.app/'} target={'_blank'} rel={'noreferrer'}><img
            className={'app-icon'} src={chessApp} /><p>CHESS</p></a>
          <a href={'https://novohudo.github.io/ToDo.colorfull/'} target={'_blank'} rel={'noreferrer'}><img
            className={'app-icon'} src={todoApp} /><p>TODO_APP</p></a>
          <a href={'https://novohudo.github.io/Social-platform/'} target={'_blank'} rel={'noreferrer'}><img
            className={'app-icon'} src={socialApp} /><p>Social Network</p></a>
        </div>
      </div>
      <Loader />
    </>
  )
}

export default MyApps