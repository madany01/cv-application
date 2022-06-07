import React from 'react'

function withSaveAndCancel(
  WrappedComponent,
  { onCancelPropName = 'onCancelClick', onSavePropName = 'onSaveClick' } = {}
) {
  class WithSaveAndCancel extends React.Component {
    render() {
      const { [onCancelPropName]: onCancel, [onSavePropName]: onSave, ...restProps } = this.props

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

  return WithSaveAndCancel
}

export default withSaveAndCancel
