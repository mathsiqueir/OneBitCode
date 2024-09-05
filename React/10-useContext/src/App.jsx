import Container from "./Components/Container"
import UserContext from "./contexts/userContext"

export default function App(){
  const user ={
    name: "matheus",
    email: "matheus@gmail.com"
  }
  return(
    <UserContext.Provider value={user}>
      <h1>useContext</h1>
      <Container/>
    </UserContext.Provider>
  )
}