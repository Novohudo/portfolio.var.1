import React, { useEffect, useState } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGitkraken, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from '../../loader'


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
        <p>Hello, my name is Alexey, I'm 30 years old, I was born in the city of Kyiv, from a very young age I was drawn to computer topics, and especially to the console, I think the 'Matrix' film is to blame)
          And now, after a years and a lot of tedious work, I finally came to the conclusion that it's time to do real business)
          The direction is chosen and forward to React and Js)
          A year of pain and suffering in independent study of React gave me the opportunity to understand the general direction and methods of solving the tasks, the only thing missing is real business with guys who know a lot about good code)
          I understand,i am a beginner frontend-developer,my journey in the wondrous world of interface development is just beginning..
          However i am already familiar with the technologies and some development techniques,have written several applications with JavaScript & React/Redux/Sass
          I like learning new technologies and learning new ways of working and creating ))</p>
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
      <Loader/>
    </>
  )
}

export default About