import React from 'react'

const Header =React.memo(({title}) => {
    console.log(title)
  return (
    <div>{title}</div>
  )
})

export default Header