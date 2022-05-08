import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // api data loading by useEffect function

  // useEffcet(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayoks(data));
  }, [])

  // const nayoks = [{ name: 'jasim', age: '56' }, { name: 'DeepJol', age: '56' }, { name: 'BappaRaz', age: '56' }, { name: 'Omar Sani', age: '56' }];




  return (
    <div className="App">
      {/* movice count section */}
      <MovieCounter></MovieCounter>


      {/* nayok section */}
      {
        nayoks.map(x => <Nayok name={x.name} email={x.email} id={x.id} ></Nayok>)
      }



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div >
  );
}

function MovieCounter() {
  let [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add movie </button>
      <h3>Number of movies : {count} </h3>
      <h3>PER MOVIE 12 TK OLE TOTAL {count * 12}</h3>
      <Movicedisplay movies={count} ></Movicedisplay>
      <Movicedisplay movies={count + 1} ></Movicedisplay>
      <Movicedisplay movies={count + 2} ></Movicedisplay>
      <Movicedisplay movies={count + 3} ></Movicedisplay>
    </div>
  )
}
function Movicedisplay(props) {
  return <h4>Movies I have acted : {props.movies} </h4>
}

function Nayok(props) {
  // console.log(props.age);
  const nayokStyle = {
    border: '2px solid red ',
    margin: '20px',
    padding: '20px'

  }
  return (<div style={nayokStyle}>
    <h1>ami kkol nayok {props.name}</h1>
    <h2>i have done 5 movie and email : {props.email}</h2>
    <h3>the name of city id : {props.id}</h3>
  </div>
  )
}

export default App;
