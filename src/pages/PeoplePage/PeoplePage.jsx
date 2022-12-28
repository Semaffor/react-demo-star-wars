//Libs
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

//HOC
import { withErrorApi } from '../../hoc/withErrorApi';
//Components
import PeopleItem from '../../components/PeopleList/PeopleItem';
import Loader from '../../components/Loader/Loader';
//Utils, services
import peopleService from '../../API/PeopleService';
import { getPeopleId, getPeopleImageUrl } from '../../utils/getPeopleData';
//Styles
import styles from './PeoplePage.module.css'


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

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);

