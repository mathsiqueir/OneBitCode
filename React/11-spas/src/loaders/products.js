import products from "../database.json";

export default function loadProduct({params}){
  const {productId} = params

  const product = products.find(product => product.id === +productId)

  if(!product){
    throw new Response("404 Not found", {status:404})
  }
  return product
}