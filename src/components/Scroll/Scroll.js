import React from 'react'
import './Scroll.css'

const Scroll = (props) => {
  return (
    <div className="scrollable_div custom-scrollbar">
      {props.children}
    </div>
  )
}

export default Scroll