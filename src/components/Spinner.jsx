import React from 'react'

import { ClipLoader } from 'react-spinners'

const override = {
    display: 'black',
    margin: '100px auto',
}


const Spinner = ({loading}) => {
  return (
    <ClipLoader 
    color = '#433Bca'
    loading = {loading}
    cssOverride = {override}
    size = {150}
    />
  )
}

export default Spinner
