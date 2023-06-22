import React from 'react';
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Home() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const json = await (
      await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=4133c3dc77204fdcb8fe7eb7912cb1a8")
    ).json();
    setArticles(json.articles);
    setLoading(false);
  }
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className={styles.App}>    
      <header>
          <img className={styles.logo} src="https://static.vecteezy.com/system/resources/previews/009/344/657/original/sun-transparent-background-free-png.png"/>
          <h1>Sun Rise News</h1>
      </header> 
      <div>
        {loading ? <h1>loading</h1> : <div className={styles.grid}>
        {articles.map((article, index) => (
          <div key={index} className={styles.card}>
            <Link to={`/article/${index}`} state={{ article }}>
                <div className={styles.imgContent}>
                  {article.urlToImage ? 
                    <img className={styles.img} src={article.urlToImage} alt={article.title}/> : 
                    <img className={styles.img} src="https://tutorialslink.com/images/default-news-image.png" alt="default"/>
                  }
                </div>
            </Link>
            <div className={styles.content}> 
              <h3> {article.title} </h3>
              <span> {article.description} </span>
              <div className={styles.published}> {article.publishedAt} </div>
            </div>
          </div>
        ))}
      </div>}
      </div>
    </div>
  );
}

export default Home;