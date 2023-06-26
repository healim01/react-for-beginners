import React from 'react';
import { useState, useEffect } from "react";
import styles from "./Home.module.css";


function Home() {
  console.log(process.env.PUBLIC_URL);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const json = await (
      await fetch('https://reqres.in/api/users')
    ).json();
    console.log(json.data);
    setUsers(json.data);
    setLoading(false);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.App}>  
      <header>
          <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
          <h1>Like a Lion</h1>
      </header> 
      <div className={styles.container}>
        {loading ? <h1>loading</h1> : <div className={styles.grid}>
        {users.map((user) => (
          <a key={user.id} className={styles.card} href={`mailto:${user.email}`} >
            <img className={styles.img} src={user.avatar}/>
            <h2>{user.first_name} {user.last_name}</h2>
            <span> 
                <img className={styles.emailImg} src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png'/>
                {user.email} 
            </span>
          </a>
        ))}
      </div>}
      </div>
    </div>
  );
}

export default Home;
