import React, { useEffect, useState } from 'react';
import { getCategories } from '../apis';


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
    <div>
      <h2>Categories</h2>
        {categories.map((category, index) => {
            const { slug, description } = category;
            return (
                <button className="category-button" key={index}>
                    <h3 className="category-slug">{slug}</h3>
                    <p className="category-description">{description}</p>
                </button>    
            )
        })}
     </div>
  );
};

export default Categories;