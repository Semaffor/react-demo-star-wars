import styles from './PeopleList.module.css'

const PeopleItem = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, imgUrl }) => {
        return <li
          className={styles.list__item}
          key={id}
        >
          <a href={'#'}>
            <img
              className={styles.person__photo}
              src={imgUrl}
              alt='avatar'
            />

            <p>{name}</p>
          </a>
        </li>
      })
      }
    </ul>
  );
}

export default PeopleItem;