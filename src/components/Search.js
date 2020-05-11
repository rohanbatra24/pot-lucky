import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  // Dynamically update list of recipes based on user's search input
  useEffect(() => {
    // searchText && axios.get(`https://api.spoonacular.com/recipes/search?query=${searchText}&number=5&apiKey=4ed5da45f1c94518a9663b95f895c3b3`)
    //   .then(res => props.setRecipeList(res.data.results))
    //   .catch(err => console.error(err))

    searchText && axios.get(`https://api.spoonacular.com/recipes/search?query=${searchText}&number=5&apiKey=7a707a8f3c6b42ffb52bccfa111f4a00`)
    .then(res => res.data.results.map(item => item.id ))
    .then(ids => {
      console.log("ids --->", ids)
      console.log("join ids ---> ", ids.join('%2C'))
      ids && axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=${ids.join(',')}&apiKey=7a707a8f3c6b42ffb52bccfa111f4a00`)})
    .then(res => {
      console.log("RESULTS===> ", res.data)
      props.setRecipeList(res.data.results)
    })
    .catch(err => console.error(err))
  }, [searchText]);

  return (
    <div>
      Search:
      <form class="search">
        <input
          placeholder='input search'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}>
        </input>
      </form>
    </div>
  );
}