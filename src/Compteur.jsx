import { useState } from "react";

function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementer</button>
      <button onClick={() => setCount(count - 1)}>Decrementer</button>
    </div>
  );
}

export default Compteur;
