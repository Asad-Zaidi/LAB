import React from 'react'

const name = () => {
  return (
    <>
    <Firstname.Consumer>
      {fname => <h1>{fname}</h1>}
    </Firstname.Consumer>

    </>
  )
}

export default name