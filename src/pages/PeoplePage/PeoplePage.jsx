import React, { useState } from 'react'
import peopleService from '../../API/PeopleService';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';

const PeoplePage = () => {

  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const data = await peopleService.getPeople();
    setPeople(
      data.results.map(({ name, url }) => {
        return { name, url }
      }));
  };

  useEffect(() => {
    getPeople()
  }, []);

  return (
    <>
      {people
        ? people.map(({ name, url }) => {
          return <li
            key={name}
          >
            {name}
          </li>
        })
        : <Loader />
      }
    </>
  );
}

export default PeoplePage;

