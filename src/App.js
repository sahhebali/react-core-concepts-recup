import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  return (
    <div className="App">
      <PrackTice> </PrackTice>
      <LoadUsers></LoadUsers>


    </div>
  );
}

function PrackTice(props) {
  const myStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: '3px solid blue',
    margin: '10px'
  }
  return (
    <div style={myStyle}>
      <h1>Practice 45.5-React-corconcepts module</h1>
      <p>I can write a Component </p>
    </div>

  )
}

function LoadUsers() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (

    <div>
      <h1>Load Users</h1>
      {
        user.map(user => <Users name={user.name} phone={user.phone}></Users>)
      }
    </div>
  )
}

function Users(props) {
  const userStyle = {
    backgroundColor: 'salmon', margin: '10px', padding: '5px', border: '2px solid blue', borderRadius: '15px'
  }
  return (
    <div style={userStyle}>
      <h2>{props.name}</h2>
      <h4 style={{ color: 'white' }}>{props.phone}</h4>
    </div>
  )
}

export default App;



/* ৬. ব্লগ নামক একটা কম্পোনেন্ট বানাও

৭. সেই ব্লগ কম্পোনেন্ট দিয়ে মিনিমাম তিনটা কম্পোনেন্ট বানাবে।

৮. প্রত্যেকটা কম্পোনেন্ট এ heading এবং author নামে দুইটা প্রপার্টি সেন্ড করবে। এবং সেই প্রপার্টিগুলো দেখাবে।

. */


/*

  <Mycomponent brand='Apple' price='50000'></Mycomponent>
      <Mycomponent brand='google' price='0'></Mycomponent>
      <Mycomponent brand='facebook' price='10000'></Mycomponent>

function Mycomponent(props) {
  const [points, setPoints] = useState(1)
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={{ backgroundColor: 'green', color: 'white', border: '3px solid red', margin: '10px', borderRadius: '10px' }}>

      <h1>Yo Yo Mama !!! {props.brand}</h1>
      <h4> Asking mony : {props.price} I have points : {points}</h4>
      <button onClick={handleAddPoints}>add points</button>
      <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>I can Write a Component </p>
    </div>
  )
}
*/