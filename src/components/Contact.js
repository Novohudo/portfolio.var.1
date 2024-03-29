
import React, {useEffect, useRef, useState} from 'react'
import AnimatedLetters from './AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import Loader from '../loader'

const Contact = () => {
	const [letterClass, setLetterClass] = useState('text-animate')
	const refForm = useRef()

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 3000)
	}, [])

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
		.sendForm(
			'service_n06offg',
			'template_87wfe5e',
			refForm.current,
			'WMWAlnGwL52J3lYvG',
		).then(() => {
				alert('Message successfully sent!')
				window.location.reload(false)
			},
			() => {
				alert('Failed to send the message, please try again')
			});
	};


	return (
		<>
			<div className={'container contact-page'}>

					<div className={'contact-form'}>
						<h1>
							<AnimatedLetters
								lettersClass={letterClass}
								strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
								idx={15}/>
						</h1>
						<p>
							If you have any requests or
							questions, don't hesitate to contact me using below form either.
						</p>
						<form ref={refForm} onSubmit={sendEmail}>
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

				<div className={"info-map"}>
					Aleksey Umrikhin,
					<br/>
					Poland,
					<br/>
					Zalasewo os.Wladyslawa Zamoyskiego 8, 62-020 <br/>
					<span>umrixinaleksey@gmail.com</span>
				</div>
				<div className={'map-wrap'}>
					<MapContainer center={[52.390280688980596, 17.07446196728249]} zoom={13}>
						<TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}/>
						<Marker position={[52.390280688980596, 17.07446196728249]}>
							<Popup>Aleks lives here , come over for a cup coffee :) </Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<Loader/>
		</>
	)
}

export default Contact