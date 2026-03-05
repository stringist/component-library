import './App.css'
import React from 'react'
import Badge from './components/Badge'



function App() {
  const colorVariants = ["grey", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]

  return (
    <>
      <header>
        <h1>Component Library</h1>
      </header>


      <section className='badge-card'>
        <h2>Badges</h2>
        <h3>Square:</h3>
        <div className='badge-wrapper'>
          {colorVariants.map(color => {
            return <Badge key={color} variant="square" color={color} >{color}</Badge>
          })}
        </div>
        <h3>Pill:</h3>
        <div className='badge-wrapper'>
          {colorVariants.map(color => {
            return <Badge key={color} variant="pill" color={color} >{color}</Badge>
          })}</div>
      </section>
    </>
  )
}

export default App
