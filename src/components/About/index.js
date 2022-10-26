import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae dolorum et expedita, nulla unde
          voluptatem! Cupiditate ducimus fugit optio. Aperiam commodi, dolorem et incidunt nisi quibusdam quis tenetur
          voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores cupiditate distinctio error eum,
          excepturi labore laboriosam laudantium mollitia officia optio qui, recusandae, sapiente soluta sunt suscipit
          tempora velit voluptatum?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, molestias, sint! Corporis dolor ducimus et
          facilis fugit ipsa, itaque molestias nemo obcaecati officiis pariatur quo reiciendis sed sit vitae! Eos!
        </p>
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