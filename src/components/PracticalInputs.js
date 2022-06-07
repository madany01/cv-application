import React from 'react'
import WrappedTwoColsCtr from './WrappedTwoColsCtr'

class PracticalInputs extends React.Component {
  onChange = event => {
    const { name, value } = event.target
    const { values, onChange } = this.props

    onChange({ ...values, [name]: value })
  }

  render() {
    const { id, company, jobTitle, fromDate, toDate, description } = this.props.values

    return (
      <WrappedTwoColsCtr>
        <div className="flexCol gap--xs">
          <label htmlFor={`${id}.program`}>program/degree</label>
          <input
            name="company"
            value={company}
            onChange={this.onChange}
            id={`${id}.company`}
            type="text"
            placeholder="Google"
          />
        </div>

        <div className="flexCol gap--xs">
          <label htmlFor={`${id}.jobTitle`}>job title</label>
          <input
            name="jobTitle"
            value={jobTitle}
            onChange={this.onChange}
            id={`${id}.jobTitle`}
            type="text"
            placeholder="Web Developer"
          />
        </div>

        <div className="flexCol gap--xs">
          <label htmlFor={`${id}.fromDate`}>from date</label>
          <input
            name="fromDate"
            value={fromDate}
            onChange={this.onChange}
            id={`${id}.fromDate`}
            type="text"
            placeholder="Spring 2022"
          />
        </div>

        <div className="flexCol gap--xs">
          <label htmlFor={`${id}.toDate`}>to date</label>
          <input
            name="toDate"
            value={toDate}
            onChange={this.onChange}
            id={`${id}.toDate`}
            type="text"
            placeholder="Autumn 2024"
          />
        </div>

        <div className="flexCol gap--xs">
          <label htmlFor={`${id}.description`}>description</label>
          <textarea
            rows="5"
            cols="20"
            name="description"
            value={description}
            onChange={this.onChange}
            id={`${id}.description`}
            type="text"
            placeholder="main job tasks, projects, .."
          />
        </div>
      </WrappedTwoColsCtr>
    )
  }
}

export default PracticalInputs
