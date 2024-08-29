import React from 'react'
import '../components/animation.css'

const Loading = () => {
  return (
    <div className={"circle_relative"}>
        <div className={"circle_orbit"}>
          <div className={"spin_element"}>
            <div className={"cirlce_transparent"}></div>
          </div>
        </div>        
    </div>
  )
}

export default Loading