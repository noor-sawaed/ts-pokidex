import React from "react"
import logo from "./logo.svg"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/homepage/Home"
import Details from "./pages/details/Details"
function App() {
  return (
    <BrowserRouter>
      <img
        id="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
      />
      <Routes>
        <Route path="/details/:pokemonid" element={<Details />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
