import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getApiResource, changeHTTP } from "@utils/network";
import { withErrorApi } from "@helpers/withErrorApi";
import { PEOPLE_API } from "@constants/api";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";

import PeopleList from "@components/PeoplePage/PeopleList";
import useQueryParams from "@hooks/useQueryParams";
import { getPeoplePageId } from "@services/getPeopleData";
import PeopleNavigation from "../../components/PeopleNavigation";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);


  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          img,
          name,
          id,
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(PEOPLE_API + queryPage);
  },[]);

  return (
    <>
      <PeopleNavigation
        prevPage={prevPage}
        nextPage={nextPage}
        getResource={getResource}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
