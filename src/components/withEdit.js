function withEdit(WrappedComponent, { onClickPropName = 'onEditClick' } = {}) {
  return function WithEdit({ [onClickPropName]: onClick, ...restProps }) {
    return (
      <div className="flexCol gap--md">
        <WrappedComponent {...restProps} />

        <button onClick={onClick} type="button" className="btn btn--edit">
          edit
        </button>
      </div>
    )
  }
}

export default withEdit
