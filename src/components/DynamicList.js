import TitledCtr from './TitledCtr'

function DynamicList({
  listTitle,
  valuesList,
  ListItemComponent,
  createNewListItem,
  onChange: parentOnChange,
}) {
  const onChange = itemNewValues => {
    parentOnChange(
      valuesList.map(values => (values.id !== itemNewValues.id ? values : itemNewValues))
    )
  }

  const onDelete = e => {
    const deletedId = e.target.dataset.id
    parentOnChange(valuesList.filter(({ id }) => id !== deletedId))
  }

  const onAdd = () => {
    parentOnChange([...valuesList, createNewListItem()])
  }

  const listItemsEls = valuesList.map(item => {
    return (
      <li key={item.id} className="flexCol gap--sm">
        <ListItemComponent values={item} onChange={onChange} />

        {valuesList.length > 1 && (
          <button type="button" data-id={item.id} onClick={onDelete} className="btn btn--delete">
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
        {Boolean(createNewListItem) && (
          <button onClick={onAdd} type="button" className="btn btn--add">
            add
          </button>
        )}
      </div>
    </TitledCtr>
  )
}

export default DynamicList
