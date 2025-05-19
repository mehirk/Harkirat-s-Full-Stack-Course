import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
  <div style={{background: "#dfe6e9", height: "100vh"}}>
    <div style={{display: "flex", justifyContent: "center"}}>
      <PostComponent />
    </div>
  </div>
  )
}

const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

function PostComponent() {
  return <div style={style}>
    <div style={{display: "flex"}}>
      <img src={"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"} style={{
        width: 30,
        height: 30, 
        borderRadius: 20
      }}/>
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>
          100xdevs
        </b>
        <div>53,456 followers</div>
        <div>12m</div>
      </div>
    </div>
    <div style={{fontStyle: 12}}>
      Want to know how to win big? Check out these folks won $6000 in bounties.
    </div>
  </div>
}


export default App
