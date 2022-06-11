import {
  createBoundedFunctions,
  createEmptyEducationalData,
  createEmptyPracticalData,
} from '../utils'

import HorizontalSeparator from './HorizontalSeparator'
import DynamicList from './DynamicList'
import PersonalInputs from './PersonalInputs'
import EducationalInputs from './EducationalInputs'
import PracticalInputs from './PracticalInputs'

function CVForm({ cvData, onChange, onSubmit: parentOnSubmit }) {
  const onSubmit = e => {
    e.preventDefault()
    parentOnSubmit()
  }

  const onTypeChange = createBoundedFunctions(['personal', 'practical', 'educational'], onChange)

  return (
    <form className="flexCol gap--lg" onSubmit={onSubmit} noValidate>
      <HorizontalSeparator>
        <div className="flexCol gap--lg">
          <HorizontalSeparator>
            <PersonalInputs values={cvData.personal} onChange={onTypeChange.personal} />

            <DynamicList
              listTitle="educational info"
              valuesList={cvData.educational}
              onChange={onTypeChange.educational}
              ListItemComponent={EducationalInputs}
              createNewListItem={createEmptyEducationalData}
            />

            <DynamicList
              listTitle="practical info"
              ListItemComponent={PracticalInputs}
              createNewListItem={createEmptyPracticalData}
              valuesList={cvData.practical}
              onChange={onTypeChange.practical}
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

export default CVForm
