import React from 'react'
import {Dna} from 'react-loader-spinner'
import './App.scss'

const Loader = () => {
  return (
    <Dna
      wrapperClass={"loader"}
      height="80"
      width="80"
      radius="9"
      color="black"
      ariaLabel="three-dots-loading"
      visible={true}

    />
  )
}

export default Loader