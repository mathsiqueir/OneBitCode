import { useRef } from "react"

export default function RefExample(){
  const inputRef = useRef(null)
  
  const handleClick = ()=>{
    console.log(inputRef.current)
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = "#f54312"
  }
  return(
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}> focar no input</button>
    </div>
  )
}
