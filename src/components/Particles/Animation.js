import React, { useState } from 'react'
import './Animation.scss'

const Animation = () => {
 const item=[];
  let i;
  for (i = 0; i < 400; i++) {
      item.push(' ')
  }
  return (
    <div className={'wrap'}>
      {item.map(i => (
        <div className={'c'}>{i.item}</div>
      ))}
    < /div>
  )


}
export default Animation