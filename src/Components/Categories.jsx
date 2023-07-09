import React, { useEffect, useState } from 'react';
import { getCategories } from '../apis';
import "../CSS/Categories.css";
import CategoryReviews from './CategoryReviews';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);

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

  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
    setIsCategoryClicked(true);
  };

  const handleGoBack = () => {
    setIsCategoryClicked(false);
    setSelectedCategory(null);
  };

  if (isLoading) {
    return <p className="Loading-page">Loading Categories...</p>;
  }

  return (
    <div className='category-container'>
      <div className="background" />
      {!isCategoryClicked && categories.map((category, index) => {
        const { slug, description } = category;
        return (
          <div className='category' key={index}>
            <button
              className="category-button"
              onClick={() => handleCategoryClick(slug)}
            >
              <h3 className="category-slug">{slug}</h3>
              <p className="category-description">{description}</p>
            </button>
          </div>
        );
      })}
      {isCategoryClicked && (
        <div>
          <button className="back-button" onClick={handleGoBack}>
            Return
          </button>
          <CategoryReviews category={selectedCategory} />
        </div>
      )}
    </div>
  );
};

export default Categories;
