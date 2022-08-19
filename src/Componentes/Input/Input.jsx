import React from 'react'

const Input = ({ setHabilitado }) => {

  const validaEstado = val => {
    if (val === '252525')
      setHabilitado(true)
    else
      setHabilitado(false)
  }

  return (
    <div>
      <div>
        <label>Nombre</label>
        <input type="text" name="nombre" ></input>
      </div>
      <div>
        <label>Clave</label>
        <input type="password" name="clave" onChange={(e) => validaEstado(e.target.value)} />
      </div>
    </div>
  );
}

export default Input