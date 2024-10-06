import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getApiResource } from "@utils/network";
import { withErrorApi } from "@helpers/withErrorApi";
import { PEOPLE_API } from "@constants/api";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(PEOPLE_API);
  }, []);
  return <>{people && <PeopleList people={people} />}</>;
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
