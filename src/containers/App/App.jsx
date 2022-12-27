import styles from './App.module.css';
import peopleService from "../../API/PeopleService.js"


const App = () => {
  (async () => {
    const data = await peopleService.getPeople();
    console.log(data);
  })()

  return (
   <div>
   
   <h1 className={styles.header}>Lol</h1>
   </div>
  );
}

export default App;
