import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from './AnimatedLetters/AnimatedLetters'
import Aleks from '../assets/images/logopreload.jpg'
import Loader from '../loader'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A','l', 'e', 'k', 's', 'e', 'y']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e','v','e','l','o','p','e','r', '.']

  useEffect(() => {
     setTimeout(() => {
        setLetterClass('text-animate-hover')
    },4000)
  }, [])

  return (
    <>
    <div className={'container home-page'}>
      <div className={'text-zone'}>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass}_12`}>i</span>
          <br />
          <span className={`${letterClass}_13`}>I</span>
          <span className={`${letterClass}_14`}>'m</span>
          <br/>
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / Junior / Good Man :)</h2>
        <Link to={'/contact'} className={'flat-button'}>CONTACT ME</Link>
      </div>
      <img className={'aleks-head'} src={Aleks}/>
    </div>
      <Loader/>
    </>
  )
}

export default Home;