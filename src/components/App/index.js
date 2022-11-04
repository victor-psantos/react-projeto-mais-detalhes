import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import RecipeDetailPage from '../pages/RecipeDetailPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
