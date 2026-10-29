import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {
  const [licznik, setLicznik] = useState(0);

  return (
    <div>
      <h2>Licznik</h2>
      <h3 className="mb-3">{licznik}</h3>
      <div className="btn-group" role="group" >
        <button type="button" className="btn btn-outline-primary" onClick={() => setLicznik(licznik + 1)}>
          +1
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => setLicznik(licznik - 1)} disabled={licznik === 0}>
          −1
        </button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => setLicznik(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;