
import Button from "../../button"
import styles from './styles.module.css'
export default function Card(props){
  return(
    <div className={styles.container}>
      <img src={props.posterImg} alt={props.title} className={styles.poster} />
      <div>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iste minima consequuntur enim quas vel ea cumque aut iusto, reiciendis iure blanditiis nesciunt expedita fuga quia accusamus at nisi! Dolores placeat ipsa eius modi quibusdam, laborum laudantium mollitia deleniti quos, rem cupiditate ut ab aut eaque! Reprehenderit, cum! Temporibus, quisquam.</p>
        <Button/>
      </div>
    </div>
  )
}