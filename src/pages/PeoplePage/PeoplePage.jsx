import React, { useState } from 'react'
import { useEffect } from 'react';

import peopleService from '../../API/PeopleService';
import { getPeopleId, getPeopleImageUrl } from '../../utils/getPeopleData';

import PeopleItem from '../../components/PeopleList/PeopleItem';
import Loader from '../../components/Loader/Loader';
import { withErrorApi } from '../../hoc/withErrorApi';

const PeoplePage = ({ setErrorApi }) => {

  const [people, setPeople] = useState();

  const getPeople = async () => {
    const data = await peopleService.getPeople()

    if (data) {
      setPeople(
        data.results.map(({ name, url }) => {
          const id = getPeopleId(url)
          const imgUrl = getPeopleImageUrl(id)
          return { id, name, imgUrl }
        }));
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }

  };

  useEffect(() => {
    getPeople()
  }, []);

  return (
    <>
      {people
        ? <PeopleItem people={people} />
        : <Loader />
      }
    </>
  );
}

export default withErrorApi(PeoplePage);

