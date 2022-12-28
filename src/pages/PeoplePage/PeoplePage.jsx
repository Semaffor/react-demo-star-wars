import React, { useState } from 'react'
import { useEffect } from 'react';

import peopleService from '../../API/PeopleService';
import { getPeopleId, getPeopleImageUrl } from '../../utils/getPeopleData';

import PeopleItem from '../../components/PeopleList/PeopleList';
import Loader from '../../components/Loader/Loader';

const PeoplePage = () => {

  const [people, setPeople] = useState();

  const getPeople = async () => {
    const data = await peopleService.getPeople()
    setPeople(
      data.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const imgUrl = getPeopleImageUrl(id)
        return { id, name, imgUrl }
      }));
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

export default PeoplePage;

