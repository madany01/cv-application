import React from 'react'

import TitledCtr from './TitledCtr'
import WrappedTwoColsCtr from './WrappedTwoColsCtr'

class PersonalInputs extends React.Component {
  onChange = event => {
    const { name, value } = event.target
    const { values, onChange } = this.props

    onChange({ ...values, [name]: value })
  }

  render() {
    const { id, firstName, lastName, email, phoneNumber } = this.props.values

    return (
      <TitledCtr title="personal info">
        <WrappedTwoColsCtr>
          <div className="flexCol gap--xs">
            <label htmlFor={`${id}.firstName`}>first name </label>
            <input
              name="firstName"
              value={firstName}
              onChange={this.onChange}
              id={`${id}.firstName`}
              type="text"
              placeholder="John"
            />
          </div>

          <div className="flexCol gap--xs">
            <label htmlFor={`${id}.lastName`}>last name</label>
            <input
              name="lastName"
              value={lastName}
              onChange={this.onChange}
              id={`${id}.lastName`}
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className="flexCol gap--xs">
            <label htmlFor={`${id}.email`}>email</label>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              id={`${id}.email`}
              type="text"
              placeholder="me@example.com"
            />
          </div>

          <div className="flexCol gap--xs">
            <label htmlFor={`${id}.phoneNumber`}>phone number</label>
            <input
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.onChange}
              id={`${id}.phoneNumber`}
              type="text"
              placeholder="12345"
            />
          </div>
        </WrappedTwoColsCtr>
      </TitledCtr>
    )
  }
}

export default PersonalInputs
