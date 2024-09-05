import { useRef, useState } from "react";
import RefExample from "./refExample";

export default function App() {
  let variable = 0;
  const [state, setState] = useState(0);

  //
  const ref = useRef(0);

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `);
  };
  return (
    <div>
      <h2>exemplo de useRef com o dom</h2>
      <RefExample/>
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>variavel: {variable}</p>
      <p>ref: {ref.current}</p>
      <p>state: {state}</p>
      <button onClick={()=> variable++}
      >Aumentar var</button>
      <button onClick={()=> ref.current++}
      >Aumentar ref</button>
      <button onClick={()=> setState(state => state + 1)}
      >Aumentar state</button>
      <hr />
      <button onClick={showValues}>exibir valores</button>
      <br />
    </div>
  );
}
