import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import styles from './PeopleNavigation.module.css'
import UiButton from "@UI/UiButton";

const PeopleNavigation = ({ prevPage, nextPage, getResource, counterPage }) => {
  const toPreviousPage = () => getResource(prevPage);
 

  const toNextPage = () => getResource(nextPage);
  ;
  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
      <UiButton swapPage={toPreviousPage} disabled={!prevPage}>Previous</UiButton>
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
      <UiButton swapPage={toNextPage} disabled={!nextPage}>Next</UiButton>
      </Link>
    </div>
  );
};
PeopleNavigation.propTypes = {
    prevPage:PropTypes.string,
    nextPage:PropTypes.string,
    getResource:PropTypes.func,
    counterPage:PropTypes.number

}

export default PeopleNavigation;
