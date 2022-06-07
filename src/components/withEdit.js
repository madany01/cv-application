import React from 'react'

function withEdit(WrappedComponent, { onClickPropName = 'onEditClick' } = {}) {
  class WithEdit extends React.Component {
    render() {
      const { [onClickPropName]: onClick, ...restProps } = this.props

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
  return WithEdit
}

export default withEdit
