import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/search?query=${searchText}&number=5&apiKey=4ed5da45f1c94518a9663b95f895c3b3`)
      .then(res => props.setRecipeList(res.data.results))
      .catch(err => console.error(err))
  }, [searchText]);

  return (
    <div>
      Search:
      <form>
        <input
          placeholder='input search'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}>
        </input>
      </form>
    </div>
  );
}