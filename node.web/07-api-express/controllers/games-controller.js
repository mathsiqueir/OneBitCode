const games = [
  { id: 1, name: "Legend of Mana", genres: ["action-rpg"], year: 1999 },
  { id: 2, name: "World of Warcraft", genres: ["mmorpg"], year: 2004 },
  {
    id: 3,
    name: "Metal Gear Solid",
    genres: ["stealth", "action-adventure"],
    year: 1998,
  },
  { id: 4, name: "Sonic Adventure 2", genres: ["platformer"], year: 2001 },
  {
    id: 5,
    name: "Age of Empires 2",
    genres: ["real-time-strategy"],
    year: 1999,
  },
];

/*
UM PADRÃO REST 

ROTA PARA RETORNA DE TODOS OS ELEMENTOS
//GET/GAMES

ROTA PARA BUSCAR UM
//GET /GAMES/:ID

ROTA PARA CRITAR
//POST /GAMES

ROTA PARA MODIFICAR
//PUT /GAMES/:ID

ROTA PARA EXCLUIR
//DELETE /GAMES/:ID
*/
module.exports = {
  //GET/GAMES
  index: (req, res) => {
    res.json(games);
  },
  //GET /GAMES/:ID
  show: (req, res) => {
    const { id } = req.params;
    const game = games.find((game) => game.id === +id);
    if (!game) {
      res.status(404);
      res.json({ message: "game not found!" });
    } else {
      res.json(game);
    }
  },
  //POST /GAMES
  save: (req, res) => {
    const { name, genres, year } = req.body;
    const newGame = {
      id: Math.floor(Math.random() * 9999),
      name,
      genres,
      year,
    };
    games.push(newGame);
    res.status(201);
    res.json(newGame);
  },
  // PUT /GAMES/:ID
  update: (req, res) => {
    const { id } = req.params;
    const { name, year } = req.body;

    const gameIndex = games.findIndex((game) => game.id === +id);

    if (gameIndex === -1) {
      return res.status(404).json({ message: "game not found!" });
    }
    games[gameIndex].name = name;
    games[gameIndex].year = year;
    res.json(games[gameIndex]);
  },
  // DELETE /GAMES/:ID
  delete: (req,res)=>{
    const {id} = req.params

    const gameIndex = games.findIndex((game) => game.id === +id);

    if (gameIndex === -1) {
      return res.status(404).json({ message: "game not found!" });
    }

    games.splice(gameIndex,1)
    res.status(200).end()
  },
  //post /games/:id/genres
  addGenre: (req, res) => {
    //vai adicionar um genero
    //buscou o id nos params
    const { id } = req.params;
    //buscou o genre que adicionamos
    const { genre } = req.body;
    //vai descobrir qual selecionamos através do ID

    const gameIndex = games.findIndex((game) => game.id === +id);

    if (gameIndex === -1) {
      return res.status(404).json({ message: "game not found!" });
    }
    //se ele for diferente de string num formato errado
    //verificar se o genre já nao existe
    if (typeof genre !== "string" || games[gameIndex].genres.includes(genre)) {
      return res.status(400).json({ message: "Invalid genre!" });
    }
    games[gameIndex].genres.push(genre);
    res.json(games[gameIndex]);
  },
  //DELETE /games/:id/genres/:genre
  deleteGenre: (req,res)=>{
    const {id, genre} = req.params

    const gameIndex = games.findIndex((game) => game.id === +id);

    if (gameIndex === -1) {
      return res.status(404).json({ message: "game not found!" });
    }

    games[gameIndex].genres = games[gameIndex].genres.filter(genre => genre !==name)

    res.status(200).json(games[gameIndex])
  }
};
