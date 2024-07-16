import Card from './components/Card/index'
import swposterImg from './assets/starwarsPoster.jpg'
import esbposterImg from './assets/emprires-strikes-back.jpg'
import rotjposterImg from './assets/return-of-the-jedi.jpg'

function App(){
  return(
    <>
      <h1>Exercicio 2</h1>
      <Card title="Pôster: Star Wars (1977)" posterImg={swposterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" posterImg={esbposterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjposterImg} />
    </>
  )
}

export default App