import TitledCtr from './TitledCtr'
import WrappedTwoColsCtr from './WrappedTwoColsCtr'

function PersonalInputs({ values, onChange }) {
  function handleChange(event) {
    const { name, value } = event.target
    onChange({ ...values, [name]: value })
  }

  const { id, firstName, lastName, email, phoneNumber } = values

  return (
    <TitledCtr title="personal info">
      <WrappedTwoColsCtr>
        <div className="flexCol gap--xs">
          <label htmlFor={`${id}.firstName`}>first name </label>
          <input
            name="firstName"
            value={firstName}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            id={`${id}.phoneNumber`}
            type="text"
            placeholder="12345"
          />
        </div>
      </WrappedTwoColsCtr>
    </TitledCtr>
  )
}

export default PersonalInputs
