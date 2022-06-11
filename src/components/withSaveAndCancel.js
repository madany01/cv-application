function withSaveAndCancel(
  WrappedComponent,
  { onCancelPropName = 'onCancelClick', onSavePropName = 'onSaveClick' } = {}
) {
  return function WithSaveAndCancel({
    [onCancelPropName]: onCancel,
    [onSavePropName]: onSave,
    ...restProps
  }) {
    return (
      <div className="flexCol gap--md">
        <WrappedComponent {...restProps} />

        <div className="flexRow justifyContent--end gap--md">
          <button type="button" onClick={onCancel} className="btn btn--cancel">
            cancel
          </button>

          <button type="button" onClick={onSave} className="btn btn--save">
            save
          </button>
        </div>
      </div>
    )
  }
}

export default withSaveAndCancel
