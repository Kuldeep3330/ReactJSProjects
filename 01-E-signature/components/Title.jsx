import React from 'react'

const Title = ({classes, text}) => {
  return (
    <h1 className={!classes?'title text-center':classes}>{!text?"Title":text}</h1>
  )
}

export default Title