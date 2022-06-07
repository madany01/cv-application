import React from 'react'

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

class CVSummary extends React.Component {
  state = {
    editables: {},
  }

  constructor(props) {
    super(props)

    this.onTypeChange = createBoundedFunctions(INFO_TYPES, this.onChange)
    this.onTypeEditClick = createBoundedFunctions(INFO_TYPES, this.onEditClick)
    this.onTypeCancel = createBoundedFunctions(INFO_TYPES, this.onCancel)
    this.onTypeSave = createBoundedFunctions(INFO_TYPES, this.onSave)
  }

  onEditClick = infoType => {
    const {
      cvData: { [infoType]: infoTypeValues },
    } = this.props

    this.setState(prevState => ({
      editables: { ...prevState.editables, [infoType]: infoTypeValues },
    }))
  }

  onChange = (infoType, changedValues) => {
    const {
      editables: { [infoType]: infoTypeValues },
    } = this.state

    this.setState(prevState => {
      if (infoType === 'personal')
        return {
          editables: { ...prevState.editables, [infoType]: { ...infoTypeValues, ...changedValues } },
        }

      return {
        editables: { ...prevState.editables, [infoType]: changedValues },
      }
    })
  }

  onCancel = infoType => {
    this.setState(prevState => {
      const {
        editables: { [infoType]: _, ...restEditables },
      } = prevState

      return { editables: restEditables }
    })
  }

  onSave = infoType => {
    const { onChange, cvData } = this.props

    const {
      editables: { [infoType]: infoTypeValues },
    } = this.state

    this.onCancel(infoType)

    onChange({ ...cvData, [infoType]: infoTypeValues })
  }

  static onPrint() {
    window.print()
  }

  render() {
    const {
      cvData: { personal: personalProps, educational: educationalProps, practical: practicalProps },
    } = this.props

    const {
      editables: {
        personal: dirtyPersonal,
        educational: dirtyEducational,
        practical: dirtyPractical,
      },
    } = this.state

    const noEditing = Object.keys(this.state.editables).length === 0

    return (
      <div className="flexCol gap--sm">
        <HorizontalSeparator>
          {dirtyPersonal ? (
            <PersonalInputsWithSaveCancel
              values={dirtyPersonal}
              onChange={this.onTypeChange.personal}
              onCancelClick={this.onTypeCancel.personal}
              onSaveClick={this.onTypeSave.personal}
            />
          ) : (
            <PersonalSummaryWithEdit
              values={personalProps}
              onEditClick={this.onTypeEditClick.personal}
            />
          )}

          {dirtyEducational ? (
            <DynamicListWithSaveCancel
              listTitle="educational info"
              valuesList={dirtyEducational}
              ListItemComponent={EducationalInputs}
              createNewListItem={createEmptyEducationalData}
              onChange={this.onTypeChange.educational}
              onCancelClick={this.onTypeCancel.educational}
              onSaveClick={this.onTypeSave.educational}
            />
          ) : (
            <EducationalSummaryWithEdit
              valuesList={educationalProps}
              onEditClick={this.onTypeEditClick.educational}
            />
          )}

          {dirtyPractical ? (
            <DynamicListWithSaveCancel
              listTitle="practical info"
              valuesList={dirtyPractical}
              ListItemComponent={PracticalInputs}
              createNewListItem={createEmptyPracticalData}
              onChange={this.onTypeChange.practical}
              onCancelClick={this.onTypeCancel.practical}
              onSaveClick={this.onTypeSave.practical}
            />
          ) : (
            <PracticalSummaryWithEdit
              valuesList={practicalProps}
              onEditClick={this.onTypeEditClick.practical}
            />
          )}

          {noEditing && (
            <button type="button" className="btn btn--print" onClick={this.constructor.onPrint}>
              Print to PDF
            </button>
          )}
        </HorizontalSeparator>
      </div>
    )
  }
}

export default CVSummary
