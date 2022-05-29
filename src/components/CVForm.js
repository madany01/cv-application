import React from 'react'
import NumericInput from './NumericInput'

// Inaccurate warning when value props is set to form without onChange on input
// https://github.com/facebook/react/issues/1118

const suppressMissingOnChangeHandlerWarning = () => {}

class CVForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.fromEntries(
      [...Object.entries(this.props.inputValues)].map(([name, value]) => [name, value ?? ''])
    )
  }

  onFormChange = e => {
    const { name: inputName, value: inputNewValue } = e.target
    this.setState({ [inputName]: inputNewValue })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit({ ...this.state })
  }

  render() {
    const {
      name,
      email,
      phoneNumber,
      instituteName,
      major,
      studyPeriod,
      companyName,
      positionTitle,
      jobTasks,
      companyJoiningDate,
      companyLeavingDate,
    } = this.state

    return (
      <form onChange={this.onFormChange} onSubmit={this.onSubmit}>
        <fieldset>
          <div className="legend">personal info</div>
          <div className="inputGroup">
            <label htmlFor="name">full name</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={name}
              name="name"
              id="name"
              type="text"
              placeholder="FirstName LastName"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="email">email</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={email}
              name="email"
              id="email"
              type="email"
              placeholder="me@example.com"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="phoneNumber">phone number</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={phoneNumber}
              name="phoneNumber"
              id="phoneNumber"
              placeholder="12345"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="legend">educational experience</div>
          <div className="inputGroup">
            <label htmlFor="instituteName">institute</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={instituteName}
              name="instituteName"
              id="instituteName"
              type="text"
              placeholder="MIT"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="major">major</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={major}
              name="major"
              id="major"
              type="text"
              placeholder="software engineering"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="studyPeriod">study period (in years)</label>
            <NumericInput
              onChange={suppressMissingOnChangeHandlerWarning}
              value={studyPeriod}
              pattern="[1-6]"
              name="studyPeriod"
              id="studyPeriod"
              type="number"
              min={1}
              max={6}
              placeholder="5"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="legend">practical experience</div>
          <div className="inputGroup">
            <label htmlFor="companyName">company name</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={companyName}
              name="companyName"
              id="companyName"
              type="text"
              placeholder="google"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="positionTitle">job title</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={positionTitle}
              name="positionTitle"
              id="positionTitle"
              type="text"
              placeholder="software engineer"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="companyJoiningDate">joining date</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={companyJoiningDate}
              name="companyJoiningDate"
              id="companyJoiningDate"
              type="date"
              required
            />
          </div>

          <div>
            <label htmlFor="companyLeavingDate">leaving date</label>
            <input
              onChange={suppressMissingOnChangeHandlerWarning}
              value={companyLeavingDate}
              name="companyLeavingDate"
              id="companyLeavingDate"
              type="date"
              required
            />
          </div>

          <div>
            <label htmlFor="jobTasks">main job tasks</label>
            <textarea
              onChange={suppressMissingOnChangeHandlerWarning}
              value={jobTasks}
              name="jobTasks"
              id="jobTasks"
              cols="30"
              rows="4"
              required
            />
          </div>
        </fieldset>

        <button type="submit">submit</button>
      </form>
    )
  }
}

export default CVForm
