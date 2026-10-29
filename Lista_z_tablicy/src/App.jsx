import 'bootstrap/dist/css/bootstrap.css';
const App = () => {

  const cities = ["Szczecin", "Gdańsk", "Kraków", "Wrocław", "Poznań"]

  return (
    <div>
      <h2>Liczba miast: {cities.length}</h2>
      <ol>
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ol>
      <button className="btn btn-primary" type="button" onClick={() => console.log(cities)}>Pokaz w konsoli</button>
    </div>
  )
}

export default App