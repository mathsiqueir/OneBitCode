import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(
    () => {
      console.log("o efeito colateral foi ativado");
      return ()=>{
        console.log('fazendo a limpeza')
        console.log('componente desmontado')
      }
    }, //valores que serão observados e ativaram o useEffect
    []
  );
  return (
    <>
      <button onClick={() => setCounter((count) => count + 1)}>
        Contador: {counter}
      </button>
    </>
  );
}

function App() {
  const [show,setshow]= useState(false)
  return (
    <div>
      <h1>conhecendo o useEffect</h1>
      <div>
        <input type="checkbox" id="show" value={show} onChange={()=> setshow(show => !show)} />
        <label htmlFor="show">exibir</label>
      </div>
      {
        show ? <Counter /> : null 
      }
      
      <hr />
      
    </div>
  );
}

export default App;
