import React, { useEffect, useState } from 'react';
import { getCategories } from '../apis';
import "../CSS/Categories.css"

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (isLoading) {
    return <p>Loading Categories...</p>;
  }

  return (
    <div className='category-container'>
      <div className="background" />
      <h2 className='category-title'>Categories</h2>
        {categories.map((category, index) => {
            const { slug, description } = category;
            return (
              <div className='category'>
                <button className="category-button" key={index}>
                    <h3 className="category-slug">{slug}</h3>
                    <p className="category-description">{description}</p>
                </button>   
                </div> 
            )
        })}
     </div>
  );
};

export default Categories;