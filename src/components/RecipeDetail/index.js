export default function RecipeDetail(props) {
    const { title, ingredients, time, steps } = props;
  
    function HandleIngredients(){
        return ingredients.map(ingredient => {            
            return (
                <li>{ingredient}</li>
      
            )
          })
    }

    function HandleSteps(){
        return steps.map(step => {            
            return (
                <li>{step}</li>
      
            )
          })
    }

    return (
      <div className="RecipeDetail">
        <div className="recipe">          
          <h1>{title}</h1>
          <p>Tempo de cozimento: {time} minutos</p>
          <p>Ingredientes:</p>    
          <div>{HandleIngredients()}</div>
          <p>Passo a Passo:</p>
          <div>{HandleSteps()}</div>
        </div>
      </div>
    )
  }