import React from 'react'
import GrandChild from './GrandChild'


const Child = () => {
  return (
    <>
    <h1>Calling from Child</h1>
    <GrandChild/>
    </>
  )
}

export default Child