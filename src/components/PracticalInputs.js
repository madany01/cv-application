import WrappedTwoColsCtr from './WrappedTwoColsCtr'

function PracticalInputs({ values, onChange }) {
  function handleChange(event) {
    const { name, value } = event.target

    onChange({ ...values, [name]: value })
  }

  const { id, company, jobTitle, fromDate, toDate, description } = values

  return (
    <WrappedTwoColsCtr>
      <div className="flexCol gap--xs">
        <label htmlFor={`${id}.program`}>program/degree</label>
        <input
          name="company"
          value={company}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          id={`${id}.description`}
          type="text"
          placeholder="main job tasks, projects, .."
        />
      </div>
    </WrappedTwoColsCtr>
  )
}

export default PracticalInputs
