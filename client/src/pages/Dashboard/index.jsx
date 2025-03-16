import "./index.css"

import React from 'react'

function Index({size}) {
  return (
    <div className="main">
      <p>Window size: {size.width}, {size.height} </p>
    </div>
  )
}

export default Index