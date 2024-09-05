import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout principal, abaixo está o conteúdo princiapl dinâmico
          de cada rota.
        </p>
        <hr />
        {/* componente para colocar as rotas filhas */}
        <Outlet/>
      </main>
      <hr />
      <footer>
        <p>Feito com o React Router DOM</p>
      </footer>
    </>
  );
}
