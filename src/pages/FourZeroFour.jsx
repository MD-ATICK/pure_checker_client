import React from 'react'
import { Link } from 'react-router-dom'

function FourZeroFour() {
  return (
    <div className=' p-8 text-center'>
      <h1 className=' text-4xl font-bold '>FourZeroFour</h1> <br />
      <Link to={'/'} className=' font-semibold underline'>Back to home</Link>
    </div>
  )
}

export default FourZeroFour
