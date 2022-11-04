import { useNavigate } from "react-router-dom";

function Recipe(props) {  
  const { id, item } = props;
  const navigate = useNavigate();

  function handleSelect() {
    navigate(`/recipe/${id}`);
  }

  return (
    <div className="Recipe">
      <li><a href="" onClick={handleSelect}>{item}</a></li>      
    </div>
  )
}

export default Recipe;