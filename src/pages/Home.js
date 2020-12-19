import React from "react"
import "../index.css"
import Footer from "../components/Footer/Footer"
var decName = "{ . . . k a t i e A n i l i o n i s }"
function Home() {
  return (
    <>
    <div className="container-fluid">
      <div className="home jumbotron-fluid">
  

    <h1 className="float-right display-3">{decName}</h1>
    <p className="text-home">Welcome! Flip through to learn more about me, my projects, my career, and more! </p>
  </div>
</div>
<Footer/>
    </>
  )
}

export default Home