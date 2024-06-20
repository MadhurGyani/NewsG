import React from 'react';
import Card from './Card';
import { nanoid } from 'nanoid';

function Cards({ articles=[] }) {

  console.log(articles)
  return (
    <div className='flex flex-wrap gap-2 mt-4 justify-evenly w-11/12 mx-auto'>
      {articles.map((article) => (
        <Card
          key={nanoid()}
          title={article.title}
          img={article.urlToImage} // Ensure the correct property name
          url={article.url} // Pass the correct url
          content={article.content}
          description={article.description}
        />
      ))}
              

    </div>
  );
}

export default Cards;
