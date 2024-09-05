import { useContext } from "react"
import UserContext from "../contexts/userContext"

export default function UserInfo(){
  const user = useContext(UserContext)
  return(
    <div>
      <h2>Informações do usuario</h2>
      <p>nome: {user.name}</p>
      <p>email: {user.email}</p>
    </div>
  )
}