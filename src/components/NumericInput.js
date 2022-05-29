import React from 'react'

const numericRegex = /^\d+$/

class NumericInput extends React.Component {
  onChange = e => {
    const { value } = e.target

    if (value !== '' && !numericRegex.test(value)) {
      e.stopPropagation()
      return
    }

    const { onChange: parentOnChange } = this.props

    if (parentOnChange) parentOnChange(e)
  }

  render() {
    const { pattern, value = '', ...restProps } = this.props
    return (
      <input
        type="text"
        inputMode="numeric"
        value={value}
        {...restProps}
        pattern={pattern}
        onChange={this.onChange}
      />
    )
  }
}

export default NumericInput
