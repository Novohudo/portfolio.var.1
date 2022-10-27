import './index.scss'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className={'container contact-page'}>
        <div className={'text-zone'}>
          <h1>
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15} />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet commodi consequatur doloremque ea
            eligendi eum explicabo, iure magni molestias odit qui suscipit tempore. A distinctio optio recusandae
            sapiente tenetur?
          </p>
          <div className={'contact-form'}>
            <form>
              <ul>
                <li className={'half'}>
                  <input
                    type={'text'}
                    name={'name'}
                    placeholder={'Name'}
                    required
                  />
                </li>
                <li className={'half'}>
                  <input
                    type={'email'}
                    name={'Email'}
                    placeholder={'Email'}
                    required
                  />
                </li>
                <li>
                  <input
                    type={'text'}
                    name={'subject'}
                    placeholder={'Subject'}
                    required
                  />
                </li>
                <li>
                  <textarea
                    name={'message'}
                    placeholder={'Message'}
                    required
                  />
                </li>
                <li>
                  <input
                    type={'submit'}
                    className={'flat-button'}
                    value={'SEND'}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type={'pacman'} />
    </>
  )
}

export default Contact