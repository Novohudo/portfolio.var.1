import React, { useEffect, useState } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGitkraken, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className={'container about-page'}>
      <div className={'text-zone'}>
        <h1>
          <AnimatedLetters
            lettersClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>Hej :) i am a beginner frontend-developer,my journey in the wondrous world of interface development is just beginning..</p>
        <p>However i am already familiar with the technologies and some development techniques,have written several applications with JavaScript & React/Redux/Sass </p>
        <p>I love learning new technologies and learning new ways of working  and creating ))</p>
      </div>

      <div className={'stage-cube-cont'}>
        <div className={'cubespinner'}>
          <div className={'face1'}>
            <FontAwesomeIcon icon={faReact} color={'#5ED4F4'}/>
          </div>
          <div className={'face2'}>
            <FontAwesomeIcon icon={faHtml5} color={'#F06529'} />
          </div>
          <div className={'face3'}>
            <FontAwesomeIcon icon={faCss3} color={'#28A4D9'}/>
          </div>
          <div className={'face4'}>
            <FontAwesomeIcon icon={faGitAlt} color={'#EC4D29'} />
          </div>
          <div className={'face5'}>
            <FontAwesomeIcon icon={faJsSquare} color={'#EFD81D'}/>
          </div>
          <div className={'face6'}>
            <FontAwesomeIcon icon={faGitkraken} color={'#00811d'}/>
          </div>
        </div>
      </div>
    </div>
    <Loader type={"pacman"}/>
    </>
  )
}

export default About