let playlists = [
  {
    id: 93726,
    name: "top world",
    tags: ["classic", "jazz"],
    musics: [
      {
        id: 98320,
        title: "teste 2",
        year: 2000,
        artist: "teste",
        album: "teste",
      },
    ],
  },
  {
    id: 74855,
    name: "top world",
    tags: ["classic", "jazz"],
    musics: [],
  },
];

function generateRandomID() {
  return Math.floor(Math.random() * 99999);
}
module.exports = {
  //GET  /playlists
  index: (req, res) => {
    return res.json(playlists);
  },

  //GET /playlists/:id
  show: (req, res) => {
    const { id } = req.params;

    const playlist = playlists.find((item) => item.id === +id);

    if (!playlist)
      return res.status(404).json({ message: "playlist not found!" });

    res.json(playlist);
  },
  //POST /playlists/
  save: (req, res) => {
    const { name, tags, musics } = req.body;

    if (typeof name !== "string") {
      return res.status(400).json({ message: "name must be a string!" });
    }

    if (!Array.isArray(tags)) {
      return res.status(400).json({ message: "tags must be an array!" });
    }

    const newPlaylist = {
      id: generateRandomID(),
      name: name,
      tags: tags,
      musics: musics ?? [],
    };
    playlists.push(newPlaylist);

    res.status(201).json(newPlaylist);
  },

  //PUT /playlists/:id
  update: (req, res) => {
    const { id } = req.params;
    const { name, tags } = req.body;

    const playlistIndex = playlists.findIndex((item) => item.id === +id);

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "playlist not found" });
    }

    if (typeof name === "string") {
      playlists[playlistIndex].name = name;
    }
    if (tags && Array.isArray(tags)) {
      playlists[playlistIndex].tags = tags;
    }
    res.status(200).json(playlists[playlistIndex]);
  },
  //DELETE /playlists/:id
  delete: (req, res) => {
    const { id } = req.params;

    const playlistIndex = playlists.findIndex((item) => item.id === +id);

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "playlist not found" });
    }

    const deletePlaylist = playlists.splice(playlistIndex, 1);
    res.json(deletePlaylist);
  },

  //POST /playlists/:id/musics
  addMusic: (req, res) => {
    const { title, year, artist, album } = req.body;

    const { id } = req.params;

    const playList = playlists.find((playlist) => playlist.id === +id);

    if (!playList) {
      return res.status(404).json({ message: "playlist not found!" });
    }

    if (
      typeof title !== "string" ||
      typeof year !== "number" ||
      typeof artist !== "string" ||
      typeof album !== "string"
    ) {
      return res.status(404).json({ message: "Invalid Fields!" });
    }
    const newMusic = {
      id: generateRandomID(),
      title,
      year,
      artist,
      album,
    };

    playList.musics.push(newMusic);
    res.status(201).json(newMusic);
  },
  //DELETE /playlists/:playlistID/musics/:musicID
  removeMusic: (req, res) => {
    const { playlistId, musicId } = req.params;

    const playlist = playlists.find((pl) => pl.id === +playlistId);

    if (!playlist) {
      return res.status(404).json({ message: "playlist not found" }); // Adicionado return aqui
    }

    const musicIndex = playlist.musics.findIndex(
      (music) => music.id === +musicId
    );

    if (musicIndex === -1) {
      return res.status(404).json({ message: "music not found" }); // Adicionado return aqui
    }

    playlist.musics.splice(musicIndex, 1);

    res.status(204).end();
  },
};
