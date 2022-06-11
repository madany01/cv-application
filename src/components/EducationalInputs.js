import WrappedTwoColsCtr from './WrappedTwoColsCtr'

function EducationInputs({ values, onChange }) {
  function handleChange(event) {
    const { name, value } = event.target
    onChange({ ...values, [name]: value })
  }

  const { id, program, organization, fromDate, toDate, description } = values

  return (
    <WrappedTwoColsCtr>
      <div className="flexCol gap--xs">
        <label htmlFor={`${id}.program`}>program/degree</label>
        <input
          name="program"
          value={program}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          id={`${id}.description`}
          type="text"
          placeholder="achievements, projects, .."
        />
      </div>
    </WrappedTwoColsCtr>
  )
}

export default EducationInputs
