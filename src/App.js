
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook, updateBook } from "./features/Books";
import { useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);
  const [name, setName] = useState("");
  const [idCollection, setCollection] = useState("");
  const [location, setLocation] = useState("");
  const [newName, setNewName] = useState("");

  return (
    <div className="App">
      {" "}
      <div className='addBook'>
        <input type="text" 
        placeholder='Nombre libro...' 
        onChange={(event) =>{
          setName(event.target.value);
        }}/>
        <input type="text" 
        placeholder='Colección...' 
        onChange={(event) =>{
          setCollection(event.target.value);
        }}/>        
        <input type="text" 
        placeholder='Localización...' 
        onChange={(event) =>{
          setLocation(event.target.value);
        }}/>
        <br></br>
        <button className='lngPCV'
          onClick={() => {
            dispatch(
              addBook({
                id: bookList[bookList.length - 1].id + 1,
                name, 
                idCollection, 
                location}))
          }}
        >
          {" "}
          Agregar Libro
        </button>
      </div>
      <div className='displayBooks'>
        {bookList.map((book) => {
          return (
            <div>
              <h1 className='demoFont'>{book.name}</h1>
              <h1 className='demoFont3'><span className='demoFont2'>Id: </span>{book.id}</h1>
              <h1 className='demoFont2'>Collección: {book.idCollection}</h1>
              <h1 className='demoFont3'><span className='demoFont2'>Librería: </span>{book.location}</h1>
              <input 
                type="text"
                placeholder='Nuevo Nombre...'
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
              <button 
                onClick={() => {
                  dispatch(updateBook({id: book.id, name: newName}));
                }}
              > 
              Actualizar Nombre 
              </button>
              <button 
                onClick={() => {
                  dispatch(deleteBook({id: book.id}))
                }}
              > 
              Eliminar Libro
              </button>
            </div>
          
          );
        })}
      </div>
    </div>
  );
}

export default App;
