import React from 'react'

import TitledCtr from './TitledCtr'

class DynamicList extends React.Component {
  onChange = itemNewValues => {
    const { valuesList, onChange } = this.props

    onChange(valuesList.map(values => (values.id !== itemNewValues.id ? values : itemNewValues)))
  }

  onDelete = e => {
    const deletedId = e.target.dataset.id
    const { valuesList, onChange } = this.props
    onChange(valuesList.filter(({ id }) => id !== deletedId))
  }

  onAdd = () => {
    const { valuesList, createNewListItem, onChange } = this.props
    onChange([...valuesList, createNewListItem()])
  }

  render() {
    const { listTitle, valuesList, ListItemComponent, createNewListItem } = this.props
    const supportAdd = Boolean(createNewListItem)

    const listItemsEls = valuesList.map(item => {
      return (
        <li key={item.id} className="flexCol gap--sm">
          <ListItemComponent values={item} onChange={this.onChange} />

          {valuesList.length > 1 && (
            <button
              type="button"
              data-id={item.id}
              onClick={this.onDelete}
              className="btn btn--delete"
            >
              delete
            </button>
          )}
        </li>
      )
    })

    return (
      <TitledCtr title={listTitle}>
        <div className="flexCol gap--md">
          <ul className="flexCol gap--md">{listItemsEls}</ul>
          {supportAdd && (
            <button onClick={this.onAdd} type="button" className="btn btn--add">
              add
            </button>
          )}
        </div>
      </TitledCtr>
    )
  }
}

export default DynamicList
