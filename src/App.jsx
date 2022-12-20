import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Home from "./pages/Home"
import Content from "./pages/Content"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/content" element={<Content/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
