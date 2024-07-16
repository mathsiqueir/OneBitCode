function sum(a,b){
  return a + b
}

export default function App() {
  const tech = "React"
  const status = false

  return(
    <div className="app">
      <h1>{tech} is Awesome</h1>
      <h2>it is easy, like 1 + 1 is {sum(1,1)} </h2>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
      <p>{status && "Text"} </p>
    </div>
  )
}
