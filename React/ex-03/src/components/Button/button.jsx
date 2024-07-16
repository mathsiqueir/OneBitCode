import styles from "./button.module.css";

export default function Button(props) {
  return (
    <a className={styles.wrapper} 
    href={props.href} 
    target="_blank"
    >
      {props.children}
    </a>
  );
}
