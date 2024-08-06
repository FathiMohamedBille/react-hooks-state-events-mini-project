import React from 'react';

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="categories">
      {categories.map(category => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;