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




