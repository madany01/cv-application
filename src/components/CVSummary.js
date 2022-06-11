import { useState } from 'react'
import HorizontalSeparator from './HorizontalSeparator'
import DynamicList from './DynamicList'

import withEdit from './withEdit'
import withSaveAndCancel from './withSaveAndCancel'

import PersonalSummary from './PersonalSummary'
import EducationalSummary from './EducationalSummary'
import PracticalSummary from './PracticalSummary'

import PersonalInputs from './PersonalInputs'
import EducationalInputs from './EducationalInputs'
import PracticalInputs from './PracticalInputs'

import {
  createEmptyEducationalData,
  createEmptyPracticalData,
  createBoundedFunctions,
} from '../utils'

const PersonalSummaryWithEdit = withEdit(PersonalSummary)
const EducationalSummaryWithEdit = withEdit(EducationalSummary)
const PracticalSummaryWithEdit = withEdit(PracticalSummary)

const PersonalInputsWithSaveCancel = withSaveAndCancel(PersonalInputs)
const DynamicListWithSaveCancel = withSaveAndCancel(DynamicList)

const INFO_TYPES = ['personal', 'educational', 'practical']

function CVSummary({ cvData, onChange: propsOnChange }) {
  const [dirtyPersonal, setDirtyPersonal] = useState(null)
  const [dirtyEducational, setDirtyEducational] = useState(null)
  const [dirtyPractical, setDirtyPractical] = useState(null)

  const infoTypeDict = {
    personal: { value: dirtyPersonal, set: value => setDirtyPersonal(value) },
    educational: { value: dirtyEducational, set: value => setDirtyEducational(value) },
    practical: { value: dirtyPractical, set: value => setDirtyPractical(value) },
  }

  const onEditClick = infoType => {
    infoTypeDict[infoType].set(cvData[infoType])
  }

  const onChange = (infoType, changedValues) => {
    infoTypeDict[infoType].set(changedValues)
  }

  const onCancel = infoType => {
    infoTypeDict[infoType].set(null)
  }

  const onSave = infoType => {
    const infoTypeValues = infoTypeDict[infoType].value

    onCancel(infoType)
    propsOnChange(infoType, infoTypeValues)
  }

  const onPrint = () => {
    window.print()
  }

  const {
    personal: personalProps,
    educational: educationalProps,
    practical: practicalProps,
  } = cvData

  const noEditing = (dirtyPersonal ?? dirtyEducational ?? dirtyPractical) === null

  const onTypeEditClick = createBoundedFunctions(INFO_TYPES, onEditClick)
  const onTypeChange = createBoundedFunctions(INFO_TYPES, onChange)
  const onTypeCancel = createBoundedFunctions(INFO_TYPES, onCancel)
  const onTypeSave = createBoundedFunctions(INFO_TYPES, onSave)

  return (
    <div className="flexCol gap--sm">
      <HorizontalSeparator>
        {dirtyPersonal ? (
          <PersonalInputsWithSaveCancel
            values={dirtyPersonal}
            onChange={onTypeChange.personal}
            onCancelClick={onTypeCancel.personal}
            onSaveClick={onTypeSave.personal}
          />
        ) : (
          <PersonalSummaryWithEdit values={personalProps} onEditClick={onTypeEditClick.personal} />
        )}

        {dirtyEducational ? (
          <DynamicListWithSaveCancel
            listTitle="educational info"
            valuesList={dirtyEducational}
            ListItemComponent={EducationalInputs}
            createNewListItem={createEmptyEducationalData}
            onChange={onTypeChange.educational}
            onCancelClick={onTypeCancel.educational}
            onSaveClick={onTypeSave.educational}
          />
        ) : (
          <EducationalSummaryWithEdit
            valuesList={educationalProps}
            onEditClick={onTypeEditClick.educational}
          />
        )}

        {dirtyPractical ? (
          <DynamicListWithSaveCancel
            listTitle="practical info"
            valuesList={dirtyPractical}
            ListItemComponent={PracticalInputs}
            createNewListItem={createEmptyPracticalData}
            onChange={onTypeChange.practical}
            onCancelClick={onTypeCancel.practical}
            onSaveClick={onTypeSave.practical}
          />
        ) : (
          <PracticalSummaryWithEdit
            valuesList={practicalProps}
            onEditClick={onTypeEditClick.practical}
          />
        )}

        {noEditing && (
          <button type="button" className="btn btn--print" onClick={onPrint}>
            Print to PDF
          </button>
        )}
      </HorizontalSeparator>
    </div>
  )
}

export default CVSummary
