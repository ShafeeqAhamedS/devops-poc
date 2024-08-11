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
          <li>Implement Terraform for installing node🌱</li>
        </ul>
        <h2>Tasks To Do 📋</h2>
        <ul>
          <li>Prepare Documentation 📚</li>
        </ul>
      </div>
      <div className="latest-push">
        <h2>Latest Push 🔄</h2>
        <p>Feature branch merged on August 11, 2024 - 06:30 PM IST 📅</p>
      </div>
    </>
  )
}

export default App
