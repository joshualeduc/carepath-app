import React from "react"
import "components/App.css"

import ImprezaToolbar from "components/ImprezaToolbar"
import ImprezaFooter from "components/ImprezaFooter"
import GridBody from "components/GridBody"

function App() {
  return (
    <div>
      <div className="forward-canvas">
        <ImprezaToolbar />
        <GridBody />
      </div>
      <div className="behind-footer">
        <ImprezaFooter />
      </div>
    </div>
  )
}

export default App
