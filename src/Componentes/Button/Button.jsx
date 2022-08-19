import React from 'react'

const Button = ({ habilitado }) => {
  if (habilitado)
    return (
      <div>
        <button>Button</button>
      </div>
    )
  else
    return null
}
export default Button