export default function Status(){
  const status = true
  return(

    <h2 style={{
      color: '#e5e5e5'
    }} 
    >Current status: <span style={{
      color: status ? 'green': 'red'
    }}>{status ? "ON" : "OFF" }</span></h2>
  )
}