import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'


function App() {

  return (
    <div className="App">
      <PrackTice> </PrackTice>
      {/* <LoadUsers></LoadUsers> */}
      {/* {
        blogHeading.map(blogHeading => <Blog heading={blogHeading.heading} author={blogHeading.author}></Blog>)
      } */}
      {/* <Mobile></Mobile> */}
      <UserTodos></UserTodos>



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

function UserTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])
  return (
    <div>
      <h1>Todos :</h1>
      {
        todos.map(todos => <Todos title={todos.title} id={todos.id}></Todos>)
      }
    </div>
  )
}

function Todos(props) {
  return (
    <div className='blog'>
      <h2 style={{ color: 'red' }}>User todo :{props.title}</h2>
      <h5>User id : {props.id}</h5>
    </div>
  )

}

// function Mobile() {
//   const [down, setDown] = useState(100);
//   const downBatrry = () => {
//     const decrimentBT = down - 10;
//     setDown(decrimentBT)
//   }


//   return (
//     <div>
//       <h3>Charge: {down}</h3>
//       <button onClick={downBatrry}>Batarry down</button>
//     </div>
//   )
// }

/* const blogHeading = [
  { heading: 'Compleat Web-development-course', author: 'Jhanker Mahabub' },
  { heading: 'React-developer', author: 'programming-hero' },
  { heading: 'Frontend-Developr', author: 'Md-Saheb' },
]

function Blog(props) {
  return (
    <div className='blog'>
      <h1>Blog-component</h1>
      <h2>{props.heading}</h2>
      <h3 style={{ color: 'red', fontWeight: 'bold' }}>{props.author}</h3>

    </div>
  )
} */

/* function LoadUsers() {
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
} */


export default App;



/*
রিভিশন চেকলিস্ট

১. তুমি create react app দিয়ে রিএক্ট এর প্রজেক্ট বানাতে পারো কিনা (oke)

২. JSX দিয়ে একটা div এর মধ্যে article ট্যাগ দিয়ে একটা ছোট ব্লগ টাইপের কিছু লিখতে পারো কিনা (oke)

৩. তুমি css ক্লাস লিখবে যেটার নাম হবে blog তারপর তোমার JSX এর মধ্যে গিয়ে article ট্যাগ এর মধ্যে blog ক্লাস যোগ করবে। (oke)

৪. তুমি জাভাস্ক্রিপ্ট অবজেক্ট দিয়ে স্টাইল article ট্যাগ এর মধ্যে একটা h2 এর মধ্যে কিছু স্টাইল দাও। মিনিমাম ৩টা স্টাইল দিব। (oke)

৫. article ট্যাগ এর মধ্যে একটা প্যারাগ্রাফ ট্যাগ যোগ করো। তারপর inline স্টাইল সেখানে যোগ করো। (oke)

৬. ব্লগ নামক একটা কম্পোনেন্ট বানাও

৭. সেই ব্লগ কম্পোনেন্ট দিয়ে মিনিমাম তিনটা কম্পোনেন্ট বানাবে।

৮. প্রত্যেকটা কম্পোনেন্ট এ heading এবং author নামে দুইটা প্রপার্টি সেন্ড করবে। এবং সেই প্রপার্টিগুলো দেখাবে।

(চ্যালেঞ্জিং)

৯. আরেকটা কম্পোনেন্ট বানাও। যেটার নাম হবে। Mobile সেখানে একটা বাটন থাকবে। বাটন এর নাম হবে "battery down" আর উপরে একটা সংখ্যা থাকবে। ১০০। (এইটা দিয়ে বুঝবে মোবাইল এর ব্যাটারি ১০০% আছে) এখন তুমি যতবার বাটনে ক্লিক করবে। সেই সংখ্যা এর মান ১০ করে কমতে থাকবে।

১০. (স্পেশাল চ্যালেঞ্জ) উপরের ব্যাটারী ডাউন বাটনে চাপ দিলে কমবে। তবে কমতে কমতে যখন ব্যাটারি এর পরিমাণ ০ হয়ে যাবে। তারপরে আর বাটনে চাপ দিলে। ব্যাটারি কমবে না। অর্থাৎ নেগেটিভ হবে না। (দেখো এইটা করতে পারো কিনা)

১১. json placeholder এর ওয়েবসাইট এ গিয়ে todo এর ডাটা লোড করে। সেগুলাকে দেখাতে পারো কিনা দেখো।





যা করতে বলা হইছে সেটা ৭০-৮০% করতে পারলে অবশ্যই ভালো। আপাতত ১০০% না পারলেও চলবে। এই জিনিস ঘুরে ফিরে বারবার আসতে থাকবে। আর কোনভাবে ১০০% করে ফেললে তো আর কোন কথাই নাই। তবে প্রাকটিস করতে হবে। ব্যাপক প্রাকটিস।

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