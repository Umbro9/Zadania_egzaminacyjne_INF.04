import 'bootstrap/dist/css/bootstrap.css';

function Submit(event){
  event.preventDefault();

  const title = event.target.elements.title.value;
  const type = event.target.elements.type.value;
  
  console.log(`tytul: ${title}; rodzaj: ${type}`);

}


const App = () => {
  return (
    <div className="container mt-4">
      <form onSubmit={Submit} method='POST'> 
        <div class="form-group">
          <label htmlFor="title">Tytuł filmu</label> 
          <input type="text" class="form-control" id="title" />
        </div> 
        <div class="form-group">
          <label htmlFor="type">Rodzaj</label> 
            <select id="type" className='form-control'>
              <option></option>
              <option value="1">Komedia</option>
              <option value="2">Obyczajowa</option>
              <option value="3">Sensacyjna</option>
              <option value="4">Horror</option>
            </select>
        </div> 
        <button className="btn btn-primary" type="submit">Dodaj</button>
      </form>
    </div>
  )
}

export default App