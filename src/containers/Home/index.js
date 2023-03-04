import React, { useState, useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, H1, Image, ContainerItens, InputLabel, Input,} from "./styles";
import Button from "../../components";

import Burguer1 from "../../assests/burger1.svg"

function App() {
  const [users, setUsers] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()
  const navigate = useNavigate()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      order: inputOrder.current.value,
      name: inputName.current.value,
    })

    setUsers([...users, newUser])
    
    navigate("/usuarios")

  }

  return (
    <Container>
      <Image alt="image-principal" src={Burguer1} />
      <ContainerItens>
        <H1> Faça seu pedido! </H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido" />

        <InputLabel >Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome do Cliente" />

        <Button onClick={addNewUser}>Novo Pedido</Button>

      </ContainerItens>
    </Container>
  )
}

export default App