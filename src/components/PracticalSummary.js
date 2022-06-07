import React from 'react'

import TitledCtr from './TitledCtr'
import HorizontalSeparator from './HorizontalSeparator'
import CVSummaryItem from './CVSummaryItem'

function summaryObjToCVItem(summaryObj) {
  const { id, company, jobTitle, fromDate, toDate, description } = summaryObj
  return {
    id,
    title: jobTitle,
    organization: company,
    fromDate,
    toDate,
    description,
  }
}

class PracticalSummary extends React.Component {
  render() {
    const { valuesList } = this.props

    const valuesListEls = valuesList.map(values => (
      <li key={values.id}>
        <CVSummaryItem values={summaryObjToCVItem(values)} />
      </li>
    ))

    return (
      <TitledCtr title="practical experience">
        <ul className="flexCol gap--sm">
          <HorizontalSeparator>{valuesListEls}</HorizontalSeparator>
        </ul>
      </TitledCtr>
    )
  }
}

export default PracticalSummary
