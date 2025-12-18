import { useState } from 'react'
import GeneralInfo from './components/generalInfo.jsx';
import Education from './components/education.jsx';
import Experiences from './components/experiences.jsx';
import Cv from './components/cv.jsx';
import './styles/index.css'

function App() {
  const data = {
    profile: {
      fullName: "Alan Liu",
      email: "alan@example.com",
      location: "USA",
      phone: "123-456-7890",
    },
    education: {
      school: "Harvard",
      gradDate: "May 2020",
      gpa: "4.0",
      major: "Computer Science",
      courseWork: "Data Structures, Software Development",
    },
    experiences: [
      { id: '0', company: 'Company A', role: 'Engineer', startDate: 'Jan 2021', endDate: 'Jan 2022', description: 'Worked on X'}
    ]

  }
  const [profile, setProfile] = useState(data.profile);
  const [education, setEducation] = useState(data.education);
  const [experiences, setExperiences] = useState(data.experiences);


  return (
    <div className="app-container">
      <div className="left"> 
        <h1 className="app-name">CV Builder</h1>
        <GeneralInfo profile={profile} setProfile={setProfile}/>
        <Education education={education} setEducation={setEducation}/>
        <Experiences experiences={experiences} setExperiences={setExperiences}/>
      </div>
      
      <Cv profile={profile} education={education} experiences={experiences}/>

    </div>
    
  )
}

export default App
