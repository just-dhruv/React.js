# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- ARRAY PRINT USING MAP FUNCTUIN -->
function FruitList(){
    const a = ['orange', 'apple', 'mango']
    return(
        <>
            <div>
                <ul>
                    {a.map((fruit, index) => (
                        <li>{index} - {fruit}</li>
                    ))}

                </ul>
            </div>
        </>
    )
}
export default FruitList

<!-- OBJECT PRINT USING MAP FUNCTION -->
function ObjectName(){
    const b = {
        'name' : "Dhruv",
        'surname' : "Dhameliya"
    }

    function fullName(b){
        return b.name + ' ' + b.surname;
    }

    return(
        <>
            <h2>Objects</h2>
            <p>Name: {b.name}</p>
            <p>Surname: {b.surname}</p>

            <p>Fullname: {fullName(b)}</p>
        </>
    )
}
export default ObjectName

<!-- ARRAY OF OBJECT PRINT USING MAP -->
function ObjectArray(){
    const users = [
        {name: 'dhruv', lname: 'dhameliya', age:'22'},
        {name: 'Rahul', lname: 'dhameliya', age:'22'},
        {name: 'dhruv', lname: 'dhameliya', age:'22'}

    ]
    function full(user){
        return user.name + ' ' + user.lname;
    }
    return(
        <>
            <h2>object of array</h2>
            <ul>
                {users.map((user, index)=>(
                    // <li>{index} Name : {user.name} {user.lname}, age: {user.age}</li>

                    <li>{index} : {full(user)} is {user.age} years old.</li>
                ))}
            </ul>

        </>
    )
}
export default ObjectArray

<!-- IF WANT TO EXPORT MORE THEN ONE COMPONENT USE IT LIKE THIS -->
export default FruitList
export {ObjectName}
export {ObjectArray}

import FruitList, {ObjectName, ObjectArray} from './FruitList.jsx'

<!-- CONDITONAL RENDERING EXAMPLSE (USED IF STATEMENT) -->
function ConditionRendering(){
    // USEING IF CONDITION
    const isLogedIn = true;
    let message;
    if (isLogedIn) {
        message = <h1>Welcome user.</h1>
    }else{
        message = <h1>Bye user.</h1>
    }
    // message = isLogedIn ? <h1>Welcome user.</h1> : <h1>Bye user.</h1> ;
    return <div>{message}</div>

    // USING TERNARY OPERATOR
    // return(
    //     <div>
    //         {isLogedIn ? <h1>Welcome user.</h1> : <h1>Bye user.</h1>}
    //     </div>
    // )

    // USING OPERATORS
    // const hasMessage = false
    // return(
    //     <div>
    //         {hasMessage && <p>Yor AND condition is passed.</p>}
    //         {hasMessage || <p>Yor OR condition is passed.</p>}
    //     </div>
    // )

    // USED THE CSS CLASSES 
    // const isVisible = true;
    // return(
    //     <>
    //         <p>Current value : {isVisible.toString()}</p>
    //         <div className={isVisible ? "visible" : "unvisible"}>
    //             <h1>Hello Dhruv!</h1>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolor!</p>
    //         </div>
    //     </>
    // )
}
export default ConditionRendering

## CONDITONAL RENDERING EXAMPLSE (USED IF STATEMENT) : USED THE CONDITION FOR COMPONENTS SHOW
import ConditionRendering from "./ConditionalRendering";
import Hello from "./Hello"

function App() {

  const isLoged = false;
  if (isLoged) {
    return <Hello />
  }else{
    return <ConditionRendering />
  }
}
export default App

<!-- PROPS -->
## Props.jsx
export default function Prop(index) {
    return(
        <>
            <h2>Hello {index.name}</h2>
            <p>I am {index.age} years old.</p>
        </>
    )
}
## 2nd way
export default function Prop(index) {
    const {name, age} = index
    return(
        <>
            <h2>Hello {name}</h2>
            <p>I am {age} years old.</p>
        </>
    )
}
## set default value
export default function Prop({name='default', age=25}) {
    return(
        <>
            <h2>Hello {name}</h2>
            <p>I am {age} years old.</p>
        </>
    )
}
## using array (also can use the object)
export default function Prop({name='default', age=25}) {

    const hobbies = ['cricket', 'chess','football']

    return(
        <>
            <h2>Hello {name}</h2>
            <p>I am {age} years old.</p>
            <ul>
                {hobbies.map((hobby)=>(
                    <li>{hobby}</li>
                ))}
            </ul>
        </>
    )
}
## Button.jsx
export default function Button({label, handleClick}){
    return <button onClick={handleClick}>{label}</button>
}
## Prop.jsx - use the props for buttons
import Button from "../Button"
export default function Prop({name='default', age=25}) {
    const hobbies = ['cricket', 'chess','football']
    function Message(){
        alert('Hello, you just have clicked the button');
    }
    return(
        <>
            <h2>Hello {name}</h2>
            <p>I am {age} years old.</p>
            <ul>
                {hobbies.map((hobby)=>(
                    <li>{hobby}</li>
                ))}
            </ul>
            <Button label="Click Me" handleClick={Message} />
            <Button label="Don't Click Me" handleClick={Message} />
        </>
    )
}
## main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Prop from './Prop.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prop name="dhruv"/>
    <Prop name="rahul" age={20}/>
    
  </StrictMode>,
)

<!-- useState - states -->
## Countre.jsx
import { useState } from "react"
function Counter({label}){
    const [count, setCount] = useState(1);
    function increment(){
        setCount(count + 1);
    }
    return(
        <div>
            <h2>Counter = {count}</h2>
            <button onClick={increment} >{label}</button>

            <br />
            <button onClick={() => setCount(count - 1)}>Remover Count</button>
        </div>
    )
}
export default Counter
## ToggleText.jsx
import { useState } from 'react'
function ToggleText() {

    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            <h2>Variable value : {isVisible.toString()}</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "hide text" : "show text"}
            </button>
            {isVisible && <p>This is the text to be toggled</p>}
        </>
    )
}
export default ToggleText
## LikeButton.jsx
import { useState } from "react"

const LikeButton = () => {
    const [ like, setLike ] = useState (true);

    return (
        <>
            <button onClick={() => setLike(!like)}>
                {like ? " ❤️Liked" : "🤍Like" }
            </button>
        </>
    )
}
export default LikeButton;

## Students.jsx
import { useState } from "react"
function Students() {
    const [students, setStudents] = useState({
        name: "Dhruv Dhameliya",
        age: 22,
        course: "MERN Stack Development"
    })
    function updateStudentDetails(){
        setStudents({
            name: "just dhruv",
            age: 26,
            course: "full stack development"
        })
    }
    function changeAge(){
        setStudents({...students, age: 30})
    }
    return (
        <>
            <h1>Student Name: {students.name} </h1>
            <h2>Student Age: {students.age} </h2>
            <h3>Student Course: {students.course} </h3>

            <button onClick={updateStudentDetails}>
                Update Student Details
            </button>

            <button onClick={changeAge}>Change Age</button>
        </>
    )  
}
export default Students;    

## InputExample.jsx
import { useState } from "react";
function InputExample(){
    const [ name, setName ] = useState("")

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />

            <p>Hello {name || "Guest" }</p>
        </>
    )
}
export default InputExample

## App.jsx
import Counter from "./Counter"
import ToggleText from "./ToggleText"
import LikeButton from "./LikeButton"
import UserProfile from "./UserProfile"
import Students from "./Students"
import InputExample from "./InputExample"
function App() {
  return (
    <>
      {/* <Counter label="Click" /> */}
      {/* <ToggleText /> */}

      {/* <LikeButton /> */}

      {/* <UserProfile /> */}
      {/* <Students /> */}

      <InputExample />
    </>
  )
}
export default App

<!-- FORM HANDLING -->
## SimpleForm.jsx
import { useState } from "react";
function SimpleForm(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log('name:', name);
        console.log('email:', email);
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h2>React form example</h2>

                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br/>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SimpleForm

## MultiInputForm.jsx
import { useState } from "react"
export default function MultiInputForm(){
    const [ formData, setFormData ] = useState({
        name: 'Dhruv',
        email: 'dhruv@test.com',
        age : 23
    })
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }
    const  handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    return(
        <>
            <h2>Multiple Input form</h2>
            <form action="" onSubmit={handleSubmit}>

                <input type="text"
                    name="name"
                    value={formData.name} onChange={handleChange} placeholder="Name"/>
                <br />

                <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email"/>

                <br />
                <input type="number" name="age" onChange={handleChange} value={formData.age} placeholder="Age"/>

                <br />
                <button type="submit">Submit</button>
            
            </form>
        </>
    )
}

## AdvancedForm
import { useState } from "react"
export default function AdvancedFrom(){
    const [ advanceData, setAdvanceData ] = useState({
        gender: '',
        country: 'India',
        agree: false
    })
    function handleSubmit(e){
        e.preventDefault();
        console.log(advanceData);
    }
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setAdvanceData((pre) => ({
            ...pre,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    return(
        <div>
            <h2>Advanced Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="radio" name="gender" value="male" checked={advanceData.gender === "male"} onChange={handleChange} />
                    Male
                </label>
                <label htmlFor="">
                    <input type="radio" name="gender" value="female" checked={advanceData.gender === "female"} onChange={handleChange}  />
                    Female
                </label>
                <br />
                <br />
                <label htmlFor="">
                    Country
                    <select name="country" value={advanceData.country} onChange={handleChange}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </label>
                <br />
                <br />
                <label htmlFor="">
                    <input type="checkbox" name="agree" checked={advanceData.agree} onChange={handleChange}/>
                    I agree to the terms and conditions
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

## UncontrolledForm.jsx
import { useRef } from "react";
export default function UncontrolledForm(){
    const nameField = useRef();
    const emailField = useRef();

    function handleForm(e){
        e.preventDefault();
        console.log('name: ', nameField.current.value, 'email :', emailField.current.value);
    }
    return(
        <div>
            <h2>Uncontrolled Form</h2>
            <form action="" onSubmit={handleForm}>
                <input type="text" ref={nameField} placeholder="name" />
                <br />
                <input type="text" ref={emailField} placeholder="email" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

## BasicValidation.jsx
import { useState } from "react";
export default function BasicValidation(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    function handleForm(e){
        e.preventDefault();
        if(!name || !email){
            setError("All fields are required");
        }else{
            setError("");
            console.log("name: ", name, "email: ", email);
        }
    }
    return(
        <div>
            <h2>Basic Validation Form</h2>
            <form action="" onSubmit={handleForm}>
            
                <input type="text" value={name} name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="email" name="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type="submit">Submit</button>

                { error && <p>{error}</p>}
            </form>
        </div>
    )
}
## App.jsx
// import AdvancedForm from "./AdvancedForm"
// import MultiInputForm from "./MultiInputForm"
// import SimpleForm from "./SimpleForm"
// import UncontrolledForm from "./UncontrolledForm"
import BasicValidation from "./BasicValidation";

function App() {

  return (
    <>
      {/* <SimpleForm /> */}
      {/* <MultiInputForm /> */}
      {/* <AdvancedForm /> */}
      {/* <UncontrolledForm /> */}
      <BasicValidation />
    </>
  )
}
export default App

<!-- useEffect : HOOK -->
## First.jsx
import { useState, useEffect } from 'react'
function First(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Dhruv');

    useEffect(() => {
        document.title = `count: ${count}`;
        console.log('Component Render')
    }, [count])
    return (
        <>
            <h1>Count: { count }</h1>
            <h2>Name: { name }</h2>
            <button onClick={() => { setCount(count + 1);}}>Increase</button>
            <button onClick={() => { setName('Rahul')}}>Name</button>
        </>
    )
}
export default First

## Timer.jsx
import { useState, useEffect } from 'react'
function Timer() {
    const [second, setSecond] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prev) => prev + 1)
        }, 1000)

        return() => {
            clearInterval(interval);
            console.log('interval cleared');
        }
    },[])
    return (
        <>
            <h1>Seconds: { second }</h1>
        </>
    )
}
export default Timer

## WindowWidthTracker.jsx
import { useState, useEffect } from 'react'
function WindowwidthTracker(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return(
        <>
            <h1>Window Width: {width}px</h1>
        </>
    )
}
export default WindowwidthTracker

## Users.jsx
import { useState, useEffect } from 'react'
function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    },[])
    return(
        <>
            <h1>Users List</h1>
            <ul>
                {users.map((n) => (
                    <li key={n.id}>{n.name}</li>
                ))}
            </ul>
        </>
    )
}
export default Users

## App.jsx
import First from "./First"
import Timer from "./Timer"
import WindowwidthTracker from "./WindowWidthTracker"
import Users from "./Users"

function App() {

  return (
    <>
      {/* <First /> */}
      {/* <Timer /> */}
      {/* <WindowwidthTracker /> */}
      <Users />
    </>
  )
}

export default App

<!-- REACT ROUTER -->
<!-- basic routing structure -->
## App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

<!-- use of useParams -->
## App.jsx

import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
function App() {
  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2>User name is: { id }</h2>
  }
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link> | 
          <Link to="/user/10">User</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

<!-- page not found 404 -->
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
function App() {
  function NotFound() {
    return <h1>404 - Page not found.</h1>
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} /> // for 404 add *
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

<!-- useNavigat hook -->
## Home.jsx
import { useNavigate } from "react-router-dom"
function Home(){
    const navigate = useNavigate();
    const GotoAbout = () => {
        navigate("/about");
    }
   return(
     <>
        <h1>Home page</h1>
        <button onClick={GotoAbout}>Goto About Page</button>
    </>
   )
}
export default Home

<!-- nested routes and use of Outlet -->
## Products.jsx
import { Link, Outlet } from 'react-router-dom'
export default function Products() {
    return(
        <>
            <h1>Product Page</h1>
            <ul>
                <li>
                    <Link to='phone'>Phone List </Link>
                </li>
                <li>
                    <Link to='tablet'>Tablet List</Link>
                </li>
            </ul>
       <Outlet /> // add where you want to show the text
        </>
    )
}
## Phone.jsx
export default function Phone() {
    return(
        <>
            <h1>Phone List</h1>
            <ul>
                <li>Apple</li>
                <li>Samsung</li>
                <li>MI</li>
            </ul>
        </>
    )
}

## App.jsx
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Phone from './Phone'
import Tablet from './Tablet'

function App() {
  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2>User name is: { id }</h2>
  }
  function NotFound() {
    return <h1>404 - Page not found.</h1>
  }
  return (
    <>
      <BrowserRouter>
        {/* <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link> | 
          <Link to="/user/10">User</Link> | 
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />
          {/* NESTED ROUTE */}
          <Route path='/products' element={<Products />}>
            <Route path='phone' element={<Phone />} />
            <Route path='tablet' element={<Tablet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

<!-- USEEFFECTEVENT - HOOK -->
## Timer.jsx
import { useState, useEffect, useEffectEvent } from 'react'
export default function Timer() {
    const [count, setCount] = useState(0)
    const onTick = useEffectEvent(() => {
                console.log('count :', count);
                setCount((prev) => prev + 1);
            })
    useEffect(() => {
        const interval = setInterval(() => {
        onTick();            
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    })
    return (
        <>
            <h1>Timer: {count}</h1>
        </>
    )
}

<!-- form data saved automatically -->
## AutoSaveForm.jsx
import { useEffect, useEffectEvent, useState } from 'react'
export default function AutoSaveForm(){
    const [formData, setFormData] = useState({name:"", email:""})
    const saveData = useEffectEvent(() => {
                        console.log('Form Data :', formData);
                    })          
    useEffect(() => {
        const interval = setInterval(() => {
            saveData();
        }, 3000)
        return() => clearInterval(interval);
    }, [])
    return(
        <>
            <h1>Auto save form</h1>
            <form action="">
                <input 
                    type="text"
                    placeholder="name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    /> 
                    <br /><br />
                <input 
                    type="text"
                    placeholder="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    />
            </form>
        </>
    )
}

## App.jsx
import Timer from "./Timer"
import AutoSaveForm from "./AutoSaveForm"

function App() {

  return (
    <>
     {/* <Timer /> */}
     <AutoSaveForm />
    </>
  )
}

export default App

<!-- PROPS DRILLING -->
## App.jsx
function Parent() {
  const name = "Dhruv";
  return <Chiled name={name} />;
}
function Chiled({ name }) {
  return (
    <>
      <GrandChiled name={name} />
      <h1>My name is {name}</h1>
    </>
  );
}
function GrandChiled({name}) {
  return(
    <>
      <h2>Grand Chiled Name: {name}</h2>
    </>
  )
}
function App() {
  return (
    <>
      <Parent />
    </>
  );
}
export default App;

<!-- from chiled to parent -->
## StateLifting.jsx
import { useState } from "react";
function StateLifting() {
  const [text, useText] = useState("");
  return (
    <div>
      <InputBox onChange={useText} />
      <Display value={text} />
      <h2>Type: {text}</h2>
    </div>
  );
}
function InputBox({ onChange }) {
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
}
function Display({ value }) {
  return <h3>Type: {value}</h3>;
}
export default StateLifting;

<!-- used the state from other funtion -->
## ShareState.jsx
import { useState } from "react";
function ShareState(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <ChiledA setCount={setCount} />
            <ChiledB count={count} />
        </div>
    )
}
function ChiledA(props){
    const handleClick = () => {
        props.setCount(prevCount => prevCount + 1);
    }
    return <button onClick={handleClick}>Click</button>
}
function ChiledB(props){
    return <h2>count: {props.count}</h2>
}
export default ShareState

## Main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StateLifting from './StateLifting.jsx'
import ShareState from './ShareState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShareState />
    <StateLifting />
    {/* <App /> */}
  </StrictMode>,
)

<!-- useContext -->
## App.jsx
import { createContext, useContext } from "react"
const userCount = createContext(); // create context
function App() {
  const user1 = "Dhruv Dhameliya";
  return (
    <>
      <userCount.Provider value={user1}> // provide the value
        <Parent />
      </userCount.Provider>
    </>
  )
}
function Parent(){
  return <Chiled />
}
function Chiled(){
  const user = useContext(userCount);
  return (
    <>
      <h1 style={{color:"red",fontSize:"40px"}}>Name : {user}</h1> // use the value
      <Granchiled />
    </>
  )
}
function Granchiled(){
  const user2 = useContext(userCount);
  return <h3>My name is {user2}</h3>
}
export default App

<!-- use the multiple value -->
## App.jsx
import { createContext, useContext } from "react"
const userCount = createContext();
function App() {
  const user1 = {
    name : "Dhruv Dhameliya",
    age : "22"
  };
  return (
    <>
      <userCount.Provider value={user1}>
        <Parent />
      </userCount.Provider>
    </>
  )
}
function Parent(){
  return <Chiled />
}
function Chiled(){
  const { name, age } = useContext(userCount);
  return (
    <>
      <h1 style={{color:"red",fontSize:"40px"}}>Name : {name}</h1>
      <h2>Age: {age}</h2>
      <Granchiled />
    </>
  )
}
function Granchiled(){
  const { name, age} = useContext(userCount);
  return <h3>My name is {name}</h3>
}
export default App

## ThemeChange.jsx 
<!-- theme change light to dark using useContext -->
import { useState, createContext, useContext, useEffect } from "react";
const themeContext = createContext();
function ThemeChange() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#000';
    document.body.style.color = theme === 'light' ? '#000' : '#fff';
  }, [theme])
  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        <ToolBar />
      </themeContext.Provider>
    </>
  );
}
function ToolBar() {
  return <ThemeButton />;
}
function ThemeButton() {
  const {theme, setTheme} = useContext(themeContext);
  const style = {
    backgroundColor: theme === "light" ? "#000" : "#fff",
    color: theme === 'light' ? "#fff" : "#000"
  }
  return (
    <button onClick={() => setTheme( theme === "light" ? "dark" : "light")} style={style}>
      Theme Changes to {theme}
    </button>
  );
}
export default ThemeChange;

<!-- login logou using useContex -->
## AuthContext.jsx
import { createContext, useState } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
    return(
        <AuthContext.Provider value={{ isLoggedIn, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProvider }

## Navbar.jsx
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
const Navbar = () => {
    const { isLoggedIn, login, logout } = useContext(AuthContext);
    return(
        <nav>
            {isLoggedIn ? (
                <button onClick={logout}>Log Out</button>
            ) : (
                <button onClick={login}>Log In</button>
            )}
        </nav>
    )
}
export default Navbar

## main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeChange from './ThemeChange.jsx'

import Navbar from './auth-example/Navbar.jsx'
import { AuthProvider } from './auth-example/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <Navbar/>
    </AuthProvider>
  </StrictMode>,
)

<!-- USEREDUCER -->
## Test.jsx
import { useState, useReducer } from "react"
// USING useState
// export default function Test(){
//     const [checked, setChecked] = useState(false);
//     return(
//         <div>
//             <input type="checkbox" checked={checked}
//                 onChange={() => setChecked(!checked)}
//             />

//             {checked ? " Checked" : " Not Checked" }
//         </div>

//     )
// }
// USING useReducer
export default function Test(){
    const [checked, toggle] = useReducer((checked) => !checked, false);

    return(
        <div>
            <input type="checkbox" checked={checked}
                onChange={toggle}
            />

            {checked ? "Checked" : "Not Checked"}
        </div>
    )
}

## Counter.jsx
import { useReducer } from "react"
export default function Counter(){
    function reducer(state, action){
        switch(action.type){
            case "increment" :
                return{ count : state.count + 1 }
            case "decrement" :
                return{ count : state.count - 1 }
            case "reset" :
                return{ count : 0 }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {count:0});
    return(
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}

## Form.jsx
import { useReducer } from "react";
export default function Form() {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
  const [formData, dispatch] = useReducer(reducer, { username: "", email: "" });
  function handleChange(e) {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      <p>
        {formData.username} - {formData.email}
      </p>
    </form>
  );
}

<!-- USEMEMO HOOK -->
<!-- store the value of long calculation so the speed does not decrease -->
## WithoutUseMemo.jsx
import { useState } from 'react'
function WithoutUseMemo(){
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState("");
    const expensiveCalculation = () => {
        console.log('funtion is running');
        let total = 0;
        for( let i = 0; i < 1000000000; i++){
            total += i;
        }
        return total
    }
    const result = expensiveCalculation();
    return(
        <div>
            <h2>Total : {result}</h2>
            <h3>Count : {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br />
            <input type="text" value={text} 
                onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
export default WithoutUseMemo

## WithUseMemo.jsx
import { useMemo } from 'react';
import { useState } from 'react'
function WithUseMemo(){
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState("");
    const expensiveCalculation = (n) => {
        console.log('funtion is running');
        console.log(n);
        let total = 0;
        for( let i = 0; i < 100000; i++){
            total += i;
        }
        return total + n;
    }
    const result = useMemo(() => expensiveCalculation(count), [count]);
    return(
        <div>
            <h2>Total : {result}</h2>
            <h3>Count : {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br />
            <input type="text" value={text} 
                onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
export default WithUseMemo

## Parent.jsx
import React, { useState, useMemo } from "react";
function Parent() {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({ name: "dhruv Dhruv", age: 20 }), []);
  console.log("Parent Running...");
  return (
    <>
      <h1>Parent Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child value={user} />
    </>
  );
}
const childMemory = ({ value }) => {
  console.log("Child Rendered..");
  return <h2>Child : {value.name}</h2>;
};
const Child = React.memo(childMemory); // React.memo used so the component doesn't run again if the value is not changed.
export default Parent;

<!-- useCallback hook -->
<!-- used to store in the momory using React.memo -->
## Counter.jsx
import { useCallback, useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  // create only one time and store it into memory so the app doesnt load much
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increase</button>
    </>
  );
}
export default Counter;

## Parent.jsx
import { useCallback, useState } from "react";
import Child from "./Child";
function Parent() {
  const [count, setCount] = useState(0);
  // create only one time and store it into memory so the app doesnt load much
  const handleclick = useCallback(() => {
    console.log("child function run again..");
  }, []);
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Parent </button>
      <Child click={handleclick} />
    </>
  );
}
export default Parent;

## Child.jsx
import React from "react";
function Child({ click }) {
  console.log("1st time Child Rendered..");
  return (
    <>
      <button onClick={click}>Child Button</button>
    </>
  );
}
export default React.memo(Child);

<!-- useLayoutEffect -->
where to use it
- used for DOM measurement
- used for layout adjustment
- prevent flicker/jumping
when not to use it:
- API calls & fetching data
- event listner
- local state update

## Test.jsx
import { useEffect, useLayoutEffect } from "react"
function Test(){
    useEffect(() => {
        console.log("useEffect rung");
    }, []);
    // useLayoutEffect runs first, befor the html rendered
    useLayoutEffect(() => {
        console.log("useLayoutEffect rung");
    }, []);
    return(
        <h1>useEffect</h1>
    )
}
export default Test

## Example1.jsx
import { useState, useRef, useLayoutEffect } from "react"
function Example1(){
    const hRef = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(hRef.current.clientHeight);
    }, [])
    return(
        <>
            <div ref={hRef} style={{width:"200px", padding: "30px", background: "#eee"}}>Hello World</div>
            <p>Height : {height}</p>
        </>
    )
}
export default Example1

## Example2.jsx
import { useLayoutEffect, useRef } from "react"
function Example2(){
    const boxRef = useRef();
    useLayoutEffect(() => {
        const el = boxRef.current
        const width = el.offsetWidth;
        console.log(width);

        el.style.transform = `translateX(${width}px)`;
    }, [])
    return(
        <>
            <div ref={boxRef} style={{
                width: "200px",
                padding: "20px",
                background: "#eee",
                transition: "3s"
            }}>
                Hello World
            </div>
        </>
    )
}
export default Example2

## Chat.jsx
import { useLayoutEffect, useRef } from "react";
function Chat() {
  const chatRef = useRef(0);
  useLayoutEffect(() => {
    const el = chatRef.current;
    el.scrollTop = el.scrollHeight;
  });
  return (
    <>
      <div
        ref={chatRef}
        style={{
          height: "150px",
          border: "1px solid #ccc",
          overflowY: "scroll"
        }}
      >
        Hello World
        <p>Hello</p>
        <p>How are you?</p>
        <p>I am find and you?</p>
        <p>Hello</p>
        <p>How are you?</p>
        <p>I am find and you?</p>
        <p>Hello</p>
        <p>How are you?</p>
        <p>I am find and you?</p>
        <p>Hello</p>
        <p>How are you?</p>
        <p>I am find and you?</p>
      </div>
    </>
  );
}
export default Chat;


<!-- CUSTOM HOOK CREATE -->
BENEFITS
- reuse logic across multiple components
- fetching data
- managing form
- toggling values
- handling localstorage
- timer logic
- authentication logic
- keep component ceand and small
- avoid dublicate code
POINTS TO CHECK
- start with "use"
- returns values/functions
- does not return JSX
- uses other React hook inside it

<!-- EXAMPLE 1 -->
## useToggle.js
import { useState } from "react"
export default function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue)
    const toggle = () => setValue(prev => !prev)
    return [value, toggle] // custom hooks always return something like value or functions
}

## ToggleTest.jsx
import useToggle from "./hooks/useToggle";
export default function ToggleTest() {
  const [customHookValue, customHookFunction] = useToggle();
  const [value, toggle] = useToggle();
  return (
    <>
      <div>
        <button onClick={customHookFunction}>Click</button>
        {customHookValue && <p>Hello world</p>}
      </div>
      <div>
        <button onClick={toggle}>Toggle</button>
        {value && <p>Hello world i am dhruv</p>}
      </div>
    </>
  );
}

<!-- EXAMPLET 2 -->
## useFetch.js
import { useState, useEffect } from 'react'
export default function useFetch(url){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(url);
                const json = await result.json()
                setData(json);
                
            } catch (err) {
                setError(err);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [url])
    return { data, error, loading }
}

## Users.jsx
import useFetch from "./hooks/useFetch";
export default function User() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error Occured!</h2>;
  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            Name : {user.name}
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </>
  );
}

<!-- example 3 -->
## useForm.js
import { useState } from "react";
export default function useForm(initialValue = {}, callback) {
    const [values, setValues] = useState(initialValue);
    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (callback) callback(values);
    }
    // reset the form
    const resetForm = () => setValues(initialValue);
    return {
        values, handleChange, handleSubmit, resetForm
    }
}

## Login.jsx
import useForm from "./hooks/useForm"
export default function Login(){
    const initialValues = {
        email: "",
        password: ""
    }
    const onSubmit = (values) => {
        console.log("Form submitted: ", values); // in real here goes the form data to save in api or database on the form submit
    }
    const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, onSubmit);
    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange} />
                    <br />
            <input type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange} />
                    <br />
            <button type="submit">submit</button>
            <button onClick={resetForm}>Reset</button>
        </form>
    )
}

<!-- HIGNER ORDER COMPONENT -->
<!-- mainly used for -->
- Reusing logic
- Adding extra features
- Wrapping components with reusable code

<!-- EXAMPLE -->
- authentication / protected routes
- role-based access control
- UI layout wrappers
- error boundries
- logging and analytics
- wrapping components with providers
- managing component rendering conditions

## withStyle.jsx
function withStyle(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <>
        <div style={{ border: "2px solid red", padding: "10px" }}>
          <WrappedComponent {...props} />
        </div>
      </>
    );
  };
}
export default withStyle;

## Greeting.jsx
export default function Greeting({name}) {
  return (
    <div>
        <h1>Hello {name}</h1>
    </div>
  )
}

## Greetings.jsx
function Greetings({value}) {
  return (
    <div>Greeting {value}</div>
  )
}
export default Greetings

## GreetingWithStyle.jsx
import withStyle from "./hoc/withStyle";
import Greeting from "./Greeting";

import Greetings from "./Greetings";

export const GreetingWithStyle = withStyle(Greeting);

export const GreetingsWithStyle = withStyle(Greetings);


## withData.jsx
import { useState, useEffect } from "react"
function withData(WrappedComponent, url) {
  return function EnhancedComponent(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return <WrappedComponent data={data}/>
  }
}
export default withData

## PostList.jsx
function PostList({ data }) {
  return (
    <div>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}
export default PostList;

## PostListWithData.jsx
import PostList from "./PostList";
import withData from "./hoc/withData";
const PostListWithData = withData(PostList, 'https://jsonplaceholder.typicode.com/posts');
export default PostListWithData

## withAuth.jsx
function withAuth(WrappedComp) {
  return function Protected(props) {
    const isLogIn = true;
    if (!isLogIn) return <h3>Please login</h3>;
    return <WrappedComp {...props} />;
  };
}
export default withAuth;

## Dashboard.jsx
import React from 'react'
function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}
export default Dashboard

## App.jsx
import Greeting from './Greeting'
import { GreetingWithStyle, GreetingsWithStyle } from "./GreetingWithStyle";
import PostListWithData from './PostListWithData'
import Dashboard from './Dashboard'
import withAuth from './hoc/withAuth'
const ProtectedDashboard = withAuth(Dashboard);
function App() {

  return (
    <>
    {/* <Greeting name="Dhruv" /> */}
    <GreetingWithStyle name='rahul' />

    <GreetingsWithStyle value="Welcome" />
    {/* <PostListWithData /> */}
    <ProtectedDashboard />
    </>
  )
}
export default App
  
<!-- LAZY LOADING -->
## Post.jsx
import { useState, useEffect } from 'react'

function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data);
        }

        fetchPost();
    }, [])

    return (
        <div>
            <h2>Posts Data</h2>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Post

## App.jsx
import { useState, lazy, Suspense } from "react"
// import Post from "./Post"
const Post = lazy(() => import('./Post'))
function App() {
  const [showPost, setShowPost] = useState(false);
  return (
    <>
      <button onClick={() => setShowPost(!showPost)}>Show/Hide Post</button>
      { showPost && (
        <Suspense fallback={<p>Loading Posts...</p>}>
          <Post />
        </Suspense>
      )}
    </>
  )
}
export default App

<!-- createPortal -->
<!-- it is used to show the content outside the root element of reacj mostli used to show the modals -->
## PortalTest.jsx
import React from 'react'
import { createPortal } from 'react-dom'
function PortalTest() {
  return createPortal(
    <div>PortalTest</div>,
    document.querySelector('#test-selecter')
  )
}
export default PortalTest

## Modal.jsx
import React from 'react'
import { createPortal } from 'react-dom';
function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null;
    return createPortal(
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}

                <button style={styles.btn} onClick={onClose}>Close</button>
            </div>
        </div>,
        document.querySelector('#modal-test')
    )
}
const styles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '-1'
    },
    modal: {
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        minWidth: '300px'
    },
    btn: {
        marginTop: '15px'
    }
}
export default Modal

## App.jsx
import { createPortal } from "react-dom"
import PortalTest from "./PortalTest"
import { useState } from "react"
import Modal from "./Modal";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div style={{ padding: '30px' }}>
      <h1>Application</h1>
      {/* <PortalTest /> */}
      {/* { createPortal(<h1>Portal</h1>, document.body)} */}
      <button onClick={() => setModalOpen(true)}>Show Model</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Model</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos molestiae enim sed. Impedit facilis nemo provident nobis, asperiores exercitationem ex?</p>
      </Modal>
    </div>
  )
}
export default App

## index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>createportal</title>
  </head>
  <body>
    <div id="root"></div>

    <div id="test-selecter"></div>
     <div id="modal-test"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>




















