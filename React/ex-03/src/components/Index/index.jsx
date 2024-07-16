/* eslint-disable react/prop-types */
import { useState } from "react";
import Title from "../../Title";
import Button from "../Button/button";
import styles from "./index.module.css";
import IndexSection from "./IndexSection/";

export default function Index(props) {
  //useState [valor, fnModificadora]
  const [followText,setFolowText] = useState("Follow")
  //precisamos trabalhar com state para 
  function handleClick() {
    alert("você está seguindo");
    setFolowText("Following")
  }

  return (
    <div className={styles.container}>
      <img src={props.avatar} alt={props.name} className={styles.avatar} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          {followText}
        </button>
      </Title>
      <IndexSection> {props.bio} </IndexSection>
      <IndexSection> {props.phone} </IndexSection>
      <IndexSection> {props.email} </IndexSection>

      <IndexSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <Button href={props.githubURL} target="_blank">
          Github{" "}
        </Button>
        <Button href={props.linkedinURL} target="_blank">
          LinkedIn{" "}
        </Button>
        <Button href={props.instagramURL} target="_blank">
          Instagram{" "}
        </Button>
      </IndexSection>
    </div>
  );
}