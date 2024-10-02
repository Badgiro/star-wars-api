import React from "react";
import styles from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.container__list}>
      {people.map(({ name, img, id }) => {
        return (
          <li className={styles.list__item} key={id}>
            <a href="#">
              <img className={styles.person__photo} src={img} alt={name} />
              <p>{name}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PeopleList;
