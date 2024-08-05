import propTypes from 'prop-types'

Input.propTypes = {
  passwordSize: propTypes.number.isRequired,
  setPassawordSize: propTypes.func
}

export default function Input(props){

  return(
    
    <input type="number" id="passwordSize" min={4} 
    value={props.passwordSize}
    onChange={(ev)=> props.setPassawordSize(ev.target.value)}
    />
  )
}