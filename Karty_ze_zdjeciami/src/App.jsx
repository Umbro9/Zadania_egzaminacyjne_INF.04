import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  const zwierzeta = [
    { id: 1, nazwa: "Dalmatyńczyk", plik: "obraz3.jpg" },
    { id: 2, nazwa: "Świnka morska", plik: "obraz4.jpg" },
    { id: 3, nazwa: "Kotki", plik: "obraz7.jpg" }
  ]





  return (
    <div className='container mt-4'>
      <h2>Zwierzęta do adopcji</h2>
      <div className="d-flex flex-wrap gap-3">
      {zwierzeta.map((zwierze) =>(
        <div className="card rounded" key={zwierze.id}>
          {/* <img src={`assets/2025/${zwierze.plik}`} style={{margin:'5px',width: 'calc(100% - 10px)'}} alt={`${zwierze.nazwa}`}/> */}
          <div className='card-body'>
          <h4>{zwierze.nazwa}</h4>
          <button className='btn btn-success' type="button" onClick={() => console.log(`Wybrano: ${zwierze.nazwa}`)}>Wybierz</button>
</div>
        </div>
      ))}
      </div>

    </div>
  )
}

export default App