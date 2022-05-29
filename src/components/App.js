import React from 'react'
import CVForm from './CVForm'
import CVSummary from './CVSummary'

const INITIAL_APPLICANT_INFO = {
  name: null,
  email: null,
  phoneNumber: null,
  instituteName: null,
  major: null,
  studyPeriod: null,
  companyName: null,
  positionTitle: null,
  jobTasks: null,
  companyJoiningDate: null,
  companyLeavingDate: null,
}

const COMPONENTS = {
  CV_FORM: 0,
  CV_SUMMARY: 1,
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      applicantInfo: { ...INITIAL_APPLICANT_INFO },
      activeComponent: COMPONENTS.CV_FORM,
    }
  }

  onSubmit = applicantInfo => {
    this.setState({
      applicantInfo: { ...applicantInfo },
      activeComponent: COMPONENTS.CV_SUMMARY,
    })
  }

  onEditBtnClick = () => {
    this.setState({ activeComponent: COMPONENTS.CV_FORM })
  }

  render() {
    const { applicantInfo, activeComponent } = this.state

    const component =
      activeComponent === COMPONENTS.CV_FORM ? (
        <CVForm inputValues={applicantInfo} onSubmit={this.onSubmit} />
      ) : (
        <CVSummary applicantInfo={applicantInfo} onEditBtnClick={this.onEditBtnClick} />
      )

    return (
      <div className="mainCtr">
        <h1 className="pageTitle">cv application</h1>
        {component}
      </div>
    )
  }
}

export default App
