import React, { useEffect, useState } from 'react'

const Cards = (props) => {
  const [mycount, setcount] = useState(0)
  useEffect(()=>{
    document.title=`<h1>My Count : ${mycount}<h1>`

  });

  return (
    <>
    <h1>Calling from Cards</h1>
    <h2>
        {props.Title}
    </h2>
    </>
  )
}

export default Cards