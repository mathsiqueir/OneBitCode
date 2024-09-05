import { Outlet, Link } from "react-router-dom";

export default function RootLayout(){

  return(
    <>
    <header>
      <Link to="/" className="logo"> REACT STOCK</Link>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/items">Items</Link>
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      FEITO COM REACT E REACT-ROUTER
    </footer>
    </>
  )
}