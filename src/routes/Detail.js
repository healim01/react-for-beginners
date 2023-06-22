// import React from 'react';
// import { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// function Detail() {
//   const { article } = useLocation().state;

//   return(
//      <div>
//       <div class="content">
//       <div>
//                 {article.urlToImage ? 
//                   <img  src={article.urlToImage} alt={article.title}/> : 
//                   <img  src="https://tutorialslink.com/images/default-news-image.png" alt="default"/>
//                 }
//               </div>
//         <h3> {article.title} </h3>
//         <span> {article.description} </span>
//         <div>{article.publishedAt}</div>
//       </div>
//      </div>
//   );
// }
// export default Detail;