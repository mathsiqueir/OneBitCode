import { useState } from "react";

function getInitialValue(){
  console.log('Obtendo o valor inicial')
  return 1+1
}

export default function useCounter() {
  //transformou a função em um callback, 
  const [count, setCount] = useState(() => getInitialValue());

  const increment = () => {
    //o react executa o useState de forma assincrona ele assimila as funções e executa apenas uma vez
    setCount((currentState)=> currentState + 1);
    setCount((currentState)=> currentState + 1);
  };
  return {count, increment}
}
