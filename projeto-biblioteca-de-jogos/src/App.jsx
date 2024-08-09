import { useState } from "react";
import Game from "./components/Game";
import NewGameForm from "./components/newGameForm";

export default function App() {
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

  

  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      {/* adicionar novos jogos */}
      <NewGameForm
      addGame={addGame}
      />

      <div className="games">
        {games.map((game) => (
          <Game
          key={game.id}
          title={game.title}
          alt={game.title}
          cover={game.cover}
          onRemove={()=> removeGame(game.id)}
          
          />
        ))}
      </div>
    </div>
  );
}
