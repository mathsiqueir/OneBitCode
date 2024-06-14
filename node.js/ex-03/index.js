const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

//chama para um diretorio ainda não existente
const notesDirectory = path.join(__dirname, "notes");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//inicializar o diretorio de ações
function initializeNotesDirectory() {
  //verificar se o diretorio existe
  if (!fs.existsSync(notesDirectory)) {
    fs.mkdirSync(notesDirectory);
  }
}

function listNotes() {
  const notes = fs.readdirSync(notesDirectory, "utf-8");

  if (notes.length === 0) {
    console.log("número inválido");
    setTimeout(() => {
      console.clear();
      return main();
    }, 1000);
  }
  console.log("notas Salvas");
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note}\n`);
  });
}

function readNote() {
  listNotes();
  rl.question("digite o número da nota que deseja ler: ", (index) => {
    const notes = fs.readdirSync(notesDirectory, "utf-8");
    const selectedNote = notes[index - 1];

    if (!selectedNote) {
      console.log("número inválido");
      setTimeout(() => {
        console.clear();
        return main();
      }, 1000);
    }

    const notePath = path.join(notesDirectory, selectedNote);

    const content = fs.readFileSync(notePath, "utf-8");
    console.log(content)
  });
}

function createNote() {
  rl.question("Digite o nome da nota: ", (noteName) => {
    const notePath = path.join(notesDirectory, noteName);
    rl.question("Digite o conteudo da nota: \n", (content) => {
      fs.writeFileSync(notePath + ".txt", content, "utf-8");
      console.log(`nota ${noteName} foi criada com sucesso`);

      
    });
  });
}

function deleteNote() {
  listNotes();
  rl.question("digite o número da nota que deseja excluir", (index) => {
    const notes = fs.readdirSync(notesDirectory)
    const selectedNote = notes[index-1]

    if(!selectedNote){
      console.log('número da nota inválido')
    }else{
      const notePath = path.join(notesDirectory,selectedNote)
      fs.unlinkSync(notePath)
      console.log(`Nota ${selectedNote} excluída com sucesso`)
    }
  });
}

function askForNextAction() {
  rl.question("deseja realizar outra ação? (s/n)", (answer) => {
    if (answer.trim().toLowerCase() === 's') {
      console.log('realizando outra ação')
      main();
    } else {
      console.log("encerrando!");
      rl.close();
      process.exit(0);
    }
  });
}
function main() {
  initializeNotesDirectory();
  console.clear();
  console.log("-----------------------------------");
  console.log("notas rápidas no terminal");
  console.log("-----------------------------------");

  console.log("escolha uma opção");
  console.log(`
    1 - listar notas
    2 - ler uma nota
    3 - criar uma nova nota
    4 - excluir uma nota
    5 - sair    
    `);

  rl.question("digite a opção: ", (option) => {
    switch (option) {
      case "1":
        listNotes();
        askForNextAction()
        break;
      case "2":
        readNote();
        askForNextAction()
        break;
      case "3":
        createNote();
        askForNextAction()
        break;
      case "4":
        deleteNote()
        askForNextAction()
        break;
        break;
      case "5":
        console.log("saindo...");
        rl.close();
        process.exit(0);
      default:
        console.log("opção inválida");
        break;
    }
  });
}

main();
