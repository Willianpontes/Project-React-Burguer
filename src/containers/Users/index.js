import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, H1, Image, ContainerItens, User, ContainerSmall } from "./styles";
import Button from "../../components";

import Burguer2 from "../../assests/burger2.svg"
import Trash from "../../assests/trash.svg"

function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)

    }

    fetchUsers()

  }, [])


  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid}`)

    const newOrder = users.filter(user => user.id !== userid)
    setUsers(newOrder)

  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Image alt="image-principal" src={Burguer2} />
      <ContainerItens>
        <H1> Pedidos </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <ContainerSmall> <p className="pOrder" >{user.order}</p> <p className="pName" >{user.name}</p> </ContainerSmall>
              <button onClick={() => deleteUser(user.id)} > <img src={Trash} alt="lixo" /> </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>Voltar</Button>

      </ContainerItens>
    </Container>
  )
}

export default Users