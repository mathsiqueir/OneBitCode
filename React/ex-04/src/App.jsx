import { useState } from "react";
import Input from "./components/inputs";

function App() {
  const [password, setPassword] = useState(" ");
  const [copyText, setCopyText] = useState("Copiar!");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(true);
  function generate() {
    const characters =
      "1234567890-!@#$&*_+qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇ^ZXCVBNM";
    let newPassword = "";

    for (let i = 0; i < customSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("copiado!");
  }
  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar Tamanho:</label>
        <input 
        type="checkbox" 
        id="showInput" 
        value={showInput}
        //alterna entre verdadeiro e falso
        onChange={()=>setShowInput(currentSate => !currentSate)}
        />
      </div>
      {showInput?(
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input
          passwordSize={customSize}
          setPassawordSize={setCustomSize}
        />
      </div>
     ) : null}


      <button onClick={generate}>
        Gerar senha de {customSize} caracteres
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
