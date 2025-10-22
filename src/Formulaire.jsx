import { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState("");

  function handleClick() {
    alert(`Bonjour, ${nom} !`);
  }

  return (
    <div>
      <h2>Event: Gérer les événements</h2>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <button onClick={handleClick}>Dire bonjour</button>
    </div>
  );
}

export default Formulaire;
