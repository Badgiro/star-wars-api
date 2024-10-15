import React from "react";
import styles from "./PeopleList.module.css";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const PeopleList = ({ people }) => {
  return (
  <>
  <h1 className="header__text ">People page</h1>
    <ul className={styles.container__list}>
      {people.map(({ name, img, id }) => {
        return (
          <li className={styles.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={styles.person__photo} src={img} alt={name} />
              <p>{name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
    </>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array
  
}
export default PeopleList;
