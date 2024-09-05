import { useState } from "react";
import "./App.css";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [commets, setComments] = useState([])



  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 10000),
      author: author,
      content: content,
      createdAt: new Date()
    };

    console.log(newComment)
    setComments((state)=> [newComment,...state])
    setAuthor('')
    setContent('')
  };
  return (
    <div id="app">
      <h2>Seção de comentários</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={author}
            onChange={(ev) => setAuthor(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Comentário</label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="6"
            value={content}
            onChange={(ev) => setContent(ev.target.value)}
          ></textarea>
        </div>
        <button type="submit">Enviar Comentário</button>
      </form>
      <hr />
      <section id="comments">
        {commets.length > 0
         ?(
          commets.map((commets)=>(
            <div key={commets.id}>
              <h3>{commets.author}</h3>
              <span>Em {commets.createdAt.toLocaleString()}</span>
              <p>{commets.content}</p>
            </div>
          ))
         ):(
          <p>Seja o primeiro a comentar</p>
        )}
      </section>
    </div>
  );
}

export default App;
