import products from "../database.json";
import {Link } from 'react-router-dom'

export default function Products() {
  return (
    <section>
      <h2>Todos os produtos</h2>
      <p>Confira todas as nossas ofertas</p>
      <section className="products">
        <ul>
          {products.map((product) => (
            <li key={product.id}>

              <h4>{product.name}</h4>
              <p>R$ {product.price}</p>

              <Link to={`/products/${product.id}`} ><button>Ver</button></Link>
              <button>Comprar</button>

            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
