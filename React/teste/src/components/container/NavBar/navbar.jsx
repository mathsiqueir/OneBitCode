import style from './style.module.css'
export default function Navbar(props){
  return(
    <header className={style.header}>
        <nav  className={style.nav}>
          <h2>{props.logo}</h2>
          <ul className={style.ul}>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">HISTORIA</a></li>
          </ul>
        </nav>
    </header>
  )
}