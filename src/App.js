import React, { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  border:5;
  text-align:center;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color:#00b4d8;
  color:#03045e;
  width:500px;
  border-radius:15px;
  margin:auto;
  box-shadow: 5px 10px 20px #888888;
  padding-bottom:40px;
`

const Input = styled.input`
  width:400px;
  heigth:50px;
  font-size: 16px;
  padding: 10px;
  border: 0.2px solid black;
  display:block;
  margin: 8px;
  background-color:#caf0f8;
`
const App = () => {

  const [valor, setValor] = useState()
  const [gorjeta, setGorjeta] = useState()

  const calcular = () => {
    return parseFloat((gorjeta / 100) * valor)
  }

  const total = () => { //parseFloat(calcular() + valor) RodrigoFSilvaDEV
    return parseFloat(parseInt(valor) + calcular())
  }

  return (
    <Div>
      <h1>Calculadora de Gorjeta</h1>
      <Input type="number" placeholder="Quanto deu a conta?"
        onChange={(e) => setValor(e.target.value)} />

      <Input type="number" placeholder="Qual a porcentagem da gorjeta?"
        onChange={(e) => setGorjeta(e.target.value)} />

      {gorjeta ?
        <div>
          <p>Subtotal R$:{valor}</p>
          <p>Gorjeta R$:{gorjeta ? calcular() : ''}</p>
          <h2>Total: {valor && gorjeta ? total() : ''}</h2>
        </div>
        : ''
      }
    </Div>
  )
}

export default App;