import styles from './styles.module.css'

export default function IndexSection(props){
  return (
    <div 
    //utlizar todas a props direto na div
   {...props}
    className={`${styles.wrapper} ${props.className}`}>
      {props.children}
    </div>
  )
}