import { useState } from "react";

export default function useGameCollection(){
  //para fazer os jogos serem exibidos assim que a pagina for aberta
  const [games, setGames] = useState(()=>{
    const storedGames = localStorage.getItem('obc-game-lib')
    if(!storedGames) return []
    return JSON.parse(storedGames)
  });
  

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 10000);
    const game = { id, title, cover };
    //separei todos os elementos do array com (...) e adiciona os elementos do novo array com game
    
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
    const newState = state.filter((game) => game.id !== id)
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    });
  };
  return {games, addGame,removeGame}
}