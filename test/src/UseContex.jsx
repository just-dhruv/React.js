// import { useContext, createContext } from 'react'

// const UserContext = createContext();


// function UseContex() {
//   const user = {name: 'dhruv', role: 'Admin'};
//   return (
//     <UserContext.Provider value={user}>
//       <Home />

//     </UserContext.Provider>
//   )
// }

// function Home() {
//   const {name, role} = useContext(UserContext);
//   return <p>Click Me {name} - role : {role}</p>
// }

// export default UseContex

// EXAMPLE - 2 --------------------------------------------------------------------------------------------

import { useState } from 'react';
import { createContext, useContext } from 'react'

const ThemeContext = createContext();

function UseContex() {
  const [theme, setTheme] = useState('Light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar(){
  return <ThemeButton />
}

function ThemeButton(){

  const { theme, setTheme } = useContext(ThemeContext);

  return(
    <>
      <p>Current Status - {theme}</p>
      <br />
      <button onClick={() => setTheme( theme === "Light" ? "Dark" : "Light")}>Click to change the theme {theme}</button>
    </>
  )
}

export default UseContex