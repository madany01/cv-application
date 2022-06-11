import { useState } from 'react'
import { createEmptyEducationalData, createEmptyPracticalData, createPersonalData } from '../utils'

import Header from './Header'
import Footer from './Footer'
import CVForm from './CVForm'
import CVSummary from './CVSummary'

const COMPONENTS = {
  CV_FORM: 0,
  CV_SUMMARY: 1,
}

function App() {
  const [personalInfo, setPersonalInfo] = useState(() => createPersonalData())
  const [educationalInfo, setEducationalInfo] = useState(() => [createEmptyEducationalData()])
  const [practicalInfo, setPracticalInfo] = useState(() => [createEmptyPracticalData()])
  const [currentComponent, setCurrentComponent] = useState(COMPONENTS.CV_FORM)

  const onSubmit = () => {
    setCurrentComponent(COMPONENTS.CV_SUMMARY)
  }

  const onChange = (infoType, infoValue) => {
    switch (infoType) {
      case 'personal':
        setPersonalInfo(infoValue)
        break

      case 'educational':
        setEducationalInfo(infoValue)
        break

      case 'practical':
        setPracticalInfo(infoValue)
        break

      default:
        throw new Error(`infoType ${infoType} not match any of [personal, educational, practical]`)
    }
  }

  const cvData = { personal: personalInfo, educational: educationalInfo, practical: practicalInfo }
  let components = null

  if (currentComponent === COMPONENTS.CV_FORM) {
    components = <CVForm cvData={cvData} onChange={onChange} onSubmit={onSubmit} />
  } else {
    components = <CVSummary cvData={cvData} onChange={onChange} />
  }

  return (
    <div className="mainCtr flexCol gap--lg">
      <Header />
      <div className="mainContentCtr">{components}</div>
      <Footer />
    </div>
  )
}

export default App
