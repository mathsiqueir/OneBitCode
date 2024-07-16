import Title from "./views/Title";
import Sum from "./views/Soma";
import Status from "./views/Status";
import styles from "./app.module.css"


export default function App() {

  return (
    <div className={styles.app} >
      <Title/>
      <Sum a={1} b={1}/>
      <Status/>
    </div>
  );
}
