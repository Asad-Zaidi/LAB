import React from 'react'
import Child from './Child'
import Hook from './Hook'


const parent = () => {
  return (
    <>
    <h1>Calling from Parent</h1>
    <Child/>
    <Hook/>

    </>
  )
}

export default parent