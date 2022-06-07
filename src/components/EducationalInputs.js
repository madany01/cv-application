import React from 'react'
import WrappedTwoColsCtr from './WrappedTwoColsCtr'

class EducationInputs extends React.Component {
  onChange = event => {
    const { name, value } = event.target
    const { values, onChange } = this.props

    onChange({ ...values, [name]: value })
  }

  render() {
    const { id, program, organization, fromDate, toDate, description } = this.props.values

    return (
      <WrappedTwoColsCtr>
        <div className="flexCol gap--xs">
          <label htmlFor={`${id}.program`}>program/degree</label>
          <input
            name="program"
            value={program}
            onChange={this.onChange}
            id={`${id}.program`}
            type="text"
            placeholder="computer science"
          />
        </div>

        <div className="flexCol gap--xs">
          <label htmlFor={`${id}.organization`}>organization/institute</label>
          <input
            name="organization"
            value={organization}
            onChange={this.onChange}
            id={`${id}.organization`}
            type="text"
            placeholder="MIT"
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
            placeholder="November 2020"
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
            placeholder="Spring 2024"
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
            placeholder="achievements, projects, .."
          />
        </div>
      </WrappedTwoColsCtr>
    )
  }
}

export default EducationInputs
