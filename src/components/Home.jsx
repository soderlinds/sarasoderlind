import React from 'react'
import MyVideo from "../images/movingcolor.mp4"
import '../styles/_home.sass'; 

const Home = () => {
  return (
    <div className="video-container">
      <video preload="metadata" autoPlay loop muted>
  <source src={MyVideo} type="video/mp4" />
  Your browser does not support HTML5 video.
</video>
    </div>
  )
}

export default Home
