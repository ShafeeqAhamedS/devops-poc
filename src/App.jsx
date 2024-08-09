import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>DevOps POC 🚀</h1>
      <div className="info" style={{ textAlign: "left" }}>
        <h2>Tasks Completed ✅</h2>
        <ul>
          <li>Initial setup completed 🛠️</li>
          <li>Basic UI elements added 🎨</li>
          <li>Button click counter implemented 🔢</li>
          <li>Jenkins pipeline setup 🧩</li>
          <li>IIS Server Set up 🌐</li>
        </ul>
        <h2>Tasks To Do 📋</h2>
        <ul>
          <li>Implement Terraform 🌱</li>
          <li>Prepare Documentation 📚</li>
        </ul>
      </div>
      <div className="latest-push">
        <h2>Latest Push 🔄</h2>
        <p>Feature branch merged on August 9, 2024 - 03:00 PM IST 📅</p>
      </div>
    </>
  )
}

export default App
