import Navbar from './componentes/Navbar';
import React from 'react'
import { Fragment } from 'react';
import BookCard from './componentes/BookCard'
import './styles/main.css'

function App() {
  const [books,setBooks] = React.useState([])
  React.useEffect(async ()=>{
    const res = await fetch('/datos')
    const json = await res.json()
    console.log(json)
    setBooks(json.books)
  },[])
  return ( 
    <Fragment>
      <Navbar/>
      <div className='main-container'> 
        <h2 className='title'>Listado de reviews más recientes: </h2>
        <div className='card-container'>
        {
            (books).map(book => {
            return (
                <Fragment>
                <BookCard data = {book}/>
                </Fragment>
            )
            })
        }
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;
