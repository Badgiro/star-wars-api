import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const PeopleNavigation = ({ prevPage, nextPage, getResource, counterPage }) => {
  const toPreviousPage = () => getResource(prevPage);
 

  const toNextPage = () => getResource(nextPage);
  ;
  return (
    <>
      <Link to={`/people/?page=${counterPage - 1}`}>
        <button
        disabled={!prevPage}
        onClick={toPreviousPage}>Previous</button>
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`}>
        <button
        disabled={!nextPage}
         onClick={toNextPage}>Next</button>
      </Link>
    </>
  );
};
PeopleNavigation.propTypes = {
    prevPage:PropTypes.string,
    nextPage:PropTypes.string,
    getResource:PropTypes.func,
    counterPage:PropTypes.number

}

export default PeopleNavigation;
