import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Recipe from "../../Recipe"

export default function HomePage() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_BACKEND_URI}/menu`);
    promise.then(response => {
      setRecipes(response.data);
    })
    promise.catch((e) => console.log("Erro", e));
  }, []);

  function buildRecipes() {
    if (!recipes) return <h1>Carregando...</h1>
    return recipes.map(recipe => {
      //const url = `/recipe/${recipe.id}`;
      return (
        // <li><Link to={url}>{recipe.item}</Link></li>
        <Recipe 
            id={recipe.id}
            item={recipe.item}
        />

      )
    })
  }

  const recipesComponent = buildRecipes();
  return (
    <div className="HomePage">
      <h1>Receitinhas delícia 🍔🍟</h1>
      <ul>
        {recipesComponent}
      </ul>
    </div>
  )
}