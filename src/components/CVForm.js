import React from 'react'

import { createEmptyEducationalData, createEmptyPracticalData } from '../utils'

import HorizontalSeparator from './HorizontalSeparator'
import DynamicList from './DynamicList'
import PersonalInputs from './PersonalInputs'
import EducationalInputs from './EducationalInputs'
import PracticalInputs from './PracticalInputs'

class CVForm extends React.Component {
  onTypeChange = {
    onPersonalChange: (...args) => this.onChange('personal', ...args),
    onEducationalChange: (...args) => this.onChange('educational', ...args),
    onPracticalChange: (...args) => this.onChange('practical', ...args),
  }

  onChange = (infoType, changedValues) => {
    const { cvData, onChange } = this.props

    onChange({
      ...cvData,
      [infoType]: changedValues,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { onSubmit } = this.props
    onSubmit()
  }

  render() {
    const { onPersonalChange, onEducationalChange, onPracticalChange } = this.onTypeChange

    const { personal, educational, practical } = this.props.cvData

    return (
      <form className="flexCol gap--lg" onSubmit={this.onSubmit} noValidate>
        <HorizontalSeparator>
          <div className="flexCol gap--lg">
            <HorizontalSeparator>
              <PersonalInputs values={personal} onChange={onPersonalChange} />

              <DynamicList
                listTitle="educational info"
                valuesList={educational}
                onChange={onEducationalChange}
                ListItemComponent={EducationalInputs}
                createNewListItem={createEmptyEducationalData}
              />

              <DynamicList
                listTitle="practical info"
                ListItemComponent={PracticalInputs}
                createNewListItem={createEmptyPracticalData}
                valuesList={practical}
                onChange={onPracticalChange}
              />
            </HorizontalSeparator>
          </div>

          <button type="submit" className="btn btn--submit">
            submit
          </button>
        </HorizontalSeparator>
      </form>
    )
  }
}

export default CVForm
