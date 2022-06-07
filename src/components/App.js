import React from 'react'
import { createEmptyData } from '../utils'

import Header from './Header'
import Footer from './Footer'
import CVForm from './CVForm'
import CVSummary from './CVSummary'

const COMPONENTS = {
  CV_FORM: 0,
  CV_SUMMARY: 1,
}

class App extends React.Component {
  state = {
    currentComponent: COMPONENTS.CV_FORM,
    cvData: createEmptyData(),
  }

  onSubmit = () => {
    this.setState({ currentComponent: COMPONENTS.CV_SUMMARY })
  }

  onChange = cvData => {
    this.setState({ cvData })
  }

  render() {
    const { cvData, currentComponent } = this.state

    let components = null

    if (currentComponent === COMPONENTS.CV_FORM) {
      components = <CVForm cvData={cvData} onChange={this.onChange} onSubmit={this.onSubmit} />
    } else {
      components = <CVSummary cvData={cvData} onChange={this.onChange} />
    }

    return (
      <div className="mainCtr flexCol gap--lg">
        <Header />
        <div className="mainContentCtr">{components}</div>
        <Footer />
      </div>
    )
  }
}

export default App
