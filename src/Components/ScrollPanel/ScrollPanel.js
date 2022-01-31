import React from "react"
import './ScrollPanelStyles.css'

function ScrollPanel({ children }) {
    return (
      <div className="panel">
        {children}
      </div>
    )
}

export default ScrollPanel