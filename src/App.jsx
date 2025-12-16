import { useState } from 'react'
import GeneralInfo from './components/generalInfo.jsx';
import Cv from './components/cv.jsx';
import './styles/index.css'

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');


  return (
    <div className="app-container">
      <div className="left"> 
        <h1>CV Builder</h1>
        <GeneralInfo fullName={fullName} setFullName={setFullName} 
        email={email} setEmail={setEmail}/>
      </div>
      
      <Cv fullName={fullName} email={email}/>

    </div>
    
  )
}

export default App
