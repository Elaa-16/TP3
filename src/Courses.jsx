import { useState } from "react";

function Courses() {
  const [articles, setArticles] = useState([]);
  const [nouvelArticle, setNouvelArticle] = useState("");

  function ajouterArticle() {
    if (nouvelArticle.trim() !== "") {
      setArticles([...articles, nouvelArticle]);
      setNouvelArticle("");
    }
  }

  return (
    <div>
      <h2>Cours : Liste dynamique</h2>
      <input
        type="text"
        placeholder="Ajouter un article"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
      />
      <button onClick={ajouterArticle}>Ajouter</button>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
